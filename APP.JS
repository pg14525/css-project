// let para =document.createElement("p");
// para.innerText="Hey I'm a red!"
// document.querySelector("body").append(para);
// para.classList.add("red");


// let h3 =document.createElement("h3");
// h3.innerText="Hey I'm a blue h3!"
// document.querySelector("body").append(h3);
// h3.classList.add("blue");

// let div=document.createElement("div")
// let h1=document.createElement("h1")
// let p=document.createElement("p")
// h1.innerText="I m in a div";
 
// p.innerText="ME TOO!";
// div.append(h1);
// div.append(p);
// div.classList.add("box");

// document.querySelector("body").append(div);


let btn=document.createElement("btn");
btn.innerText="Click me";
document.querySelector("body").append(btn);

btn.classList.add("button");
let input=document.createElement("input");
input.innerText="Click me";
document.querySelector("body").append(input);

input.classList.add("klick");


let buton =document.querySelector("btn");
buton.setAttribute("id","btnd");
input.setAttribute("placeholder","username ");



let h1=document.createElement("h1");
h1.innerHTML="<u>DOM Practice</u>";
document.querySelector("body").append(h1);
 
let p=document.createElement("p");
p.innerHTML="<u>Apna College<b> DElta</b> Practice</u>";
document.querySelector("body").append(p);
 