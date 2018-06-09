//using - index_admin



//제이쿼리 
$(document).ready(function(){
  
    //가입버튼 눌렀을 때 작동하는 함수
    $(document).on('click','.signUp',function(){

        
            var admin_code = $('#admin_code').val(); //admin code
            var email = $('#user_email').val(); // 가입 이메일
            name = $('#user_name').val(); // 가입자 이름
            brand_name = $('#brand_name').val(); // 브랜드명
            var password = $('#user_password').val(); // 가입 비밀번호
            var passconf = $('#user_passconf').val(); // 가입 비밀번호 확인
            

            if(password != passconf && pass.length < 6){
                alert("비밀번호를 다시 확인해 주세요.\n\n비밀번호는 6자 이상으로 해주세요.");
                return;
            }
            else if(email.length == 0 || password == '' || passconf == ''){
                alert("가입정보를 다시 확인해 주세요.")
                return;
            }
            else if(password != passconf){
                alert("비밀번호를 다시 확인해 주세요.");
                return;
            }
            else if(password.length < 6){
                alert("비밀번호는 6자 이상으로 해주세요.")
                return;
            }
            
            firebaseEmailAuth.createUserWithEmailAndPassword(email, password).then(function(user){
                userInfo = user; // 카입 후 callback 함수로 생성된 유저의 정보가 user에 담겨서 저장 / 전역변수
                //저장 확인
                console.log("userInfo/"+userInfo);
                console.log("userInfo.currentUser/"+userInfo.currentUser);
                console.log("userInfo.uid/"+userInfo.uid);

                logUser(); // 성공시 작동

            },function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });

            function logUser(){ //가입 성공시 호출 database모듈
                var ref = firebaseDatabase.ref("Admin_Profile/"+userInfo.uid); //DB에서 admin_profile밑에 저장 기본키는 uid
                var obj = {
                    Password: password,
                    Email: email,
                    Name: name,
                    Brand_name: brand_name,                   
                };
                ref.set(obj); //고유한 자식 키 생성 후 json 삽입
                
                alert("이메일 : " + email + "\n비밀번호 : " + password + "\n브랜드명 : " + brand_name + "\n 으로 가입이 완료되었습니다.")
                window.location.href = "./index.html"
            }

        
        });
    });
