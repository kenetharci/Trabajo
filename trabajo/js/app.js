'use script'

const numbers = [];
        const numberInput = document.getElementById('numberInput');
        const addButton = document.getElementById('addButton');
        const resultParagraph = document.getElementById('result');

        addButton.addEventListener('click', () => {
            const enteredNumber = parseInt(numberInput.value);
            if (!isNaN(enteredNumber)) {
                numbers.push(enteredNumber);
                numberInput.value = '';
            }
        });

        setInterval(() => {
            if (numbers.length > 0) {
                const maxNumber = Math.max(...numbers);
                const minNumber = Math.min(...numbers);

                resultParagraph.innerHTML = `Número Mayor: ${maxNumber}<br>Número Menor: ${minNumber}`;
            }
        }, 1000); // Actualiza cada segundo