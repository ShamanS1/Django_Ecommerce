var a=document.getElementById("loginBtn");
var b=document.getElementById("registerBtn");
var x=document.getElementById("login");
var y=document.getElementById("register");

var password= document.getElementById("password");
var email= document.getElementById("email");
var password2= document.getElementById("password2");
var userid= document.getElementById("userid");
var fname= document.getElementById("fname");
var lname= document.getElementById("lname");
var mobile= document.getElementById("mobile");

function login(){
    x.style.left="4px";
    y.style.right="-520px";
    a.className+=" white-btn";
    b.className="btn";
    x.style.opacity=1;
    y.style.opacity=0;
}

function register(){
    x.style.left="-520px";
    y.style.right="5px";
    a.className="btn";
    b.className+=" white-btn";
    x.style.opacity=0;
    y.style.opacity=1;
}

function myMenuFunction(){
    var x=document.getElementById("navMenu");
    if(x.className === "nav-menu"){
        x.className+=" responsive";
    }else{
        x.className="nav-menu";
    }
}

function validatelogin(){
    if(email.value===""||password2.value===""){
        alert("Please fill all the fields");
        return false;
    }
}

function validateregister(){
    if(userid.value===""||fname.value===""||lname.value===""||email.value===""||password.value===""||password2.value===""||mobile.value===""){
        alert("Please fill all the fields");
        return false;
    }
}