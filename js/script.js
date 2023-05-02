const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')

const first = document.querySelector('.first')
const second = document.querySelector('.second')

let number = document.getElementById('number').textContent

function display() {
	first.classList.toggle('display')
	second.classList.toggle('display')
}

function btnfirst() {
	btn1.classList.add('click')
	btn2.classList.remove('click')
	btn3.classList.remove('click')
	btn4.classList.remove('click')
	btn5.classList.remove('click')
}
function btn2() {
	btn2.classList.add('click')
	btn1.classList.remove('click')
	btn3.classList.remove('click')
	btn4.classList.remove('click')
	btn5.classList.remove('click')
}
function btn3() {
	btn3.classList.add('click')
	btn2.classList.remove('click')
	btn1.classList.remove('click')
	btn4.classList.remove('click')
	btn5.classList.remove('click')
}
function btn4() {
	btn4.classList.add('click')
	btn2.classList.remove('click')
	btn3.classList.remove('click')
	btn1.classList.remove('click')
	btn5.classList.remove('click')
}
function btn5() {
	btn5.classList.add('click')
	btn2.classList.remove('click')
	btn3.classList.remove('click')
	btn4.classList.remove('click')
	btn1.classList.remove('click')
}
