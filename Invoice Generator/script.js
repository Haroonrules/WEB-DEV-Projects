const carWash = document.getElementById("car-wash");
const mowLawn = document.getElementById("mow-lawn");
const pullWeeds = document.getElementById("pull-weeds");
const pricingContainer = document.getElementById("items-price-container");
const totalAmount = document.getElementById("total-amount");
const sendBtn = document.getElementById("send-btn");


// Arrays for storing tasks and their prices 
const tasks  = [];
const prices = []


carWash.addEventListener ("click", function (){
    tasks.push("Car Wash")
    prices.push(10)
    addCustomItem()
    


}, {once: true} )


mowLawn.addEventListener ("click", function (){
    tasks.push("Mow Lawn")
    prices.push(20)
    addCustomItem()
    
}, {once: true})


pullWeeds.addEventListener ("click",  function (){
    tasks.push("Pull Weeds")
    prices.push(30)
    addCustomItem()
    
}
, {once: true})


// function to render out tasks and add all prices

function addCustomItem() {
    let newTask = "";
    let pricesSum = 0;
    for(let i = 0; i < tasks.length; i++){
        newTask += `
        <h2 class="task">${tasks[i]} <span class="task-span"  onclick="removeElements()">Remove</span></h2>
        <p class="task-price">$<span class="price-text font-bold">${prices[i]}</span></p>
        `
        pricingContainer.innerHTML = newTask


        pricesSum += prices[i]
        totalAmount.textContent = `
        $  ${pricesSum}
        `
    }
    

}

// Function for removing elements from markup 
function removeElements() {
    tasks.splice(0, 1);
    prices.splice(0, 1);
    addCustomItem()
    console.log(tasks, prices)
    if (tasks.length < 1) {
        pricingContainer.innerHTML = "";
        totalAmount.textContent = "$0"
    }
}


sendBtn.addEventListener("click" , reset)
function reset() {
    pricingContainer.innerHTML = "";
    totalAmount.textContent = "$0";
    alert("Your Invoice has been sent successfully refresh to send another one!!")
    sendBtn.removeEventListener("click", reset)
}