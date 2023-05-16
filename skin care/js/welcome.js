firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("front.html")
        alert("hello,")
    }else{
        document.getElementById("user").innerHTML = "hello, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
}
