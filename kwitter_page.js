//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");
    user_name=localStorage.getItem("user");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
      childData = childSnapshot.val(); 
      if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      //Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name1=message_data['name'];
      message=message_data['message'];
      likes=message_data['like'];
      console.log(name1);
      console.log(message);
      name_html="<h4>"+name1+"<img src='tick.png' class='user_tick'></h4>";
      message_html="<h4 class='message_h4'>"+message+"</h4>"
      like_html="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='update_likes(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + likes + "</span></button><hr>";
      html_code=name_html+message_html+like_html+span_with_tag;
      console.log(html_code);
      document.getElementById("output").innerHTML+=name_html+message_html+like_html+span_with_tag;
//End code
      } });  }); }
getData();
function log_out(){
      window.location="index.html";
      localStorage.removeItem("user");
      localStorage.removeItem("room_name");
}
function send(){
      msg_text=document.getElementById("users_message").value;
      room=localStorage.getItem("room_name");
      user_name=localStorage.getItem("user");
      firebase.database().ref(room).push({
            name:user_name,
            message:msg_text,
            like:0
      });
      document.getElementById("users_message").value="";
}
function update_likes(message_id){
      likes_update=Number(document.getElementById(message_id).value);
      likes_update=likes_update+1;
      firebase.database().ref(room_name).child(message_id).update({
            like:likes_update,
      })
}