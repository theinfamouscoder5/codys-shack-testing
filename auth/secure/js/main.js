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
  
  

  // Set up our register function
  function register () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    confirm_password = document.getElementById('confirm_password').value
    display_name = document.getElementById('display_name').value
   /* favourite_song = document.getElementById('favourite_song').value
    milk_before_cereal = document.getElementById('milk_before_cereal').value*/
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
    if (password !== confirm_password) {
        alert('Passwords do not match!!')
        return
        // Don't continue running the code
      }
    if (validate_field(display_name) == false/* || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false*/) {
      alert('One or More Extra Fields is Outta Line!!')
      return
    }
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        email : email,
        display_name : display_name,
        //favourite_song : favourite_song,
        //milk_before_cereal : milk_before_cereal,
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('User Created!!')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  // Set up our login function
  function login () {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      alert('User Logged In!!')
      
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        alert('User will stay logged in!!');
      })
      .catch((error) => {
        console.error("Error setting persistence: ", error);
      });

    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 8) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }

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