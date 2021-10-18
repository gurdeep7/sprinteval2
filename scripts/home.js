// 3489847ae3ed4269a9d6c5ef2916f562  API KEY
let popularnews = document.getElementById("popularnews")
async function showheadlines(){

let res = await fetch("http://newsapi.org/v2/top-headlines?country=in&apiKey=3489847ae3ed4269a9d6c5ef2916f562")

let data = await res.json();

console.log("data: ", data)

appendheadlines(data.articles)
}
showheadlines();

function appendheadlines(news){

    news.forEach(({urlToImage,author,title,description,publishedAt} )=> {
        
   
   let div = document.createElement("div");

    let img = document.createElement("img");

    img.style.width= "100%"
    img.style.height = "300px"
    let author1 = document.createElement("p");

    author1.textContent = author

    let title1 = document.createElement("h3");

    title1.textContent= title;

    img.src = urlToImage
        div.onclick = function() {
          var obj =  {urlToImage,author,title,description,publishedAt};
          sendnews(obj)
        }
    div.append(img,author1,title1)
        popularnews.append(div)
    });
}

function sendnews(news){
    if(localStorage.getItem("news") == null ){
        localStorage.setItem("news",JSON.stringify([]))
    }

    localStorage.setItem("news",JSON.stringify(news))

    window.location.href = "news.html"
}

