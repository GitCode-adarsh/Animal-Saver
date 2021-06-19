var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "Hospital") {
        console.log("finding an animal hospital for you");
        speak();
        window.location = "Map.html";
      }
}
function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Finding an animal hospital for you";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}
function submit(){
    Username = document.getElementById("user_name").value;
    Email = document.getElementById("e-mail").value;
    Contact = document.getElementById("contact").value;
    Password= document.getElementById("Password").value;
    localStorage.setItem("password", Password);
    localStorage.setItem("user_name", Username);
    if(Username == "",Email== "",Contact=="",Password == ""){
        document.getElementById("if_blank").innerHTML = "First Enter Details";
        window.alert("Kindly enter details first!!");
    }
    else{
        window.location = "login.html";
    }
    }
    function sub(){
        user = localStorage.getItem("user_name");
        passwrd = localStorage.getItem("password")
        username = document.getElementById("Username").value;
        pass = document.getElementById("pass").value;
    if(username == user,passwrd == pass){
         window.location = "Help.html";
     }            
    }    
    function myFunction() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    function donate1(){
    window.location = "https://friendicoes.org/";
    }
    function donta2(){
      window.location = "http://www.sanjaygandhianimalcarecentre.org/want-to-help.html";
    }
    function logout(){
        window.location = "login.html";
    }