//me_order/order_allpurchase
$(function()
{

    firebaseEmailAuth.onAuthStateChanged(function (user) //로그인사용자 확인
    {
        firebaseDatabase.ref("SCM_Item_Reg_Request_List").orderByChild("D00_agreement").on("child_added" , grab);
        

        function grab(data){
            var Data = data.val() ;
            var brand_name = Data.D01_brand_name;
            var item_name = Data.D02_item_name;
            var request_date = Data.D00_request_date;
            
            var html = //대기목록 동적 붙여넣기
            
            "<table style=\"font-family: Montserrat, Arial, sans-serif; width:650px; text-align:left;\">" +
                "<tbody style=\"\">" +
                    "<td>　" + brand_name + "</td>" +
                    "<td>　" + item_name + "</td>" +
                    "<td>　" + request_date + "</td>" +
                    "<td><button id = " + data.key + " onclick=\"item_confirm(\'" + data.key + "\');\">검토하기</button></td>"+
                "</tbody>" +
            "</table>" +
            "<hr>";
    
            $(".waiting").append(html);
               
        };
    });
});

function item_confirm(key)
{
    alert(key);

    window.open('./order_reg.html','검토','width=650,height=1000,location=no,status=no,scrollbars=yes');
}