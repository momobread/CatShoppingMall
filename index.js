const nav_menu = document.querySelector('.nav_menu');
const nav_content = document.getElementById('nav_content');

// content_nav_ad
const ad = document.getElementById('ad');
const ad_next_button_1 = document.getElementById('ad_next_button_1');
const ad_next_button_2 = document.getElementById('ad_next_button_2');
const ad_next_button_3 = document.getElementById('ad_next_button_3');
const ad_next_button_4 = document.getElementById('ad_next_button_4');
console.log(ad);




// animate css
function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

// click Menui
function clickMenu(){
    addEventListener('click',(event)=>{
        nav_content.style.display='inline-block'
        console.log("clisk");
            animateCSS('#nav_content','fadeInRight');

    })
}

function closeMenu(){
    addEventListener('click',(event)=>{
        console.log('다ㄷ')
        // animateCSS('#nav_content','fadeOutRight');
        // 왜 이걸 풀면 다시 메뉴를 누를때 fadeout이 되징
        nav_content.style.display = 'none';
    })
}

//button은 값을 기억해야 되서 밖에 뺀다 (전역) 
let button = 0;
function adAutoScroll (time) {
    console.log("1초")
    let count = 0;
    count +=time;
    button +=time;
    if(count ==1){
        count =0;
        ad.scrollLeft = 900;
        // 그림 하나가 900px + 오른쪽으로 넘기기
        console.log(button)
        console.log("auto 실행증");
        if(button==1){
            ad_next_button_1.style.background='white';
            ad_next_button_2.style.background='rgb(174, 154, 247)';
        }else if(button==2){
            ad_next_button_2.style.background='white';
            ad_next_button_3.style.background='rgb(174, 154, 247)';
        }else if(button==3){
            ad_next_button_3.style.background='white';
            ad_next_button_4.style.background='rgb(174, 154, 247)';
        }
        else if(button ==4)
        {
            button =0;
            ad_next_button_4.style.background='white';
            ad_next_button_1.style.background='rgb(174, 154, 247)';
        }

    }
    let current = ad.firstElementChild;
    ad.appendChild(current);
    // console.log(ad);
}



// setInterval(()=>adAutoScroll(1),2000);