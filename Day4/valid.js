function validated(){
   let username = document.getElementById("username").value;
   let password = document.getElementById("password").value;
   if(username.length < 10){
    return false;
   }
   if(password.length < 10){
    return false;
   }
}