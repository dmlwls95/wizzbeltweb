//using - /me_item/item_reg


//제이쿼리 onload
$(function()
{
    firebaseEmailAuth.onAuthStateChanged(function (user) //로그인사용자 확인
    {

       // var rootRef = firebase.database.ref();
        //var urlRef = rootRef.child("user1/DAA notes/URL");
        //urlRef.once("value", function(snapshot) {
            //snapshot.forEach(function(child) {
            //console.log(child.key+": "+child.val());
        //});

        firebaseDatabase.ref("Admin_Profile/" + user.uid).once('value').then(function (snapshot){
            document.getElementById("brand_name").value = snapshot.val().Brand_name; //brand_name 탭 자동채우기
        });        
        //승인요청버튼 눌렀을 때 작동하는 함수 function click
        $("#Request").click(function()
        { 
            var request_date = new Date().toISOString().substr(0, 10).replace('T', ' '); //현재날짜
           
            var brand_name  = $('#brand_name').val(); //브랜드이름
            var item_name = $('#item_name').val();  //상품명
            var main_contents = $('#main_contents').val(); //상품설명
            var notice_order = $('#notice_order').val(); //주문시 주의사항
            var info_file1 = $('#info_file1').val(); //첨부파일 1~3에 대한 설명
            var info_file2 = $('#info_file2').val(); //""
            var info_file3 = $('#info_file3').val(); //""
            var supply_price = $('#supply_price').val(); //공급가
            var customer_price = $('#customer_price').val(); //소비자가
            var item_origin = $('#item_origin').val(); //원산지
            var weight = $('#weight').val(); //상품무게 kg단위
            var youtube_url = $('#youtube_url').val(); //유투브 동영상 url
            var agreement = 0; //승인여부 승인 1, 미승인 0

            var userInfo = user; //사용자정보 객체 생성및 삽입

            if(brand_name.length == 0 || item_name.length == 0 || supply_price.length == 0 || item_origin.length == 0 || customer_price.length == 0 || weight.length == 0)
            {//제약조건: 브랜드이름, 상품명, 공급가, 소비자가, 원산지, 상품무게 (필수기입)
                alert("필수 입력정보에 빈칸이 없는지 다시 확인해 주세요."); 
                return;  //제약조건에 걸리면 alert띄우고 리턴
            }
            else{       
                dorequest(userInfo); //조건 통과시 dorequest로 DB 삽입
            }      

            function dorequest(userInfo)
            { 
                firebaseDatabase.ref("SCM_Item_Reg_Request_List/"+ brand_name + "/"+item_name).set(
                    {   //최상위 디렉터리 SCM_.../item_name
                        D00_request_date: request_date,
                        D00_agreement: agreement,
                        D01_brand_name: brand_name,
                        D02_item_name: item_name,
                        D03_main_contents: main_contents,
                        D04_notice_order: notice_order,
                        D05_info_file1: info_file1,
                        D06_info_file2: info_file2,
                        D07_info_file3: info_file3,
                        D08_supply_price: supply_price,
                        D09_customer_price: customer_price,
                        D10_item_origin: item_origin,
                        D11_weight: weight,
                        D12_youtube_url: youtube_url,
                    }
                )//.then(function(){
                alert(brand_name+"님 승인요청이 완료되었습니다.\n게시가 완료되면 알려드리겠습니다. \n:)");
                window.location.replace('../main.html');// 승인요청이후 main으로 페이지 이동
                //});
            };             
        }); 
    });
});
