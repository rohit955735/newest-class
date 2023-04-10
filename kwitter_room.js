const firebaseConfig = {
      apiKey: "AIzaSyD5JiC6XzB82aZAfjeco1_Ar_TVri2Z8xQ",
      authDomain: "kwitter-app-23a36.firebaseapp.com",
      databaseURL: "https://kwitter-app-23a36-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-23a36",
      storageBucket: "kwitter-app-23a36.appspot.com",
      messagingSenderId: "1056721065698",
      appId: "1:1056721065698:web:32a5933c800be2b81870bb",
      measurementId: "G-KBV37VC3HP"
    };

    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("user_name");
    document.getElementById("username").innerHTML=" WELCOME "+username+"!";
    function addroom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ 
            purpose : "adding room name" });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code 
      console.log("room-name"+Room_names);
      row = "<div class='room_name' id=">+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;

            //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
