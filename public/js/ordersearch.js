$(function()
{
    firebaseEmailAuth.onAuthStateChanged(function (user) //로그인사용자 확인
    {

        
        firebaseDatabase.ref('Admin_Profile/'+ user.uid).once('value').then(function(snapshot){
            firebaseDatabase.ref('payment/' + snapshot.val().Brand_name).on('child_added', grab)
            
        });
        function grab(data){
            var Data = data.val();
            var address = Data.address;
            var callnum = Data.callnum;
            var product = Data.product;
            var username = Data.username;

            console.log(address +"/"+callnum+"/"+product+"/"+username);

            var html = //목록 동적 붙여넣기
            "<table style=\"font-family: Montserrat, Arial, sans-serif; width:690px; text-align:left;\">" +

                "<tbody style=\"\">" +
                    "<td style=\"width: 152px\">-" + product + "</td>" +
                    "<td style=\"width: 152px\">-" + username + "</td>" +
                    "<td style=\"width: 152px\">-" + address + "</td>" +
                    "<td style=\"width: 152px\">-" + callnum + "</td>" +
                    "<td style=\"width: 98px\"><button onclick=\"window.open('./order_reg.html','운송장등록','left=100,top=100 ,width=330,height=10,location=no,status=no,scrollbars=yes');\">운송장등록</button></td>"+
                "</tbody>" +
            "</table>" +
            "<hr>";
    
            $(".waiting").append(html);
    
        };
    });
});