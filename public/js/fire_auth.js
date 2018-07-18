$(document).ready(function()
{
    //로그인버튼 눌렀을 때 btn login 0
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
                alert(error + "\n로그인 실패 다시 시도해주세요.");  
                return;              
            });
                    
       // }
    });
    //GM 로그인 2018-07-15
    $(document).on('click','.GMlogin',function()
    {

            var id = $("#GM_email").val();
            var pw = $("#GM_password").val();
            


            firebaseEmailAuth.signInWithEmailAndPassword(id, pw)
            .then(function(firebaseUser) 
            {
                GMloginSuccess(firebaseUser); //로그인 성공시 firebaseUser에 유저정보 값이 담겨넘어온다
                
            })
            
            .catch(function(error) 
            {
                alert(error + "\n로그인 실패 다시 시도해주세요.");  
                return;              
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
        window.location.replace('./main.html');
    }); 
    //로그인 성공, uid 확인 후 main 이동
}

function GMloginSuccess(firebaseUser)
{ 
    firebaseDatabase.ref("GM_Profile/"+firebaseUser.uid).once('value').then(function(snapshot)
    {
            alert(snapshot.val().gm + "관리자님이 로그인하였습니다.");
            window.location.replace('./GMmain.html'); //관리자 페이지로 이동
    }).catch(function(errro)
    {
        alert("관리자계정이 아닙니다.\n일반사용자 계정으로 로그인이 진행됩니다.");
        loginSuccess(firebaseUser);
    }); 
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
            