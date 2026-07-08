const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section=>{
    section.classList.add("hidden");
    observer.observe(section);
});function calculateBMI(){

let h = document.getElementById("height").value / 100;
let w = document.getElementById("weight").value;

let bmi = w / (h*h);

document.getElementById("result").innerHTML =
"Your BMI is " + bmi.toFixed(1);

}