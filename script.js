const container = document.querySelector('.container');
            for (let i = 0; i < 50; i++) {
                const firework = document.createElement('div');
                firework.className = 'firework';
                firework.style.top = Math.random() * 100 + '%';
                firework.style.left = Math.random() * 100 + '%';
                firework.style.animationDelay = Math.random() * 2 + 's';

                // Randomize size
                const size = Math.random() * 15 + 5; // Sizes between 5px and 20px
                firework.style.width = `${size}px`;
                firework.style.height = `${size}px`;

                container.appendChild(firework);
            }