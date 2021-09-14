const calculatorEl = document.querySelector('#calculator');
const ledEl = document.querySelector('#led')


calculatorEl.addEventListener('click',(e) => {
    let el  = e.target;
   
    if(ledEl.innerHTML.length > 13) return alert('Números excedidos!') ;
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

