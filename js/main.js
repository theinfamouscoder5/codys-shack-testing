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

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    const userId = user.uid;
    firebase.database().ref('users/' + userId).once('value')
      .then(function(data) {
        const displayName = data.val().display_name;
        console.log('Display Name:', displayName);
      })
      .catch(function(error) {
        console.error('Error getting display name:', error);
      });
  } else {
    //alert('User is NOT signed in');
  }
});