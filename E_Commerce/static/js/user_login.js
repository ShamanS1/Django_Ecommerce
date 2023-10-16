var a=document.getElementById("loginBtn");
var b=document.getElementById("registerBtn");
var x=document.getElementById("login");
var y=document.getElementById("register");

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

function validatelogin() {
    const email = document.getElementById("email");
    const password = document.getElementById("password2");

    if (email.value.trim() === "" || password.value.trim() === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check if password meets complexity requirements
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password.value.trim())) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.");
        return false;
    }

    return true;
}

function validateregister() {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const mobile = document.getElementById("mobile");

    if (fname.value.trim() === "" || lname.value.trim() === "" || email.value.trim() === "" || password.value.trim() === "" || mobile.value.trim() === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Check if password meets complexity requirements
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password.value.trim())) {
        alert("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.");
        return false;
    }

    // Check if mobile number is valid
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile.value.trim())) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }

    return true;
}