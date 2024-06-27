document.addEventListener("DOMContentLoaded",() => {
    document.getElementById("sorteador").addEventListener("submit", (e) => {
        e.preventDefault();
        let numMax = document.getElementById("numero-maximo").value;
        console.log(numMax)
        numMax = parseInt(numMax);

        let randomNum = Math.floor(Math.random()*numMax + 1);
        document.getElementById("resultado").innerText = randomNum  
        document.querySelector(".results").style.display = 'block';
    })
})