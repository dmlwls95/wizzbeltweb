function signUp(){
    var admin_code = $('#admin_code').val(); //admin code
    var email = $('#user_email').val(); // 가입 이메일
    var password = $('#user_password').val(); // 가입 비밀번호
    var passconf = $('#user_passconf').val(); // 가입 비밀번호 확인
    name = $('#user_name').val(); // 가입자 이름

    if(pass != passconf && pass.length < 6){
		alert("비밀번호를 다시 확인해 주세요.\n\n비밀번호는 6자 이상으로 해주세요.");
		return;
	}
	else if(email.length == 0 || pass == '' || passconf == ''){
		alert("가입정보를 다시 확인해 주세요.")
	}
	else if(pass != passconf){
		alert("비밀번호를 다시 확인해 주세요.");
	}
	else if(pass.length < 6){
		alert("비밀번호는 6자 이상으로 해주세요.")
    }
    
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user){
        userInfo = user; // 유저 정보 저장 / 전역변수

        console.log("userInfo/"+userInfo);
        console.log("userInfo.currentUser/"+userInfo.currentUser);
        console.log("userInfo.uid/"+userInfo.uid);

        logUser(); // 성공시 작동

    },function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });

    function logUser(){ //가입 성공시 호출 database
        var ref = firebase.database().ref("Admin_Profile/"+userInfo.uid); //DB에서 admin_profile밑에 저장 기본키는 uid
        var obj = {name: name,};
        ref.set(obj); //고유한 자식 키 생성 후 json 삽입
        alert("Email : " + email + "\nPassword : " + password + "\n 으로 가입이 완료되었습니다.")
        window.location.href = "./index.html"
    }

}
