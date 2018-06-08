  //var firebaseEmailAuth; //파이어베이스email. 인증 모듈 전역변수
  //var firevaseDatabase; // 파이어베이스 DB 모듈 전역변수
  var userInfo; //가입한 유저의 정보. object타입

  // Initialize Firebase with WIZZBELT 
  var config = {
    apiKey: "AIzaSyDjM9A7kDog6ieZj-B8QHXiNE9fvMEI8ZY",
    authDomain: "wizzbelt-90d2b.firebaseapp.com",
    databaseURL: "https://wizzbelt-90d2b.firebaseio.com",
    projectId: "wizzbelt-90d2b",
    storageBucket: "wizzbelt-90d2b.appspot.com",
    messagingSenderId: "432919344129",
  };
  firebase.initializeApp(config);

  // firebaseEmailAuth = firebase.auth(); //파이어베이스 인증 객체
  // firebaseDatabase = firebase.database(); //파이어베이스 데이터베이스 객체

