document.querySelector('.sum').addEventListener('click', () => {
    let n = document.querySelectorAll('.input');

    let largestSum = 0;
    let largestNumber = 0;

    let sum1 = parseInt(n[0].value) + parseInt(n[1].value);
    let sum2 = parseInt(n[2].value) + parseInt(n[3].value);
    let sum3 = parseInt(n[4].value) + parseInt(n[5].value);

    let allNumbers = [parseInt(n[0].value), parseInt(n[1].value), parseInt(n[2].value), parseInt(n[3].value), parseInt(n[4].value), parseInt(n[5].value)];
    let allSums = [sum1, sum2, sum3];
    
    allSums.forEach((x) => {
        if (largestSum < x) {
            largestSum = x;
        }
    });


    allNumbers.forEach((x) => {
        if(largestNumber < x) {
            largestNumber = x;
        }
    });

    document.querySelector('.result').style.opacity = "1"
    
    if(sum1 !== sum1 || sum2 !== sum2 || sum3 !== sum3) {
        document.querySelector('.result').innerHTML = `<h1>Resultado</h1><p>Por favor, insira <span style="text-transform: uppercase;">todos</span> os números corretamente!</p>`
    } else {
        document.querySelector('.result').innerHTML = `<h1>Resultado</h1><p>O valor das somas são, respectivamentes: <span>${sum1}</span>, <span>${sum2}</span> e <span>${sum3}</span>.<br>O maior número introduzido foi <span>${largestNumber}</span>, e a maior soma foi <span>${largestSum}</span>.</p>`
    }
    
    
});