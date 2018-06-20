//using - /me_item/item_reg


//제이쿼리 onload
$(function()
{
  
    //승인요청버튼 눌렀을 때 작동하는 함수 function click
    $("#Request").click(function()
    {
        alert("1"); 
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

            firebaseEmailAuth.onAuthStateChanged(function (user) 
            {
                var userInfo = user;

                alert(userInfo.uid);
                if(brand_name.length == 0 || item_name.length == 0 || supply_price.length == 0 || item_origin.length == 0 || customer_price.length == 0 || weight.length == 0)
                {
                    alert("필수 입력정보에 빈칸이 없는지 다시 확인해 주세요."); 
                    return;  
                }
                else
                {        
                    alert("1");        
                dorequest(userInfo);                
                }                
            });   
          
    });
    function dorequest(userInfo)
    { //
        alert("2");
        firebaseDatabase.ref("item_reg/"+userInfo.uid).set(
            {
                D_01_brand_name: brand_name,
                D_02_item_name: item_name,
                D_03_main_contents: main_contents,
                D_04_notice_order: notice_order,
                D_05_info_file1: info_file1,
                D_06_info_file2: info_file2,
                D_07_info_file3: info_file3,
                D_08_supply_price: supply_price,
                D_09_customer_price: customer_price,
                D_10_item_origin: item_origin,
                D_11_weight: weight,
                D_12_youtube_url: youtube_url,                                       
            }
        ); //DB에서 admin_profile밑에 저장 기본키는 uid
        
        //var obj = alert("2");
        //ref.set(obj); //고유한 자식 키 생성 후 json 삽입
        alert("3");        
        window.location.replace('../main.html');
        alert("4");     
    };
});

