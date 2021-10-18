let parent = document.getElementById("newsdetails");

let newsdata = JSON.parse(localStorage.getItem("news"))

let div = document.createElement("div")

let img = document.createElement("img")

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

parent.append(div)