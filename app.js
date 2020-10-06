
setTimeout(function(){ 
    if(document.readyState){ //If it is loaded
        document.getElementById("container").style.visibility = "visible";
        document.getElementById("loadingdiv").style.display = "none";
    }else{ //If it isn't loaded
        alert("Your internet is too slow.");
        location.reload();
    }
}, 3000) //Time to check if webpage is loaded (3000 is 3 seconds)