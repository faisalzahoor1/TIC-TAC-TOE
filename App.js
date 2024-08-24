let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let cont = document.querySelector(".header");
let msg = document.querySelector(".msg");
let newbtn = document.querySelector(".newbtn");

let turnO = true;
const winningpatrns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const disablboxes = () =>{
    for (let box of boxes) {
        box.disabled = true;
    }
}

const wine = (Winner)=>{
    msg.innerText = `Congratulation, Winner is ${Winner}`;
    cont.classList.remove("hide");
    resetbtn.classList.add("hide");
    disablboxes();
}

for (let box of boxes) {
    box.addEventListener("click", () =>{
        console.log("box is clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        chkwinner();
    });
}

const chkwinner = () =>{
    for (let patterns of winningpatrns) {
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;
        if (pos1 != "" && pos2!= "" && pos3!="") {
            if (pos1 == pos2 && pos2 == pos3) {
                wine(pos1);
            }
        }
    }
}

newbtn.addEventListener("click", () =>{
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    cont.classList.add("hide");
})

resetbtn.addEventListener("click", () =>{
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
})