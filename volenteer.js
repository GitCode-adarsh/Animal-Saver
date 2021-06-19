var firebaseConfig = {
  apiKey: "AIzaSyCmdHIqUOrekErml_LuMWvMcl2BnyIkAR4",
  authDomain: "animal-saver-b493a.firebaseapp.com",
  databaseURL: "https://animal-saver-b493a-default-rtdb.firebaseio.com",
  projectId: "animal-saver-b493a",
  storageBucket: "animal-saver-b493a.appspot.com",
  messagingSenderId: "1036531137986",
  appId: "1:1036531137986:web:5c569963592ab21fcaaa5b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
          var messagesRef = firebase.database()
              .ref('Collected Data');
            
          document.getElementById('contactForm')
              .addEventListener('submit', submitForm);
    
          function submitForm(e) {
              e.preventDefault();
    
              // Get values
              var name = getInputVal('name');
              var email = getInputVal('email');
              var reason = getInputVal('reason');
              var contact = getInputVal('contact');
    
              saveMessage(name, email,reason,contact);
              document.getElementById('contactForm').reset();
          }
    
          // Function to get get form values
          function getInputVal(id) {
              return document.getElementById(id).value;
          }
    
          // Save message to firebase
          function saveMessage(name, email,reason,contact) {
              var newMessageRef = messagesRef.push();
              newMessageRef.set({
                  name: name,
                  email: email,
                  reason: reason,
                  contact: contact
              });
          }