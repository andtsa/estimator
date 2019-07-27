let inputElement = document.getElementById('i');
let output = document.getElementById('output');
let f = [];
//document.addEventListener('keydown', calculate(Event));

function calculate() {
    //if (event.keyCode ==! 13) return;
    let inp = parseInt(inputElement.value);
    
    let tries = 10000 - (inp*3);
    tries < 1 ? tries = 2 : null;
    let percentage = 0;

    for (t = 0; t < tries; t++) {
        let bdays = [];
        let temp = 0;

        for (b = 0; b < inp; b++) {
            bdays.push(Math.ceil(Math.random()*365));
        }


        for (i = 0; i < inp; i++){
            for (j = i+1; j < inp; j++){
                bdays[i] == bdays[j] ? temp++ : null;
            }
        }
        percentage = (percentage+(temp/inp))/2;
    }
    let txt = (percentage*100) + "%";
    var ti = 0;
    var speed = 30;

    function typeWriter() {
        if (ti < txt.length) {
            output.innerHTML += txt.charAt(ti);
            ti++;
            setTimeout(typeWriter, speed);
        }
    }
    output.innerHTML = " ";
    typeWriter();
}














function factorial(n){
    if(n == 0 || n == 1) {
        return 1;
    }
    if (f[n] > 0){
        return f[n];
    }
    return f[n] = factorial(n-1) * n;
}