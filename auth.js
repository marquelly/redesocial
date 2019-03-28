
$(document).ready(function () {

    $(".btn-cadastrar").click(function (event) {
      event.preventDefault();
      let email = $(".sign-email").val();
      let password = $(".sign-password").val();
  
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function () {
            window.location="main.html";  
        })
  
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
        });
    })

    $(".btn-login").click(function (event) {
        event.preventDefault();
        let email = $(".sign-email").val();
        let password = $(".sign-password").val();
    
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(function () {
            window.location="main.html";
          })
    
          .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
          });
      })
})



  

