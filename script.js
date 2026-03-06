tempo = 0;

        passarTempo = setInterval(() => {
            tempo++
            document.getElementById('relogio').innerText = tempo;

            if (tempo < 10) {
                document.getElementById('relogio').innerText = '0' + tempo;
            }

            if (tempo > 10) {
                document.getElementById('relogio').innerText = "Você perdeu!";
                
            }
        }, 1000);

let contador = 0

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
           
        }
        else {
            elemento.style.backgroundColor = "rgb(245, 135, 135)"
        }

        if(contador >= 2){
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