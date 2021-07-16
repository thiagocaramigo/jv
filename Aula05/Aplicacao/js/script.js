const btnOpen = document.querySelector("#open");
const menu = document.querySelector("menu");
const main = document.querySelector("main");
const btnClose = document.querySelector("#close");

btnOpen.addEventListener("click",()=>{
    menu.style.width="200px"
    main.style.marginLeft="200px";
})


btnClose.addEventListener("click",()=>{
    menu.style.width="0"
    main.style.marginLeft="0";
})