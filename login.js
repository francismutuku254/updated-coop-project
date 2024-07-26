function myTest(){
    let x = document.getElementById("email").value;
    let y = document.getElementById("pass").value;

    
    if(x=="maureenfrancis" && y=="12345678"){
       alert("input Ok")
        window.location.assign("coop.html");
      }
      else if(x==""&& y==""){
        alert("email and password required");
     }
    else if(x==""){
       alert("email required");
    }
    else if(y==""){
        alert("password required");
     }

    else{
        alert("input incorrect");
      
    }

    document.getElementById("example").innerHTML=text;

    

}
function myRegister(){
    let m = document.getElementById("user").value;
    let h = document.getElementById("pas").value;
    let f = document.getElementById("conf").value;
    if(f==h){
        alert("registered successfully");
        window.location.assign("coop.html");

    }
    else{
        alert("password not the same");

    }
}