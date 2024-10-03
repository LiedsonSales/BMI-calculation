function scope() {

    const form = document.querySelector('.form');

    function formEvent(event) {
        event.preventDefault();

        const weight = form.querySelector('.weight');
        const height = form.querySelector('.height');

        const peso = Number(weight.value);
        const altura = Number(height.value);


        if (!peso || !altura) {
            setResultado('Peso e Altura inválidos!', false);
            return;
        }
        if (!peso) {
            setResultado('Peso inválido!', false)
            return;
        }
        if (!altura) {
            setResultado('Altura inválida!', false)
            return;
        }

        const value = imc(peso, altura);
        const grau = nivelIMC(value);

        setResultado(`Seu imc é ${value} (${grau}).`, true);
 
    }

    function nivelIMC (n) {
        tabela = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade nível 1', 'Obesidade nível 2', 'Obesidade nível 3'];

        if (n >= 40) {
            return tabela[5]
        }
        if (n >= 35) {
            return tabela[4]
        }
        if (n >= 30) {
            return tabela[3]
        }
        if (n >= 25) {
            return tabela[2]
        }
        if (n >= 18.5) {
            return tabela[1]
        } else {
            return tabela[0]
        }
    }

    function imc(p, a) {
        const result = p / a ** 2;
        return result.toFixed(2);
    }

    function criarP () {
        const p = document.createElement('p');
        return p;
    }

    function setResultado (msg, isValid) {
        const output = document.querySelector('.output');
        output.innerHTML = '';

        const p = criarP();

        if (isValid) {
            p.classList.add('valido');
        } else {
            p.classList.add('invalido');
        }

        p.innerHTML = msg;
        output.appendChild(p);
    }

    form.addEventListener('submit', formEvent);
}
scope();