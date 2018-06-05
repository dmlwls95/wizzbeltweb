
$(document).ready(function() {
    $("#authorized").hide();
    $("#error").hide();
});

/**login */
function signIn() {
    var id = $("#user_email").val();
    var pw = $("#user_password").val();
    
    firebase.auth().signInWithEmailAndPassword(id, pw)
            .then(function(firebaseUser) {
                $("#signIn").hide();
                $("#authorized").show();
                loginSuccess(firebaseUser);
                location.replace('./main.html');    
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
/**logout */
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
