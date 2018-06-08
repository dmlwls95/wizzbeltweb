
$(document).ready(function() {
    $("#authorized").hide();
    $("#error").hide();
});

/** login firebase 로그인 함수 by.. user_email, user_password */
function signIn() {
    var id = $("#user_email").val();
    var pw = $("#user_password").val();
    
    firebase.auth().signInWithEmailAndPassword(id, pw)
            .then(function(firebaseUser) {
                $("#signIn").hide();
                $("#authorized").show();
                loginSuccess(firebaseUser); //로그인 성공시 firebaseUser에 유저정보 값이 담겨넘어온다
                location.replace('./main.html');    
                //window.location.href = "./main.html" //로그인 성공, uid 확인 후 main 이동

            })
            
            .catch(function(e) {
                lastWork = "signIn";
                $("#error #errmsg").html(e.message);
                $("#error").show();
                $("#signIn").hide();
                alert(e.message);
                return;
            });
}
function loginSuccess(firebaseUser){ //로그인 성공시
    alert("로그인 되었습니다.9:23");

    //로그인 성공한 유저 ID 확인해 보기 - firebaseDatabase에 접근해 데이터 조회 함수
    firebaseDatabase.ref("users/"+firebaseUser.uid).once('value').then(function(snapshot){
        alert(snapshot.val().name)
    }); 

}
/** logout firebase 로그아웃 함수 */
function signOut() {
	if(!confirm("로그아웃 하시겠습니까?")){
		return;
	}

	firebase.auth().signOut().then(function() {
		location.reload();
	}, function(e) {
		lastWork = "authorized";
		$("#error #errmsg").html(e.message);
		$("#error").show();
		$("#authorized").hide();
	});
};
