//CHECAR SE O LIGHTMODE ESTÁ ATIVO
let lightMode = localStorage.getItem('lightMode');
console.log(lightMode)
if(lightMode === 'true'){
    modeSwitch.classList.toggle("active");
    topo.classList.toggle("light");
}

//AO CLICAR NO SWITCH ALTERNA ENTRE LIGHT E DARK MODE
modeSwitch.onclick = (e) => {
    e.target.classList.toggle("active");
    topo.classList.toggle("light");
    if(topo.classList.contains('light')){
        localStorage.setItem('lightMode',true);
        }else{
        localStorage.setItem('lightMode',false);
    }
}

let btnAbrir = document.querySelector(".abrir-lateral");
btnAbrir.onclick = function(){
    lateral.classList.add("active");
}