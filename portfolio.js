let btns = document.querySelectorAll(".category");
let submit = document.getElementById("submit");
function downlodeBtn(){
    alert("CV Downloded")
}
submit.addEventListener("click", function(){
    let email = document.getElementById("email");
    let name = document.getElementById("name");
    let msg = document.getElementById("msg");

    if(email.value == "" || name.value == "" || msg.value == "" ){
        alert("Please Fill Details")
    }else{
        alert("Succesfully Connected")
    }

})