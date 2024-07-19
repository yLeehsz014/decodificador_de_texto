let textElement = document.querySelector('textarea')
let output = document.querySelector('.output');
let outputP = document.querySelector('.output p');
let btnEn = document.querySelector('#btn1');
let btnDec = document.querySelector('#btn2');
let text;
let alertElement = document.querySelector('.alert')
let imgElement = document.querySelector('.alert img')
let spanElement = document.querySelector('.alert span')
function wait(){
    alertElement.style.display = 'none';
}


btnEn.addEventListener('click', ()=>{
    if((textElement.value) == ''){
        alertElement.style.display = 'flex';
        imgElement.src = './assets/img/error.svg';
        spanElement.innerHTML = '[ERROR] You may fill the input first!'
        setTimeout(wait,2000)
    }else{
        output.style.display = 'flex';
        text = textElement.value;
        text = text.replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        textElement.value = '';
        outputP.innerHTML = `${text}`;
    }
});
output.addEventListener('click', ()=>{
    navigator.clipboard.writeText(text);
    alertElement.style.display = 'flex';
    imgElement.src = './assets/img/check.png';
    spanElement.innerHTML = '[SUCCESS] Pasted to clipboard! ';
    spanElement.style.color = 'green';
    setTimeout(wait,2000);
});

        
btnDec.addEventListener('click', () => {
    if(text){
        output.style.display = 'flex';
        text = text.replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e')
        .replace(/ai/g, 'a');
        textElement.value = ''
        outputP.innerHTML = text;
    }else if((textElement.value) == ''){
        alertElement.style.display = 'flex';
        imgElement.src = './assets/img/error.svg';
        spanElement.innerHTML = '[ERROR] You may fill the input first!'
        setTimeout(wait,2000)
    }
    else{
        output.style.display = 'flex';
        text = textElement.value;
        text = text.replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e')
        .replace(/ai/g, 'a');
        textElement.value = ''
        outputP.innerHTML = text;
    }


});