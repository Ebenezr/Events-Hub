/*fuctions to switch between login page and signup page*/
/*shows login page and hides registration*/
function login() {
    document.getElementById('login').style.display = "none";
    document.getElementById('signup').style.display = "block";
}
/*hides login page and displays signu page*/
function signup() {
    document.getElementById('signup').style.display = "none";
    document.getElementById('login').style.display = "block";
}
/*calls the function to display login page by default*/
signup();

//initialized arrays to store user data
var emailArray = [];
var passwordArray = [];
var usernameArray = [];

/*function to register a user*/
function register() {
    event.preventDefault();
    //get input fields values from the form
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("cpassword").value;


    // //form validation
    // //check if name input in empty
    if (username == "") {
        alert("Name required.");
        return;
    }
    // //check if email input in empty
    else if (email == "") {
        alert("Email required.");
        return;
    }

    // //check if password input in empty
    else if (password == "") {
        alert("Password required.");
        return;
    }
    // else if (password.value.length >= 6){
    //     alert("Password too short.");
    //     return ;

    // }
    //  //check if confirm input in empty
    else if (confirmPassword == "") {
        alert("Confirm Password required.");
        return;
    }
    // // compares if confirm password matches password 
    else if (password != confirmPassword) {
        alert("Password don't match retype your Password.");
        return;
    }


    //if validation is checked write data to array
    else if (emailArray.indexOf(email) == -1) {
        usernameArray.push(username);
        emailArray.push(email);
        passwordArray.push(password);

        alert("Signup succesful. \nLogin Now");
        //open login form
        signup();

        //reset the input fields
        document.getElementById('username').value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("cpassword").value = "";
    }
    //if email is already used then..
    else {
        alert(email + "is already registered to an account");
        return;
    }
}

//log in submit button function

function signin() {
    event.preventDefault();
    //get input fields values from the form
    var email = document.getElementById("lemail").value;
    var password = document.getElementById("lpassword").value;
    //initialize registered accounts to a variable
    var i = emailArray.indexOf(email);

    //input fields validation
    //check if email field is empty and if email exists as registered account 
    if (emailArray.indexOf(email) == -1) {
        if (email == "") {
            alert("Email required.");
            return;
        }
        alert("Email does not exist.");
        document.getElementById("lemail").value = "";
        document.getElementById("lpassword").value = "";
        return;
    }
    //check if password field is empty and if password is kinked to any email
    else if (passwordArray[i] != password) {
        if (password == "") {
            alert("Password required.");
            return;
        }
        alert("Password does not match.");
        document.getElementById("lemail").value = "";
        document.getElementById("lpassword").value = "";;
        return;
    }
    //if verification true..
    else {
        alert(email + " Login Successful.");
        document.getElementById("lemail").value = "";
        document.getElementById("lpassword").value = "";
        //window.location.
        return;
    }

}