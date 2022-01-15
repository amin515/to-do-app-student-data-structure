const go = document.getElementById('go');
const stop = document.getElementById('stop');
const result = document.getElementById('h1');


let final;
go.addEventListener('click', function () {

    result.innerHTML = `Sit back and Relax.....`

    final = setTimeout(function () {
        result.innerHTML = `We Love MERN ?`
    }, 5000);

});

stop.addEventListener('click', function () {
    clearTimeout(final)
    result.innerHTML = `New thing coming soon .....`


    setTimeout(function () { // if need change also this setTimeOut fonction must be decleard another verialble
        result.innerHTML = `We Love Python ?`
    }, 5000);

});


// counter start


const start = document.getElementById('start');
const stop1 = document.getElementById('stop1');
const res = document.getElementById('res');
const reset = document.getElementById('reset');


let current_value = 0;

let counter;


start.addEventListener('click', function () {

    counter = setInterval(() => {
        res.innerHTML = current_value;
        current_value++;

    }, 1000);

});

stop1.addEventListener('click', function () {

    clearInterval(counter);
});


reset.addEventListener('click', function () {

    current_value = 0;
    res.innerHTML = current_value;
    clearInterval(counter);
});

// counter one done
// counter two start

const start2 = document.getElementById('start2');
const stop2 = document.getElementById('stop2');
const p1 = document.getElementById('p1');
const inp = document.getElementById('inp');
const loader = document.getElementById('loader');



let counter_value = 0;


let clear
start2.addEventListener('click', function () {

    counter_value = inp.value;


    clear = setInterval(() => {
        p1.innerHTML = counter_value;


        let width = `${loader_dynamic(inp.value, counter_value)}`

        loader.style.width = `${width}%`

        if (counter_value == 0) {
            clearInterval(clear);
        };

        if (width > 50 && width <= 100) {
            loader.style.backgroundColor = "green"
            p1.style.color = "green"
        } else if (width > 30 && width <= 50) {
            loader.style.backgroundColor = "orange"
            p1.style.color = "orange"
        } else if (width <= 30) {
            loader.style.backgroundColor = "red"
            p1.style.color = "red"
        };

        counter_value--;
    }, 1000);


});


stop2.addEventListener('click', function () {
    clearInterval(clear);
});



// counter end
// to do app start

const to_do = document.querySelector('#to-do');
const btn = document.querySelector('#btn');
const p2 = document.querySelector('#p2');


btn.addEventListener('click', function () {
    p2.innerHTML += `<p class="alert alert-success">${to_do.value}
    </p>`

});


// to do app end
// student data start


const form = document.querySelector('#form');
const name1 = document.querySelector('#name');
const fname = document.querySelector('#fname');
const mname = document.querySelector('#mname');
const roll = document.querySelector('#roll');
const loc = document.querySelector('#loc');
// subject 
const bn = document.querySelector('#bn');
const en = document.querySelector('#en');
const math = document.querySelector('#math');
const sci = document.querySelector('#sci');
const ss = document.querySelector('#ss');
const rel = document.querySelector('#rel');
//result
const result4 = document.querySelector('#result4');
const lodd = document.querySelector('#lodd');
const ph = document.querySelector('input[placeholder]')

console.log(ph);
let total = (bn.value + en.value + math.value + sci.value + ss.value + rel.value) + 6;
let final_result = new Student();

