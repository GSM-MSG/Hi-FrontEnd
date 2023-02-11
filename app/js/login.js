/* Id type */
function CheckId(str)
{
	let reg_id = /[s][0-9][0-9][0][0-9][0-9]/;
    if(!reg_id.test(str)) {
        return false;
    }
    else {
        return true;
    }
}

async function GoToEnroll()
{
	let obId = document.getElementById("id");
	if (!obId.value) {
		alert("아이디을 입력해주십시오.");
		obId.focus();
		return;
	}
	else {
		if(!CheckId(obId.value)){
			alert("아이디 형식이 잘못되었습니다.");
			obId.focus();
			return;
		}
		else {
			console.log(email);
			console.log(password);
			fetch("https://port-0-hi-backend-1b5xkk2fldr011vx.gksl2.cloudtype.app/auth/login", {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
					password: password,
                }),
                headers:{
                    "Access-Control-Allow-Origin": "https://port-0-hi-backend-1b5xkk2fldr011vx.gksl2.cloudtype.app",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,PATCH,DELETE,OPTIONS,REQUEST",
                    "Access-Control-Allow-Headers": "Content-Type, Authorization, Content-Length, X-Requested-With, Accept",
                    // "Access-Control-Allow-Credentials": "true",
                },
                credentials: 'include'
            })
		}
	}
}

let email, id, password;
function inputId () { 
	id = document.getElementById('id').value;
	email = id + "gsm.hs.kr"
}
function inputPassword () {
	password = document.getElementById('password').value;
}
