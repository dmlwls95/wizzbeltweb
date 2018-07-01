$(function()
{
    $(document).on('click','.go',function(){
        var tacname = $('#tacname').val(); //택배사이름
        var tacnum = $('#tacnum').val(); //운송장번호
        firebaseDatabase.ref('Admin_Profile/'+ user.uid).once('value').then(function(snap){
            var ref = firebaseDatabase.ref("payment/"+snap.val().Brand_name); //DB에서 admin_profile밑에 저장 기본키는 uid
            var obj = {
                tacname: tacname,
                tacnum: tacnum,                   
            };
            ref.set(obj); //고유한 자식 키 생성 후 json 삽입
            alert("F");
        });
    }); 
});

