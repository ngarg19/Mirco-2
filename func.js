let num = document.getElementsByClassName("counter")[0].innerText;
console.log(num);

let inc = document.getElementsByClassName("incBut")[0];
inc.onclick = function(){
    num = num + 1;
    num = num < 0 ? 0 : num;
    document.getElementsByClassName("counter")[0].innerText = num;
}
//another way to do this
// inc.addEventListener('mention the event', 
//         function(){
//             function body
//     }
// )
let reset = document.getElementsByClassName("reset")[0];
reset.onclick = function(){
    num = 0;
    document.getElementsByClassName("counter")[0].innerText = num;
}

let decrement = document.getElementsByClassName("decrem")[0];
decrement.onclick = function(){
    num = num - 1;
    num = num < 0 ? 0 : num;
    document.getElementsByClassName("counter")[0].innerText = num;
}

// let img = document.createElement("img");
// img.setAttribute('margin-left','400px');
// img.setAttribute('src',"https://picsum.photos/200/300");
// console.log(img);
// document.body.appendChild(img);

