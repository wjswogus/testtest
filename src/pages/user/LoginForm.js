import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';




const FormStyle = styled.form`
    margin-top:100px;
    
`;

const DivStyle = styled.div`
    border:1px black solid;
    text-align:center;
    padding:10px;
`;

const PStyle = styled.p`
    text-align:center;
    font-size:2em;
`;





const LoginForm = (props) => {
    const [user, setUser] = useState({
		id: "",
    password: "",
	});



	function inputHandle(e) {

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    // console.log(user);
  }

	function submit(e){

		e.preventDefault();

    fetch("http://10.100.102.27:8000/user/login",{
      method:"POST",
      body:JSON.stringify(user),
      headers:{
        'Content-Type':"application/json; charset=utf-8"
      }
    }).then(res=>{
      // console.log(1,res);
      for(let header of res.headers.entries()){
       if(header[0]==="authorization") {
         localStorage.setItem("Authorization", header[1]);
       }
      }
      return res.text();
    }).then(res=>{
      if(res ==="ok"){
    // console.log(3,res);
    
    alert("로그인 성공");
        window.location.href="/pthome";
	  }else{
      alert("아이디 또는 비밀번호가 틀렸습니다.");

    }
	  
	});
	
	}

    
    return (
        <div>
            <FormStyle>
            <PStyle>
                        로그인
                    </PStyle>
                <DivStyle>
                    
            <input 
                 type="text"
                 onChange={inputHandle}
                 value={user.id}
                 name="id"
                 placeholder="아이디"
                 /><br/><br/>
                 <input 
                 type="password"
                 onChange={inputHandle}
                 value={user.password}
                 name="password"
                 placeholder="패스워드"
                 /><br/><br/>
                 <button onClick={submit}>로그인</button>
                 </DivStyle>
            </FormStyle>
            
            
        </div>
    );
};

export default LoginForm;