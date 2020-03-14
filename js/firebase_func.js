var firebaseConfig = {
    apiKey: "AIzaSyDuQiWkzJ4YrZnS-gGWgQHJ99kdU9eMMY0",
    authDomain: "kita-pelosok-web.firebaseapp.com",
    databaseURL: "https://kita-pelosok-web.firebaseio.com",
    projectId: "kita-pelosok-web",
    storageBucket: "kita-pelosok-web.appspot.com",
    messagingSenderId: "310682620830",
    appId: "1:310682620830:web:df75138a2695854d26fc8f",
    measurementId: "G-KLQYVXE6M9"
};

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

$("#subscribe-btn").click(function () {

    // set button to loading
    var loading = '<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>Loading...'
    $("#subscribe-btn").html(loading)

    var email = $("#subscribe-email").val();
    if (email == "") {
        Swal.fire(
            'Required Data Missing!',
            "Email can't be empty",
            'error'
        )
        $("#subscribe-btn").html("Subscribe")
    } else {
        db.collection("subscriber_emails").doc(email).set({
            created_at: firebase.firestore.Timestamp.now()
        })
            .then(function (docRef) {
                Swal.fire(
                    'Success!',
                    'Thanks for subscribing',
                    'success'
                )
                $("#subscribe-btn").html("Subscribe")
            })
            .catch(function (error) {
                Swal.fire(
                    'Fail to subscribe!',
                    'error on server side',
                    'error'
                );
                console.log(error)
            });
    }
});