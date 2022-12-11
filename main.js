function myFunction(){
    const a = document.getElementById("pass");
    const b = document.getElementById("hide1");
    const c = document.getElementById("hide2");

    if (a.type === 'password') {
        a.type = 'text';
        b.style.display = 'block';
        c.style.display = 'none';
    }
    else{
        a.type = 'password';
        b.style.display = 'none';
        c.style.display = 'block';
    }
}
function validate(){
    if(document.myForm.Email.value ==""){
        alert("Please provide Email ID");
        document.myForm.Email.focus()
        return false;
    }else if(document.myForm.password.value ==""){
        alert("Please provide Password");
        document.myForm.password.focus()
        return false;
    }
    else {return true;}
}


