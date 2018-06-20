//using - /me_item/item_reg


//제이쿼리 onload
$(function()
{
  
    //승인요청버튼 눌렀을 때 작동하는 함수 function click
    $("#Request").click(function()
    { 
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

            firebaseEmailAuth.onAuthStateChanged(function (user) 
            {
                var userInfo = user; //사용자정보 객체 생성및 삽입

                if(brand_name.length == 0 || item_name.length == 0 || supply_price.length == 0 || item_origin.length == 0 || customer_price.length == 0 || weight.length == 0)
                {//제약조건: 브랜드이름, 상품명, 공급가, 소비자가, 원산지, 상품무게 (필수기입)
                    alert("필수 입력정보에 빈칸이 없는지 다시 확인해 주세요."); 
                    return;  //제약조건에 걸리면 alert띄우고 리턴
                }
                else{       
                dorequest(userInfo); //조건 통과시 dorequest로 DB 삽입
                }                
            }); 

            function dorequest(userInfo)
            { 
                firebaseDatabase.ref("SCM_Item_Reg_Request_List/"+ brand_name).set(
                    {   //최상위 디렉터리 SCM_.../브랜드이름을 하위키로 삽입 //기본키 유일식별성 생각하기!
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
                )
                .then(function(){
                alert(brand_name+"님 승인요청이 완료되었습니다.\n게시가 완료되면 알려드리겠습니다. \n:)");
                window.location.replace('../main.html');// 승인요청이후 main으로 페이지 이동
                });
            };             
    }); 
});
