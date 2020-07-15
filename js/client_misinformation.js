/** 
 
 * May 20, 2020
 *
 * Summary. 
 * This file contains the JS code to perform user actions on the index page.
 *
 * Description.
 * Specifically, this file contains the Firebase credentials to 
 * access Firebase to save misinformation
 * in their realtime database.
 *
 * @file   client_misinformation.js.
 */

// Page setup

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAesryD75hysYtmGertY0Q0YAXPfxfRo6Y",
    authDomain: "gullyboy-f0519.firebaseapp.com",
    databaseURL: "https://gullyboy-f0519.firebaseio.com",
    projectId: "gullyboy-f0519",
    storageBucket: "gullyboy-f0519.appspot.com",
    messagingSenderId: "990175357483",
    appId: "1:990175357483:web:a9dfd8a98f9052d036186e",
    measurementId: "G-BJDDXZ4RHF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
const database = firebase.database();

/**
  * @desc Save the misinformation to Firebase
  * @return none
*/
function enterMisinformation() {
  // get current time
  let currentdate = new Date(); 
  let datetime = (currentdate.getMonth()+1) + "/"
                  + currentdate.getDate() + "/" 
                  + currentdate.getFullYear() + " @ "  
                  + currentdate.getHours() + ":"  
                  + currentdate.getMinutes() + ":" 
                  + currentdate.getSeconds();

  // get misinformation
  let misinformation = $('#targetTempo').val();

  // 'once' reads the value once from the database
  database.ref('misinformation/' + misinformation).once('value', (snapshot) => {

    // check if misinformation already exists in Firebase to alert user
    if (snapshot.exists()) {
      alert('This misinformation has already been entered. Please add new misinformation.');
    } else {
      // writes data to the database:
      database.ref('misinformation/' + misinformation).set(datetime);
      alert("New misinformation entered!");
    }
  });
}
