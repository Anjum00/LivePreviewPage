const title = document.getElementById('title-input');
const titlePreview = document.getElementById('title-preview');

const leftSide = document.querySelector('.left-side');
let submitBtn = document.createElement('button');
submitBtn.innerText = 'Submit';
submitBtn.style.display = 'none';
submitBtn.classList.add('submit-btn')

const description = document.getElementById('desc-input');
const descPreview = document.getElementById('desc-preview');

const name = document.getElementById('Name-checkbox');
const email = document.getElementById('Email-checkbox');
const number = document.getElementById('mobile-checkbox');
const comment = document.getElementById('comment-checkbox');


const bgColor = document.getElementById('color-picker');
const fontColor = document.getElementById('font-color');
const liveText = document.querySelector('.live-text');

title.addEventListener('input', function () {
    titlePreview.textContent = title.value;
});

description.addEventListener('input', function () {
    descPreview.textContent = description.value;
});

name.addEventListener('click', function () {
    if (name.checked == true) {
        document.getElementById('name-input').classList.add('name-display');
        document.getElementById('name-input').classList.remove('input-name');
        leftSide.appendChild(submitBtn);
        submitBtn.style.display = 'block';
    }
    else {
        document.getElementById('name-input').classList.add('input-name');
        document.getElementById('name-input').classList.remove('name-display');
        leftSide.appendChild(submitBtn);
        submitBtn.style.display = 'none';
    }
});

email.addEventListener('click', function () {
    if (email.checked == true) {
        document.getElementById('email-input').classList.add('name-display');
        document.getElementById('email-input').classList.remove('input-name');
    }
    else {
        document.getElementById('email-input').classList.remove('name-display');
        document.getElementById('email-input').classList.add('input-name');
    }
});

number.addEventListener('click', function () {
    if (number.checked == true) {
        document.getElementById('number-input').classList.add('name-display');
        document.getElementById('number-input').classList.remove('input-name');
    }
    else {
        document.getElementById('number-input').classList.add('input-name');
        document.getElementById('number-input').classList.remove('name-display');
    }
});

comment.addEventListener('click', function () {
    if (comment.checked == true) {
        document.getElementById('comment-input').classList.add('name-display');
        document.getElementById('comment-input').classList.remove('input-name');
    }
    else {
        document.getElementById('comment-input').classList.add('input-name');
        document.getElementById('comment-input').classList.remove('name-display');
    }
});


bgColor.addEventListener('input', function () {
    leftSide.style.backgroundColor = bgColor.value;
});

fontColor.addEventListener('input', function () {
    titlePreview.style.color = fontColor.value;
    descPreview.style.color = fontColor.value;
});

function toggleColor() {
    let colorSelect = document.querySelector('.bgColor-select');
    let imageSelect = document.querySelector('.bgImage-select');
    if (document.getElementById('bg-color').checked) {
        colorSelect.style.display = 'block';
        imageSelect.style.display = 'none';
    } else {
        colorSelect.style.display = 'none';
    }
}

function toggleImage() {
    let colorSelect = document.querySelector('.bgColor-select');
    let imageSelect = document.querySelector('.bgImage-select');
    if (document.getElementById('bg-image').checked) {
        imageSelect.style.display = 'block';
        colorSelect.style.display = 'none';
    } else {
        imageSelect.style.display = 'none';
    }
}

document.getElementById('image-picker').addEventListener('change', function () {
    const file = document.getElementById('image-picker').files[0]
    if (file) {
        const objectURL = URL.createObjectURL(file);
        leftSide.style.backgroundImage = `url(${objectURL})`;
    }
});