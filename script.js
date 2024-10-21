let counter = 0;  

        function updateCounter() {
            document.getElementById('counterValue').textContent = counter;
        }

        function increase() {
            counter++;
            updateCounter();
        }

        function decrease() {
            counter--;
            updateCounter();
        }

        function resetCounter() {
            counter = 0;
            updateCounter();
        }
        