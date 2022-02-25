//사이드js
//선택지 2개 - 1.window.onload 
//             2.js코드를 아래쪽에 삽입

// var menuBtn = document.querySelector(".menuBtn");
// console.log(menuBtn);//null값이 나옴 (스크립트가 상단에 있기때문) 

window.onload = function () {

    var menuBtn = document.querySelector(".menuBtn");

    menuBtn.addEventListener("click", onSidenav); //아래의 함수와 연결

}

function onSidenav() { //깔끔하게 적는방법
    
    var sideWidth = document.querySelector(".side"); //side태그
    
    if(sideWidth.style.width == '200px') { //넓이가 200이면
        sideWidth.style.width = '0px';
    }else {
        sideWidth.style.width = '200px';
    }
    

}