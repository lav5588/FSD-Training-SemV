function validate() {
    let username = document.getElementById("un").value;
    let password = document.getElementById("pass").value;

   
    if (username === "admin") {
    
        if (password === "admin") {
            alert("Validated");
        } else {
            alert("Invalid Password");
        }
    } else {
        alert("Invalid Username or Password");
    }
}
