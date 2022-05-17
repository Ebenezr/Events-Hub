/*fuctions to switch between login page and signup page*/
/*shows login page and hides registration*/
function login(){
    document.getElementById('login').style.display = "none";
    document.getElementById('signup').style.display = "block";
    }
    /*hides login page and displays signu page*/
function signup(){
    document.getElementById('signup').style.display = "none";
    document.getElementById('login').style.display = "block";
    }
/*calls the function to display loginpage by default*/
login();




