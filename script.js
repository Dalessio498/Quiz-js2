

let contador = 0

    let segundos = 0;
    const intervalId = setInterval(() => {
          const retry = document.getElementById("retry")
        const botoes = document.querySelectorAll(".answer-button");
        segundos++;
        console.log(segundos);

        timer = document.getElementById('time').innerText = segundos

        if (segundos >= 10) {
            pararCronometro();
            timer = document.getElementById('time').innerText = "False"
            block(botoes)
            retry.disabled = false
            retry.style.cursor = "pointer"
            retry.style.backgroundColor = "white"
        }

    }, 1000);

    function pararCronometro() {
        clearInterval(intervalId); 
        console.log('Intervalo parado')
    }

    function verificar(numero, elemento){
        const passar = document.getElementById("passar")
        const retry = document.getElementById("retry")
        const botoes = document.querySelectorAll(".answer-button");
        contador++
       

        if(numero === '1') {
            elemento.style.backgroundColor = "rgb(139, 245, 135)"
            passar.style.backgroundColor = "white"
            passar.disabled = false
            passar.style.cursor = "pointer"
            block(botoes)
            pararCronometro()
            if (pararCronometro){
                timer = document.getElementById('time').innerText = "True"
            }

        }
        else {
            elemento.style.backgroundColor = "rgb(245, 135, 135)"
        }

        if(contador >= 2){
            pararCronometro()
            if (pararCronometro){
                timer = document.getElementById('time').innerText = "False"
            }
            block(botoes)
            retry.disabled = false
            retry.style.cursor = "pointer"
            retry.style.backgroundColor = "white"
        }

        
    }


function block(botoes) {
    botoes.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = "not-allowed";
        btn.style.opacity = "0.6";
    });
} 

