const topColor= document.getElementsByClassName("color-change");
const playerBgColor=document.getElementsByClassName("bg-color");
const lists= document.getElementById("list-item");
const numbInput= document.getElementById("number-input");
const numberIncrease= document.getElementById("num-plus");
const listLast= document.getElementById("list-last");
let value=13;
// color change of headings 

for(const h1 of topColor){
   h1.style.color="#FF1493";
}


// bg color change of players 

for (const items of playerBgColor){
    items.style.backgroundColor="rgba(255, 99, 71, 0.6)"
}


// add list items to an ui list 

function addButton(){

    const newList= document.createElement("li");
    value=value+1;
    newList.innerText="lorem"+" "+ newList.innerText+value;
    lists.appendChild(newList);

}

// input number increase and after 5 its disabled

numberIncrease.addEventListener("click",function(){
   const number= parseInt(numbInput.value) ;
        numbInput.value= number + 1;
        if(numbInput.value==5){
            numberIncrease.setAttribute("disabled",true)
        }
})