window.onfocus = function () {

}
window.onload = function () {
	window.focus();
	window.moveTo(0, 0);
	window.resizeTo(1920, 1080);
	window.scrollTo(0, 250);
}

/* Id type */
function CheckId(str)
{
	var reg_id = /[s][0-9][0-9][0][0-9][0-9]/;
    if(!reg_id.test(str)) {
        return false;
    }
    else {
        return true;
    }
}

function GoToEnroll()
{

	var obId = document.getElementById("id");
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
	}
}