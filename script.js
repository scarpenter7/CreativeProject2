/*
border-radius: 15px;
background-color: #ffe6db;
border: 2px solid black;
height: 60px;
width: 200px;
padding-top: 30px;
font-size: 30px;
display: block;
*/

document.getElementById("getImage").style.width = "500px";
document.getElementById("getImage").style.height = "80px";
document.getElementById("getImage").style.borderRadius = "15px";
document.getElementById("getImage").style.border = "2px solid black";
document.getElementById("getImage").style.backgroundColor = "#ffe6db";
document.getElementById("getImage").style.fontSize = "30px";
document.getElementById("getImage").style.display = "block";

document.getElementById("getImage").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("get image has been clicked!");
    
    const url = "https://dog.ceo/api/breeds/image/random";
    fetch(url)
        .then(function(response) {
            console.log(response);
            return response.json();
        }).then(function(json) {
            console.log(json);

            let img_src = json.message;
            
            document.getElementById("displayImg").src = img_src;
        });
        
});

