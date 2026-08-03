/* ==========================================
   APP PREMIUM V1 - SCRIPT.JS
========================================== */

/* =========================
SCROLL PROGRESS BAR
========================= */

const progress = document.getElementById("progress");

window.addEventListener("scroll", () => {

const scroll = document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

progress.style.width =
(scroll / height) * 100 + "%";

});

/* =========================
REVEAL ANIMATION
========================= */

const reveals =
document.querySelectorAll(
".section,.glass-card,.leader-card,.stat-card"
);

function revealElements(){

reveals.forEach(el=>{

const top =
el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.classList.add("reveal");
el.classList.add("active");

}

});

}

window.addEventListener(
"scroll",
revealElements
);

revealElements();

/* =========================
HEADER EFFECT
========================= */

const header =
document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.boxShadow =
"0 15px 35px rgba(0,0,0,.12)";

header.style.background =
"rgba(255,255,255,.95)";

}else{

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.06)";

header.style.background =
"rgba(255,255,255,.90)";

}

});

/* =========================
STAT COUNTER
========================= */

const counters =
document.querySelectorAll(".stat-card h3");

let started = false;

window.addEventListener("scroll",()=>{

const stats =
document.querySelector(".stats-grid");

if(!stats) return;

if(
stats.getBoundingClientRect().top <
window.innerHeight-100 &&
!started
){

started=true;

counters.forEach(counter=>{

const original =
counter.innerText;

const number =
parseInt(original);

if(isNaN(number)) return;

let count=0;

const speed =
Math.max(10,Math.floor(number/60));

const timer=setInterval(()=>{

count+=speed;

if(count>=number){

counter.innerHTML=original;

clearInterval(timer);

}else{

if(original.includes("+")){

counter.innerHTML=
count+"+";

}else{

counter.innerHTML=count;

}

}

},20);

});

}

});

/* =========================
FLOATING PARTICLES
========================= */

const canvas =
document.getElementById("particles");

const ctx =
canvas.getContext("2d");

function resize(){

canvas.width = innerWidth;
canvas.height = innerHeight;

}

resize();

window.addEventListener(
"resize",
resize
);

const colors=[

"#0057B8",
"#FF9933",
"#138808"

];

const particles=[];

for(let i=0;i<80;i++){

particles.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*3+1,

dx:(Math.random()-.5)*0.5,

dy:(Math.random()-.5)*0.5,

color:
colors[
Math.floor(
Math.random()*colors.length
)
],

a:Math.random()*0.5+0.2

});

}

function animate(){

ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(
p.x,
p.y,
p.r,
0,
Math.PI*2
);

ctx.fillStyle=
p.color.replace(")", "");

ctx.globalAlpha=p.a;

ctx.fill();

ctx.globalAlpha=1;

p.x+=p.dx;
p.y+=p.dy;

if(p.x<0)p.x=canvas.width;
if(p.x>canvas.width)p.x=0;

if(p.y<0)p.y=canvas.height;
if(p.y>canvas.height)p.y=0;

});

requestAnimationFrame(
animate
);

}

animate();

/* =========================
SMOOTH NAV ACTIVE
========================= */

const navLinks =
document.querySelectorAll(
".nav-links a"
);

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=
sec.offsetTop-120;

if(scrollY>=top){

current=sec.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
==
"#"+current
){

link.classList.add("active");

}

});

});
