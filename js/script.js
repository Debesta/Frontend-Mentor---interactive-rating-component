const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')

const first = document.querySelector('.first')
const second = document.querySelector('.second')


function display() {
	first.classList.toggle('display')
	second.classList.toggle('display')
}


function btnFirst() {
	btn1.classList.add('click')
	btn2.classList.remove('click')
	btn3.classList.remove('click')
	btn4.classList.remove('click')
	btn5.classList.remove('click')
}
function btnSecond() {
	btn1.classList.remove('click')
	btn2.classList.add('click')
	btn3.classList.remove('click')
	btn4.classList.remove('click')
	btn5.classList.remove('click')
}
function btnThird() {
	btn1.classList.remove('click')
	btn2.classList.remove('click')
	btn3.classList.add('click')
	btn4.classList.remove('click')
	btn5.classList.remove('click')
}
function btnFourth() {
	btn1.classList.remove('click')
	btn2.classList.remove('click')
	btn3.classList.remove('click')
	btn4.classList.add('click')
	btn5.classList.remove('click')
}
function btnFifth() {
	btn1.classList.remove('click')
	btn2.classList.remove('click')
	btn3.classList.remove('click')
	btn4.classList.remove('click')
	btn5.classList.add('click')
}

function rateFirst(){
	document.getElementById('number').textContent="1"
}
function rateSecond(){
	document.getElementById('number').textContent="2"
}
function rateThird(){
	document.getElementById('number').textContent="3"
}
function rateFourth(){
	document.getElementById('number').textContent="4"
}
function rateFifth(){
	document.getElementById('number').textContent="5"
}