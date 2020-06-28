window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyDExcAiqNsk2EO0L_M-9eBmDnuET7ocyzk",
    authDomain: "chat-ci-44-f5876.firebaseapp.com",
    databaseURL: "https://chat-ci-44-f5876.firebaseio.com",
    projectId: "chat-ci-44-f5876",
    storageBucket: "chat-ci-44-f5876.appspot.com",
    messagingSenderId: "297945081715",
    appId: "1:297945081715:web:5d2bee18602cced0ca8706",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   console.log(firebase.app().name);
  view.setActiveScreen("registerScreen");
  view.setActiveScreen("loginScreen");

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('nammmmmmmm');
    
      model.currentUser = {
          displayName: user.displayName,

          email: user.email,
      }
      view.setActiveScreen(`welcomeScreen`);
  } else {
      alert(`Mời bạn đăng nhập`);
      view.setActiveScreen(`loginScreen`);
  }
});
};