let finix;
form.addEventListener('submit', function (e) {
    e.preventDefault();

  
    lodd.innerHTML = `Loding .`
    lodd.style.color = 'white'

    setTimeout(function(){
        lodd.innerHTML = `Loding ..`
        lodd.style.color = 'white'
    },500);
    setTimeout(function(){
        lodd.innerHTML = `Loding ...`
        lodd.style.color = 'white'
    },700);
    setTimeout(function(){
        lodd.innerHTML = `Loding ....`
        lodd.style.color = 'white'
    },1000);
    setTimeout(function(){
        lodd.innerHTML = `Loding .....`
        lodd.style.color = 'white'
    },1500);
    setTimeout(function(){
        lodd.innerHTML = `Loding ......`
        lodd.style.color = 'white'
    },2000);
    setTimeout(function(){
        lodd.innerHTML = `Loding .......`
        lodd.style.color = 'white'
    },2500);
    


    setTimeout(function (){
        lodd.innerHTML = `Checking .`

    }, 2800);
    setTimeout(function (){
        lodd.innerHTML = `Checking ..`

    }, 3300);
    setTimeout(function (){
        lodd.innerHTML = `Checking ...`
    }, 3500);

    setTimeout(function(){
        lodd.innerHTML = `Done..❤`
        lodd.style.color = 'green';
    }, 4000)
    setTimeout(function (){

        let student1 = document.querySelector('#tbody1');
    student1.innerHTML = `
   
    <thead>
    <tr>
        <th>#</th>
        <th>Name</th>
        <th>Father Name</th>
        <th>Mother Name</th>
        <th>Roll</th>
        <th>Location</th>
    </tr>
</thead>
<tr>
   <td>1</td>
   <td>${name1.value}</td>
   <td>${fname.value}</td>
   <td>${mname.value}</td>
   <td>${roll.value}</td>
   <td>${loc.value}</td>
   
</tr>
`;
    let student2 = document.querySelector('#tbody2');
    student2.innerHTML = `


    <thead>
    <tr>
        <th>Bangla</th>
        <th>English</th>
        <th>Math</th>
        <th>S-Science</th>
        <th>Science</th>
        <th>Religion</th>
    </tr>
</thead>
<tr>
<td>${bn.value}</td>
<td>${en.value}</td>
<td>${math.value}</td>
<td>${sci.value}</td>
<td>${ss.value}</td>
<td>${rel.value}</td>
</tr>
`;
    result4.innerHTML = `<p class="alert alert-info w-75 mt-2">Your gpa is: ${final_result.gpa(bn.value, en.value, math.value, sci.value, ss.value, rel.value)} and your grade is: ${final_result.grade(bn.value, en.value, math.value, sci.value, ss.value, rel.value)} , and ${final_result.cgpa(final_result.gpa(bn.value),final_result.gpa(en.value),final_result.gpa(math.value),final_result.gpa(sci.value),final_result.gpa(ss.value),final_result.gpa(rel.value))}</p>

`


lodd.innerHTML = '';

    }, 5000)



    name1.value = ''
    fname.value = ''
    roll.value = ''
    mname.value = ''
    loc.value = ''

});


const pm = document.querySelector('#pm');
const pn = document.querySelector('#pn');
const po = document.querySelector('#po');
const pp = document.querySelector('#pp');

name1.addEventListener('keyup',function(){
    let userName = name1.value;
    let val = /^[a-zA-Z ][^\.\@\#\%\&]*$/;

    let fuserName = fname.value;
    let vall = /^[a-zA-Z ][^\.\@\#\%\&]*$/;

   if(userName == ''){
       pm.innerHTML = `<p class="text-danger">plz type your name</p>`
   }else if(val.test(userName) == false){
    pm.innerHTML = `<p class="text-danger">plz valid name</p>`
   }else if(val.test(userName) == true){
    pm.innerHTML = ``
   }else{
       pm.innerHTML = ``
   }
  
});

fname.addEventListener('keyup',function(){
   
    let fuserName = fname.value;
    let vall = /^[a-zA-Z ][^\.\@\#\%\&]*$/;

   if(fuserName == ''){
       pn.innerHTML = `<p class="text-danger">plz type your father name</p>`
   }else if(vall.test(fuserName) == false){
    pn.innerHTML = `<p class="text-danger">plz valid name</p>`
   }else if(vall.test(fuserName) == true){
    pn.innerHTML = ``
   }else{
       pn.innerHTML = ``
   }
  
});
mname.addEventListener('keyup',function(){
   
    let muserName = mname.value;
    let vall2 = /^[a-zA-Z ][^\.\@\#\%\&]*$/;

   if(muserName == ''){
       po.innerHTML = `<p class="text-danger">plz type your mother name</p>`
   }else if(vall2.test(muserName) == false){
    po.innerHTML = `<p class="text-danger">plz valid name</p>`
   }else if(vall2.test(muserName) == true){
    po.innerHTML = ``
   }else{
       po.innerHTML = ``
   }
  
});
loc.addEventListener('keyup',function(){
   
    let locName = loc.value;
    let vall2 = /^[a-zA-Z ][^\.\@\#\%\&]*$/;

   if(locName == ''){
       pp.innerHTML = `<p class="text-danger">plz type your location name</p>`
   }else if(vall2.test(locName) == false){
    pp.innerHTML = `<p class="text-danger">plz valid location name</p>`
   }else if(vall2.test(locName) == true){
    pp.innerHTML = ``
   }else{
       pp.innerHTML = ``
   }
  
});










//  pm.innerHTML = `<p class="text-danger"></p>`


// console.log(student1);

// result4.innerHTML = `Your Name: ${name1.value} Your Father Name: ${fname.value} Your Mother name: ${mname.value} Your Roll No:${roll.value} Bangla Mark: ${bn.value} English Mark: ${en.value} Math mark: ${math.value} Science mark: ${sci.value} S-science Mark: ${ss.value} Religion Mark: ${rel.value} Your gpa is: ${final_result.gpa(bn.value, en.value, math.value, sci.value, ss.value, rel.value)} and final grade is: ${final_result.grade(bn.value, en.value, math.value, sci.value, ss.value, rel.value)} and total marks:${total.value} cgpa = ${final_result.cgpa(final_result.gpa(bn.value),final_result.gpa(en.value),final_result.gpa(math.value),final_result.gpa(sci.value),final_result.gpa(ss.value),final_result.gpa(rel.value))}`