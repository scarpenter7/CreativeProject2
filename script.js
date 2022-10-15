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

