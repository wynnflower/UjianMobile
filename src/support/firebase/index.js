import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBXSP_N-XuBTypZ_MBD1EcMKGVNW_Xzxc0",
    authDomain: "managerapp-b29c0.firebaseapp.com",
    databaseURL: "https://managerapp-b29c0.firebaseio.com",
    projectId: "managerapp-b29c0",
    storageBucket: "managerapp-b29c0.appspot.com",
    messagingSenderId: "826207156704",
    appId: "1:826207156704:web:f73577f3db43b9a7"
  };

export const Fire=Firebase.initializeApp(firebaseConfig);