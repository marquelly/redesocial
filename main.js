var database = firebase.database(); 

$(document).ready(function() {
    
    database.ref("post").once('value')
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var childKey = childSnapshot.key;
                var childData = childSnapshot.val();
            console.log(childKey); 
            console.log(childData); 
    });
    $(".btn-post").click(function (event) {
        event.preventDefault();
        let newPost = $(".input-post").val(); 
        database.ref("post").push({
            text:newPost
        });
    $(".post-list").append("<li>"+newPost+"</li>")
});
})
})