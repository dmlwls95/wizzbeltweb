$(document).ready(function()
{
    //가입버튼 눌렀을 때 btn login 0
    $(document).on('click','.login',function()
    {
/** login firebase 로그인 함수 by.. user_email, user_password */
        //function signIn() 
       // {
            var id = $("#user_email").val();
            var pw = $("#user_password").val();
            
            firebaseEmailAuth.signInWithEmailAndPassword(id, pw)
            .then(function(firebaseUser) 
            {
                loginSuccess(firebaseUser); //로그인 성공시 firebaseUser에 유저정보 값이 담겨넘어온다
                
            })
            
            .catch(function(error) 
            {
                alert(error + "\n로그인 실패");                
            });
                    
       // }
    });
});

function loginSuccess(firebaseUser)
{ //로그인 성공시
    //alert("로그인 되었습니다.");

    //로그인 성공한 유저 ID 확인해 보기 - firebaseDatabase에 접근해 데이터 조회 함수
    firebaseDatabase.ref("Admin_Profile/"+firebaseUser.uid).once('value').then(function(snapshot)
    {
        console.log(snapshot.val().Brand_name);
        alert(snapshot.val().Brand_name +"님이 로그인하였습니다.");
    }); 
    window.location.href = "./main.html" //로그인 성공, uid 확인 후 main 이동


}




/** logout firebase 로그아웃 함수 아직미구현 */
function signOut() 
{
    if(!confirm("로그아웃 하시겠습니까?"))
    {
		return;
	}

    firebaseEmailAuth.signOut().then(function() 
    {
		location.reload();
    }, function(e) 
    {
		lastWork = "authorized";
		$("#error #errmsg").html(e.message);
		$("#error").show();
		$("#authorized").hide();
	});
};
