
$(document).ready(function(){
	
	/**************************************
	 	게시판 글쓰기 폼 체크
	 **************************************/
		
	
	/**************************************
	 	회원가입 폼 체크 - 주소찾기 다음api
	 **************************************/
	
	
	/**************************************
	 	회원가입 폼 체크 - 이메일 체크
	 **************************************/
	
	
	/**************************************
	 	회원가입 폼 체크 - 비밀번호 & 비밀번호 확인
	 **************************************/
	
	
	
	/********************************
	 	회원가입 폼 체크 - 유효성 체크
	 *********************************/
	$("#btnJoin").click(function(){
		if($("#id").val == ""){
			alert("아이디를 입력해주세요");
			$("#id").focus();
			return false;
		}else if($("#pass").val == ""){
			alert("비밀번호를 입력해주세요");
			$("#pass").focus();
			return false;
		}else if($("#cpass").val == ""){
			alert("비밀번호를 입력해주세요");
			$("#cpass").focus();
			return false;
		}else if($("#name").val == ""){
			alert("이름을 입력해주세요");
			$("#name").focus();
			return false;
		}else if($("input[name='gender']:checked").length == 0){
			alert("성별을 선택해주세요");
			return false;
		}else if($("#email1").val == ""){
			alert("이메일 주소를 입력해주세요");
			$("#email1").focus();
			return false;
		}else if($("#email2").val == ""){
			alert("이메일 주소를 선택해주세요");
			$("#email3").focus();
			return false;
		}else if($("#addr1").val == ""){
			alert("주소를 선택해주세요");
			$("#btnSearchAddr").css("border", "1px solid gray");
			return false;
		}else if($("#addr2").val == ""){
			alert("상세 주소를 입력해주세요");
			return false;
		}else if($("input[name='tel']:checked").length == 0){
			alert("통신사를 설정해주세요");
			return false;
		}else if($("#phone1").val() == "default"){
			alert("폰번호를 선택해주세요.");
			$("#phone1").focus();
			return false;
		}else if($("#phone2").val() == ""){
			alert("핸드폰 번호 가운데 4자리를 입력해주세요");
			$("#phone2").focus();
			return false;
		}else if($("#phone3").val() == ""){
			alert("핸드폰 번호 마지막 4자리를 입력해주세요");
			$("#phone3").focus();
			return false;
		}else if($("input[name='hobby']:checked").length == 0){
			alert("취미를 선택해주세요");
			return false;
		}else{
			//서버전송
			joinForm.submit();
		}
	});
		
		
	
	
	/********************************
	 	로그인 폼 체크 ~~중요~!!
	*********************************/
	$("#btnLogin").click(function(){
		if($("#id").val() == ""){
			alert("아이디를 입력해주세요.");
			$("#id").focus();
			return false;
		}else if($("#pass").val() == ""){
			alert("비밀번호를 입력해주세요.");
			$("#pass").focus();
			return false;
		}else{
			//서버전송
			loginForm.submit();
		}
	});//btnLogin click
	
	/********************************
		로그인 폼 - 다시쓰기 
	*********************************/
	$("#btnLoginReset").click(function(){
		$("#id").val("").focus();
		$("#pass").val("");
		
	});//btnLiginReset click
	
	
});//ready