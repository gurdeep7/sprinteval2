let grid = document.getElementById("grid")
let selectednews = document.getElementById("selectednews")
var timerId;
let parent_result =document.getElementById("search_results");
function search(){
    let value = document.getElementById("value").value

    fetch(`http://newsapi.org/v2/everything?q=${value}&from=2021-10-18&sortBy=popularity&apiKey=3489847ae3ed4269a9d6c5ef2916f562`)

    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
        console.log(res.articles);
        appendnews(res.articles);
    })
    .catch((err)=>{
        console.log("error:",err)
    })
}

function appendnews(news){
 grid.innerHTML = null;
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
         shownews(obj);
        }
    div.append(img,author1,title1)
        grid.append(div)
    });
}

function shownews(newsdata){

    selectednews.innerHTML = null;

    let div = document.createElement("div")

let img = document.createElement("img")

img.style.width = "100%"
img.src = newsdata.urlToImage;

let publishedAt = document.createElement("h4")

publishedAt.style.float ="right"

publishedAt.textContent = `Published on:- ${newsdata.publishedAt}`

let author = document.createElement("h5")

author.textContent = `By:- ${newsdata.author}`

let title = document.createElement("h2")

title.textContent = newsdata.title

let description = document.createElement("p")

description.textContent = newsdata.description;

div.append(img,publishedAt,author,title,description);

selectednews.append(div)
}

async function main(){
    let value = document.getElementById("value").value
    if(value.length > 2){
        parent_result.style.display="block";
        fetch(`http://newsapi.org/v2/everything?q=${value}&from=2021-10-18&sortBy=popularity&apiKey=3489847ae3ed4269a9d6c5ef2916f562`)

    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
        
        appendresults(res.articles);
    })
    .catch((err)=>{
        console.log("error:",err)
    })
    }else{
        parent_result.style.display="none";
    }
}

function appendresults(newsd){
    console.log("works")
   parent_result.innerHTML= null;
    newsd.forEach(({urlToImage,author,title,description,publishedAt} )=> {
        
         let title1 = document.createElement("h5");
     
         title1.textContent= title;
     
             title1.onclick = function() {
               var obj =  {urlToImage,author,title,description,publishedAt};
              shownews(obj);
             }
         parent_result.append(title1)
         });
     }

function debounce(func,delay){
    if(timerId){
        clearTimeout(timerId)
    }

    timerId = setTimeout(()=>{
        func();
    },delay)
}