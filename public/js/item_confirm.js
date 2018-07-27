///gm/item_confirm.html
$(function()
{
    firebaseDatabase.ref("SCM_Item_Reg_Request_List/" + window.name).once('value').then(function (snapshot){
        document.getElementById("request_date").value = snapshot.val().D00_request_date;
        document.getElementById("brand_name").value = snapshot.val().D01_brand_name; //탭 자동채우기
        document.getElementById("item_name").value = snapshot.val().D02_item_name; 
        document.getElementById("main_contents").value = snapshot.val().D03_main_contents; 
        document.getElementById("notice_order").value = snapshot.val().D04_notice_order; 
        document.getElementById("info_file1").value = snapshot.val().D05_info_file1; 
        document.getElementById("info_file2").value = snapshot.val().D06_info_file2; 
        document.getElementById("info_file3").value = snapshot.val().D07_info_file3; 
        document.getElementById("customer_price").value = snapshot.val().D09_customer_price; 
        document.getElementById("item_origin").value = snapshot.val().D10_item_origin; 
        document.getElementById("weight").value = snapshot.val().D11_weight; 
        document.getElementById("youtube_url").value = snapshot.val().D12_youtube_url; 
    }); 
    $("#commit").click(function()
    {
        
    });
     
    $("#reject").click(function()
    {

    });

});

