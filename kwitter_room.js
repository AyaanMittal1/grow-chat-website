const fire_base = {
      apiKey: "AIzaSyB_vBjy4ri1Fevs6Suqq67WoT-6v_Pcc4Y",
      authDomain: "kwitter-8c427.firebaseapp.com",
      databaseURL: "https://kwitter-8c427-default-rtdb.firebaseio.com",
      projectId: "kwitter-8c427",
      storageBucket: "kwitter-8c427.appspot.com",
      messagingSenderId: "738250332581",
      appId: "1:738250332581:web:5e3544d3bd13282eaeb04c"
    };
    firebase.initializeApp(fire_base);
//ADD YOUR FIREBASE LINKS HERE
users_name=localStorage.getItem("user");
document.getElementById("user_name").innerHTML="Welcome "+users_name+"!";
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function add_room(){
      room=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room).update({
            purpose:"adding room"
      });
      localStorage.setItem("room_name",room);
      window.location="kwitter_page.html";
}
function redirect_to_room_name(room1){
      window.location="kwitter_page.html";
      localStorage.setItem("room_name",room1);
}
function log_out(){
      window.location="index.html";
      localStorage.removeItem("user");
      localStorage.removeItem("room_name");
}