const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
let mode = document.querySelector("#mode");
let currmode = "light";


mode.addEventListener("click",() =>{
    
    if(currmode==="light") {
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        document.querySelector("button").style.backgroundColor = "white";
        document.querySelector("button").style.color = "black";
        document.querySelector("button").style.backgroundColor = "white";
        // mode.textContent = "Light Mode"
        // moonIcon.classList.toggle('hidden');
        
        
    } else{
        currmode ="light";
        document.querySelector("body").style.backgroundColor = "pink";
        document.querySelector("body").style.color = "black";
        document.querySelector("button").style.backgroundColor = "Black";
        document.querySelector("button").style.color = "white";
        // moonIcon.classList.toggle('hidden');
        // mode.textContent = "Dark Mode"
        // sunIcon.classList.toggle('hidden');
    }
    console.log(currmode);
});

// const modeToggle = document.getElementById('mode-toggle');
// const sunIcon = modeToggle.querySelector('.fa-sun');
// const moonIcon = modeToggle.querySelector('.fa-moon');

// modeToggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark');
//   sunIcon.classList.toggle('hidden');
//   moonIcon.classList.toggle('hidden');
// });
