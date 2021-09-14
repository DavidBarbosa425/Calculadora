const calculatorEl = document.querySelector('#calculator');
const ledEl = document.querySelector('#led')


calculatorEl.addEventListener('click',(e) => {
    let el  = e.target;
   
    if(ledEl.innerHTML.length >= 9)
    {  ledEl.innerHTML = ' ' , alert('Números excedidos(10)!') } 
    if(el.classList.contains('btnC')) ledEl.innerHTML = ' ';
    if(el.classList.contains('btn7')) ledEl.innerHTML += '7'
    if(el.classList.contains('btn8')) ledEl.innerHTML += '8'
    if(el.classList.contains('btn9')) ledEl.innerHTML += '9'
    if(el.classList.contains('btn4')) ledEl.innerHTML += '4'
    if(el.classList.contains('btn5')) ledEl.innerHTML += '5'
    if(el.classList.contains('btn6')) ledEl.innerHTML += '6'
    if(el.classList.contains('btn1')) ledEl.innerHTML += '1'
    if(el.classList.contains('btn2')) ledEl.innerHTML += '2'
    if(el.classList.contains('btn3')) ledEl.innerHTML += '3'
    if(el.classList.contains('btnSum')) ledEl.innerHTML += '+'
    if(el.classList.contains('btnSub')) ledEl.innerHTML += '-'
    if(el.classList.contains('btnDiv')) ledEl.innerHTML += '/'
    if(el.classList.contains('btnMult')) ledEl.innerHTML += '*'
    if(el.classList.contains('btnZero')) ledEl.innerHTML += '0'
    if(el.classList.contains('btnPoint')) ledEl.innerHTML += '.'
    if(el.classList.contains('btnBracketLeft')) ledEl.innerHTML += '('
    if(el.classList.contains('btnBracketRigth')) ledEl.innerHTML += ')'
    if(el.classList.contains('btnAccount')) ledEl.innerHTML = eval(ledEl.innerText) 
    if(el.classList.contains('btnDel'))
    ledEl.innerHTML = ledEl.innerHTML.substring(0, ledEl.innerHTML.length - 1)
   
}) 

document.addEventListener('keypress', (e) => {
    if(ledEl.innerHTML.length >= 10)
    {  ledEl.innerHTML = ' ' , alert('Números excedidos(10)!') } 
    if(e.keyCode === 99) ledEl.innerHTML = ' '
    if(e.keyCode === 55) ledEl.innerHTML += '7'
    if(e.keyCode === 56) ledEl.innerHTML += '8'
    if(e.keyCode === 57) ledEl.innerHTML += '9'
    if(e.keyCode === 52) ledEl.innerHTML += '4'
    if(e.keyCode === 53) ledEl.innerHTML += '5'
    if(e.keyCode === 54) ledEl.innerHTML += '6'
    if(e.keyCode === 49) ledEl.innerHTML += '1'
    if(e.keyCode === 50) ledEl.innerHTML += '2'
    if(e.keyCode === 51) ledEl.innerHTML += '3'
    if(e.keyCode === 48) ledEl.innerHTML += '0'
    if(e.keyCode === 46) ledEl.innerHTML += '.'
    if(e.keyCode === 42) ledEl.innerHTML += '*'
    if(e.keyCode === 43) ledEl.innerHTML += '+'
    if(e.keyCode === 45) ledEl.innerHTML += '-'
    if(e.keyCode === 47) ledEl.innerHTML += '/'
    if(e.keyCode === 40) ledEl.innerHTML += '('
    if(e.keyCode === 41) ledEl.innerHTML += ')'
    if(e.keyCode === 13) ledEl.innerHTML = eval(ledEl.innerText)
    if(e.keyCode === 60) ledEl.innerHTML = ledEl.innerHTML.substring(0, ledEl.innerHTML.length - 1)
    
})