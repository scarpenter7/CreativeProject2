document.getElementById("getImage").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("get image has been clicked!");
    
    const url = "https://cataas.com/cat?width=600&json=true";
    fetch(url)
        .then(function(response) {
            console.log(response);
            return response.json();
        }).then(function(json) {
            console.log(json);

            let img_id = json.url;
            let img_src = "https://cataas.com" + img_id;
            
            document.getElementById("displayImg").src = img_src;
        });
        
});


document.getElementById("getGIF").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("get GIF has been clicked!");
    
    const url = "https://cataas.com/cat/gif?width=600&json=true";
    fetch(url)
        .then(function(response) {
            console.log(response);
            return response.json();
        }).then(function(json) {
            console.log(json);

            let img_id = json.url;
            let img_src = "https://cataas.com" + img_id;
            
            document.getElementById("displayImg").src = img_src;
        });
        
});