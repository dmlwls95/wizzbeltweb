//이메일 가입기능 //미사용

$(document).ready(function() {
	$("#error").hide();
});
var signUp = function() {
	
	var email = $("#user_email").val();
	var pass = $("#user_pass").val();
	var passconf = $("#user_passconf").val();

	
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

	
	firebase.auth().createUserWithEmailAndPassword(email, pass)
	.then(function() {
		alert(email + "님 가입이 완료 되었습니다!\n\n이제 저희와 함께해요.")
	})
	.catch(function(error) {
		$("#error #errmsg").html(e.message);
		$("#error").show();
		$("#signUp").hide();
		return;
	});
};