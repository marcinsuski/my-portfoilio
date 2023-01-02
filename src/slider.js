//  skills slider

const radioBtn = document.querySelectorAll(".radio-btn");
const Title = document.querySelectorAll(".slider__title-item");
const languages = document.getElementById("languages");
const frameworks = document.getElementById("frameworks");
const tools = document.getElementById("tools");
const other = document.getElementById("other");
const radio1 = document.getElementById("radio1");


document.getElementById("radio1").checked = true;
let counter = 2;

setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    changeTitle();
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000);

const changeTitle = () => {
    Title.forEach((title) => title.classList.remove("active"));
    if (document.getElementById("radio" + counter).id == "radio1") {
        languages.classList.add("active");
    } else if (document.getElementById("radio" + counter).id == "radio2") {
        frameworks.classList.add("active");
    } else if (document.getElementById("radio" + counter).id == "radio3") {
        tools.classList.add("active");
    } else if (document.getElementById("radio" + counter).id == "radio4") {
        other.classList.add("active");
    }
}

const manualChange = (e) => {
    const target = e.target.id;
    if (target === 'radio1') {
        counter = 1;
    } else if (target === 'radio2') {
        counter = 2;
    } else if (target === 'radio3') {
        counter = 3;
    } else counter = 4;
    changeTitle();

    
}

radioBtn.forEach(btn => {
    btn.addEventListener('click', manualChange) 
})