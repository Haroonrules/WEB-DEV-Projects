const mainContainer = document.getElementById("copy")
const schemeType = document.getElementById("scheme-select");
const schemeBtn = document.getElementById("scheme-btn")
const colorSpaces = document.querySelectorAll(".colors");
const colorHex = document.querySelectorAll(".color-hex");
const color1 = document.getElementById("color-1")
const color2 = document.getElementById("color-2")
const color3 = document.getElementById("color-3")
const color4 = document.getElementById("color-4")
const color5 = document.getElementById("color-5")
const colorHex1 = document.getElementById("color-hex-1")
const colorHex2 = document.getElementById("color-hex-2")
const colorHex3 = document.getElementById("color-hex-3")
const colorHex4 = document.getElementById("color-hex-4")
const colorHex5 = document.getElementById("color-hex-5")

//adding event listener to the button to fetch api
schemeBtn.addEventListener ("click", () => {
    const color = document.getElementById("color-picker").value;
    const schemeColor = color.slice(1);
    const scheme = schemeType.value;
    const count = 5;
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${schemeColor}&mode=${scheme}&count=${count}`)
    .then(res => res.json())
    .then(data => {
        //applying all the recieved color codes to thier containers
            color1.style.backgroundColor = data.colors[0].hex.value
            color2.style.backgroundColor = data.colors[1].hex.value
            color3.style.backgroundColor = data.colors[2].hex.value
            color4.style.backgroundColor = data.colors[3].hex.value
            color5.style.backgroundColor = data.colors[4].hex.value

            colorHex1.innerHTML = data.colors[0].hex.value
            colorHex2.innerHTML = data.colors[1].hex.value
            colorHex3.innerHTML = data.colors[2].hex.value
            colorHex4.innerHTML = data.colors[3].hex.value
            colorHex5.innerHTML = data.colors[4].hex.value
    });
    
    
})
// using for each loop to get all the elements on click making them copy text to the clipboard 
colorSpaces.forEach(element => {
    element.addEventListener("click", () => {
        navigator.clipboard.writeText(element.style.backgroundColor)
        mainContainer.classList.add("active")
        setTimeout(() => {
            mainContainer.classList.remove("active")
        }, 1000);
    
    })
});
colorHex.forEach(code => {
    code.addEventListener("click", () => {
        navigator.clipboard.writeText(code.innerHTML);
        mainContainer.classList.add("active")
        setTimeout(() => {
            mainContainer.classList.remove("active")
        }, 1000);
    })
});


// darkmode toggler
const darkModeToggler = document.getElementById("toggle")
darkModeToggler.addEventListener("click", ()=> {
    darkModeToggler.checked ? document.body.classList.add("darkmode") : document.body.classList.remove("darkmode")
})
