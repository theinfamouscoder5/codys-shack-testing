const firebaseConfig = {
    apiKey: "AIzaSyDHjsXk8BgLyO-xY7Un5sIW7FW1FgaHRGs",
    authDomain: "codys-shack-official.firebaseapp.com",
    projectId: "codys-shack-official",
    storageBucket: "codys-shack-official.firebasestorage.app",
    messagingSenderId: "410304369215",
    appId: "1:410304369215:web:cbb1a557f3d0ad7ead9e8a",
    measurementId: "G-0W12HFE63K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize variables
const auth = firebase.auth()
const database = firebase.database()
  

console.log(`
    /////    |||||||||||    /////    |||||    !
   |             | |       |     |   |   |    !
   |             | |       |     |   |   |    !
   |  ///        | |       |     |   |||||    !
         |       | |       |     |   |        !
   | /////       |||        /////   |        !

   Keep your account safe! Do not send any information from
   here to anyone or paste any text here.

   If someone is asking you to copy or paste text here, then
   you're giving someone access to your account, memberships,
   games, and more.`);

// Variables

const urlParams = new URLSearchParams(window.location.search);
let nextURL = urlParams.get('nexturl');
let authTitle = document.getElementById('auth-title');
let authBox = document.getElementById('auth-box')

// Inserting fetched HTML, depending on if the user is logged in or not

if (nextURL !== null) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            const userId = user.uid;
            firebase.database().ref('users/' + userId).once('value')
            .then(function(data) {
                const displayName = data.val().display_name;
                authTitle.innerHTML = 'Choose an Account';
        
                fetch('auth-pages/select-account.html')
                .then((res)=>{
                    if(res.ok){
                    return(res.text());
                    }else{
                    console.error(`home.js: Fetch error ${res.status}`);
                    }
                })
                .then((text)=>{
                    authBox.innerHTML = text;
                    document.getElementById('account-name').innerHTML = displayName;
                    document.getElementById('account-box-button').setAttribute('onclick', 'window.location = "'+nextURL+'&userid='+userId+'";');
                })
                .catch((err)=>{
                    console.error(err.stack);
                })
            })
            .catch(function(error) {
                console.error('Error getting display name:', error);
            });
        } else {
            //alert('User is NOT signed in');
        }
    });
} else {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            const userId = user.uid;
            firebase.database().ref('users/' + userId).once('value')
            .then(function(data) {
                const displayName = data.val().display_name;
                authTitle.innerHTML = 'Choose an Account';
        
                fetch('auth-pages/select-account.html')
                .then((res)=>{
                    if(res.ok){
                    return(res.text());
                    }else{
                    console.error(`home.js: Fetch error ${res.status}`);
                    }
                })
                .then((text)=>{
                    authBox.innerHTML = text;
                    document.getElementById('account-name').innerHTML = displayName;
                    document.getElementById('account-box-button').setAttribute('onclick', 'window.location = "../";');
                })
                .catch((err)=>{
                    console.error(err.stack);
                })
            })
            .catch(function(error) {
                console.error('Error getting display name:', error);
            });
        } else {
            //alert('User is NOT signed in');
        }
    });
}


let username = localStorage.getItem('username');
let userid = localStorage.getItem('userid');
if (username !== null && userid !== null){
    
}


setTimeout(() => {
    authTitle.innerHTML = 'Something Went Wrong';

    fetch('auth-pages/authtoken-expired.html')
    .then((res)=>{
        if(res.ok){
        return(res.text());
        }else{
        console.error(`home.js: Fetch error ${res.status}`);
        }
    })
    .then((text)=>{
        authBox.innerHTML = text;
        document.getElementById('account-name').innerHTML = username;
        document.getElementById('account-box-button').setAttribute('onclick', 'window.location = "'+nextURL+'";')
    })
    .catch((err)=>{
        console.error(err.stack);
    })
}, "600000");