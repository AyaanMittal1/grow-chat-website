function Add_user(){
    localStorage.setItem("user",document.getElementById("user_name").value);
    window.location="kwitter_room.html";
}