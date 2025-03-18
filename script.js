const text = "Hello, Wired!, My name is Filipe!";
        const speed = 150; // Velocidade da digitação
        let index = 0;
        let isDeleting = false;

        function typeEffect() {
            const element = document.getElementById("typing");

            if (!isDeleting) {
                element.textContent = text.slice(0, index++);
                if (index > text.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, 1000); // Pausa antes de apagar
                    return;
                }
            } else {
                element.textContent = text.slice(0, index--);
                if (index < 0) {
                    isDeleting = false;
                    index = 0;
                }
            }

            setTimeout(typeEffect, isDeleting ? speed / 2 : speed);
        }

        typeEffect();