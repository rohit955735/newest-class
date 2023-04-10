function addUser(){
    var user_name =document.getElementById("user123").value;   
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
    
}
