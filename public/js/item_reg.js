//using - /me_item/item_reg


//제이쿼리 onload
$(function()
{
  
    //승인요청버튼 눌렀을 때 작동하는 함수 function click
    $("#Request").click(function()
    { 
        var brand_name  = $('#brand_name').val(); 
        var item_name = $('#item_name').val(); 
        var main_contents = $('#main_contents').val(); 
        var notice_order = $('#notice_order').val(); 
        var info_file1 = $('#info_file1').val(); 
        var info_file2 = $('#info_file2').val(); 
        var info_file3 = $('#info_file3').val(); 
        var supply_price = $('#supply_price').val(); 
        var customer_price = $('#customer_price').val(); 
        var item_origin = $('#item_origin').val(); 
        var weight = $('#weight').val(); 
        var youtube_url = $('#youtube_url').val(); 
        var agreement = 0;

            firebaseEmailAuth.onAuthStateChanged(function (user) 
            {
                var userInfo = user;

                if(brand_name.length == 0 || item_name.length == 0 || supply_price.length == 0 || item_origin.length == 0 || customer_price.length == 0 || weight.length == 0)
                {
                    alert("필수 입력정보에 빈칸이 없는지 다시 확인해 주세요."); 
                    return;  
                }
                else{       
                dorequest(userInfo);                
                }                
            }); 

            function dorequest(userInfo)
            { 
                firebaseDatabase.ref("SCM_Item_Reg_Request_List/"+ brand_name).set(
                    {
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
                alert(brand_name+"님 승인요청이 완료되었습니다.\n게시가 완료되면 알려드리겠습니다. :)");
                window.location.replace('../main.html');
                });
            };             
    }); 
});
