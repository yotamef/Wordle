// function buildGame() {
//
//
//     let board=document.createElement('div');
//
//     for (let i=0;i<6;i++){
//         let row = document.createElement("div");
//         row.setAttribute('class','row');
//         for (let j = 0; j < 5; j++) {
//             let box = document.createElement("input");
//             box.setAttribute('type','text');
//             box.setAttribute('class','gameText none');
//             box.addEventListener("keyup", moveNext(this));
//             box.maxLength = 1;
//             box.disabled = true;
//             row.appendChild(box);
//         }
//         board.appendChild(row);
//     }
//     document.body.appendChild(board);
// }


const WORDS = ["ארוחה" , "אבטיח" , "דבורה" , "שולחנ" , "ארטיק" , "ענבים" , "מתכונ" , "אגודל" , "טלפון" , "גירפה" , "הילוכ" , "חיפוש" , "מכשיר" , "כריות" , "תשלומ" , "מושלמ" , "נוראי", "דרקונ" , "מכחול" , "בדיוק" , "מקפיא"];
const RANDOM = Math.floor(Math.random()*20);
const SECRET_WORD = WORDS[RANDOM];
const SECRET_WORD_ARR = SECRET_WORD.split("");
let time=0;


function check() {
    const boxes = document.getElementsByClassName("gameText");
    let userInput = "";
    for (let i = time*5; i<time*5+5; i++) {
        const currentBox = boxes[i];
        userInput = userInput +  currentBox.value;

    }
    if (userInput.length!=5) {
        return;
    }

    for (let i = time*5,k=0; i<time*5+5; i++,k++) {    //painter
        if (boxes[i].value === SECRET_WORD_ARR[k]) {
            boxes[i].setAttribute("class", "gameText green");
        }
        else {
            for (let j = 0; j<5; j++) {
                if (boxes[i].value === SECRET_WORD_ARR[j]) {
                    boxes[i].setAttribute("class", "gameText orange");
                    break;
                }
                else {
                    boxes[i].setAttribute("class", "gameText gray");
                }
            }
        }
    }
    if (userInput === SECRET_WORD) {
        alert("you won")
    }
    time++;

}


function moveNext(ele) {

    if(ele.value !== "") {

        const boxes = document.getElementsByClassName("gameText");
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i] === ele) {
                boxes[i + 1].focus();
                return;
            }
        }

    }

}


