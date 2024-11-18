// item_component
let best_item_content_title = ""
let best_item_content_price = ""
let best_item_content_image= ""

// best_item
let best_item_icon =""
let best_item_content =""
let best_item_componenet =""

let dataset_code = ""
let dataset_value = ""
let dataset_title = ""
// console.log(best_item_content_image);
// console.log(best_item_content_title);
// console.log(best_item_content_price);

export{dataset_code,dataset_value,dataset_title}


console.log("itemjs페이지 입니다");

// 상품에 마우스를 올리면 list가 나타난ㄴ다

function overmouseitem(){

}





function extractItem(id){
    console.log(id)
}





// TESTA
// best_item 추출 --> div태그
function extractItem(item){
     best_item_icon = document.getElementById(`${item}`)
     best_item_content= best_item_icon.parentNode.parentNode.parentNode

    
    console.log(`잘나오는 중`);
    console.log(best_item_content);     // best_item_content가 나옴 

    ItemComponent(best_item_content)
}

// dataset과 id 매치시켜 컴포넌트 추출 
function ItemComponent(item){
    best_item_componenet = item;
    console.log("ITEMCOMPONENT부분 입니다")
    console.log(best_item_componenet.dataset.code)

    // div의 dataset 값과 대응하는 id 찾아서 component 만들기
    dataset_code = best_item_componenet.dataset.code
    best_item_content_image = document.getElementById(`${dataset_code}`)
    console.log(best_item_content_image)

    dataset_value = best_item_componenet.dataset.value
    best_item_content_price = document.getElementById(`${dataset_value}`)
    console.log(best_item_content_price)

    dataset_title = best_item_componenet.dataset.title
    best_item_content_title = document.getElementById(`${dataset_title}`)
    console.log(best_item_content_title)

}
// itemcomponent가 전역에 잘 저장되는지 test
// function TEST(){
//     // 전역변수로 만들어서 잘 저장되어 있습니다
//     console.log(best_item_content_image)   
// }

function makeCartItem(){
    
}


// function extractItem(item){
//     best_item_icon = document.getElementById(`${item}`)
//     best_item_content= best_item_icon.parentNode.parentNode.parentNode.childNodes[1]

   
//    console.log(`잘나오는 중`);
//    console.log(best_item_content);     // best_item_content가 나옴 

//    ItemComponent(best_item_content)
// }

// function ItemComponent(item){
//    best_item_componenet = item;
//    console.log(best_item_componenet.childNodes[3])
//    // best_item_content_price =
//    // best_item_content_image =
// }