        const problems = [
            { question: "public classroom HelloWorld {", answer: "public class HelloWorld {}" },
            { question: "public static void main(String args) {", answer: "public static void main(String[] args) {}" },
            { question: "int num _ 10;", answer: "int num = 10;" },
            { question: "What if (num % 2 == 0) {", answer: "if (num % 2 == 0) {}" },
            { question: "System.out.printIn(num + num);", answer: "System.out.println(num + num);" },
        ];

        let currentProblemIndex = 0;
        let timer;
        let timeLeft = 300;
        let wiresCut = 0;
        const totalWires = 5;
        const wireColors = ['purple', 'green', 'yellow', 'red', 'blue'];
        let correctWireColor;

        function startTimer() {
            timer = setInterval(() => {
                timeLeft--;
                document.getElementById("timeLeft").textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    alert("Time's up! You're dead meat.");
                    resetGame();
                }
            }, 1000);
        }

        function displayQuestion() {
            if (currentProblemIndex < problems.length) {
                document.getElementById("questionLabel").textContent = problems[currentProblemIndex].question;
                document.getElementById("userInput").value = "";
                document.getElementById("result").textContent = "";
                generateCodeBoxes();
            } else {
                document.getElementById("questionContainer").style.display = "none";
                document.getElementById("result").textContent = "Congratulations! You've completed all the problems!";
                document.getElementById("retryButton").style.display = "block";
            }
        }

        function generateCodeBoxes() {
            const codeBoxes = document.getElementById("codeBoxes");
            codeBoxes.innerHTML = "";
            const correctAnswer = problems[currentProblemIndex].answer;
            const randomCodes = [correctAnswer, ...getRandomCodes(correctAnswer)];
            randomCodes.sort(() => Math.random() - 0.5);

            randomCodes.forEach(code => {
                const box = document.createElement("div");
                box.className = "codeBox";
                box.textContent = code;
                box.onclick = () => selectCode(code);
                codeBoxes.appendChild(box);
            });
        }

        function getRandomCodes(correctAnswer) {
            const randomCodes = [];
            while (randomCodes.length < 3) {
                const randomCode = problems[Math.floor(Math.random() * problems.length)].answer;
                if (randomCode !== correctAnswer && !randomCodes.includes(randomCode)) {
                    randomCodes.push(randomCode);
                }
            }
            return randomCodes;
        }

        function checkInput() {
            const userInput = document.getElementById("userInput").value.trim();
            const correctAnswer = problems[currentProblemIndex].answer;

            if (userInput.toLowerCase() === correctAnswer.toLowerCase()) {
                document.getElementById("result").textContent = "Correct!";
                document.getElementById("result").style.color = "green";
                alert("Cut the " + wireColors[wiresCut] + " wire!");
                currentProblemIndex++;
                wiresCut++;
                if (wiresCut <= totalWires) {
                    correctWireColor = wireColors[wiresCut - 1];
                    document.getElementById("wiresContainer").children[wiresCut - 1].style.pointerEvents = "auto";
                }
                setTimeout(displayQuestion, 1000);
            } else {
                document.getElementById("result").textContent = "Incorrect! Time deducted.";
                document.getElementById("result").style.color = "red";
                timeLeft -= 20;
            }
        }

        function createWires() {
            const wiresContainer = document.getElementById("wiresContainer");
            wiresContainer.innerHTML = "";
            wireColors.forEach(color => {
                const wire = document.createElement("div");
                wire.className = "wire";
                wire.style.backgroundColor = color;
                wire.style.pointerEvents = "none";
                wire.onclick = () => cutWire(color);
                wiresContainer.appendChild(wire);
            });
        }

        function cutWire(color) {
            if (color === correctWireColor) {
                alert("You cut the correct wire!");
                const wireElements = document.getElementsByClassName("wire");
                for (let i = 0; i < wireElements.length; i++) {
                    if (wireElements[i].style.backgroundColor === color) {
                        wireElements[i].style.backgroundColor = "black";
                        break;
                    }
                }
                wiresCut++;
                if (wiresCut === totalWires) {
                    document.getElementById("detonateButton").style.pointerEvents = "auto";
                    alert("You have to defuse the bomb immediately!");
                }
            } else {
                alert("Wrong wire! Try again.");
            }
        }

        function detonate() {
            if (wiresCut === totalWires) {
                alert("Congratulations! You've successfully diffused the bomb!");
                resetGame();
            } else {
                alert("You need to cut all the wires first!");
            }
        }

        function resetGame() {
            clearInterval(timer);
            timeLeft = 300;
            currentProblemIndex = 0;
            wiresCut = 0;
            document.getElementById("wiresContainer").innerHTML = "";
            document.getElementById("detonateButton").style.pointerEvents = "none";
            document.getElementById("questionContainer").style.display = "block";
            document.getElementById("result").textContent = "";
            document.getElementById("retryButton").style.display = "none";
            createWires();
            displayQuestion();
        }

        function startGame() {
            startTimer();
            document.getElementById("startButton").style.display = "none";
            displayQuestion();
            createWires();
        }

        createWires();

        //bagong upload
        //comment by mandie

        
    
