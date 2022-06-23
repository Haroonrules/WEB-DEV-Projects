let postsArray = [];

function renderPosts() {
    let html = ""
    for (let post of postsArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr class="placeholder-ruler">
        `
    }
    document.getElementById("blog-list").innerHTML = html

}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postsArray = data.slice(0, 5)
        renderPosts()
    })

    document.getElementById("submit").addEventListener("submit", event => {
        event.preventDefault();
        const blogTitle = document.getElementById("title-input")
        const blogBody = document.getElementById("blog-text")
        const blog = {
            title: blogTitle.value
            ,
            body: blogBody.value
        }
        const options = {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(blog)
          }
        fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
          .then(res => res.json())
          .then(post => {
              if(blogTitle.value && blogBody.value) {
                  postsArray.unshift(post);
                  renderPosts() 
              }
              document.getElementById("submit").reset()
          })
    })