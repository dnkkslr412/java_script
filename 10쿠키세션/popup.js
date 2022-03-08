//팝업쿠키생성함수 (쿠키이름을 받습니다)
function createCookie(name) {
    //쿠키만료기간
    var date = new Date();
    date.setDate(date.getDate() + 1); //1일
    //쿠키구문
    var cookie = "";
    cookie += name + "=true;";
    cookie += "expires=" + date.toUTCString() + ";";
    //쿠키생성
    document.cookie = cookie;
}

//쿠키확인함수
function getCookie(name) {

    var cookies = document.cookie.split(";"); //split으로 나눠줘서 배열이 들어있음(반복문사용이유)
    for(var i = 0; i < cookies.length; i++) {

        if(cookies[i].indexOf(name) != -1) { //name쿠키가 포함되어 있음
            return true; //존재여부를 true반환
        }
    }
}