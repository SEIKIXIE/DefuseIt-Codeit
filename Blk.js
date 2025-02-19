<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Code Diffuser Game</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        #result {
            margin-top: 10px;
            font-weight: bold;
        }
        .wire {
            width: 100px;
            height: 20px;
            margin: 5px;
            display: inline-block;
            cursor: pointer;
        }
        #detonateButton {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: red;
            color: white;
            border: none;
            cursor: pointer;
        }
        #timer {
            font-size: 20px;
            color: red;
        }
        .codeBox {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 5px;
            display: inline-block;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <h1>Code Diffuser Game</h1>
    <div id="timer">Time Left: <span id="timeLeft">300</span> seconds</div>
    <div id="questionContainer">
        <label id="questionLabel" for="userInput"></label><br>
        <input type="text" id="userInput" placeholder="Type your answer here..."><br>
        <button onclick="checkInput()">Finished</button>
    </div>

    <div id="result"></div>

    <div id="codeBoxes"></div>
    <div id="wiresContainer"></div>
    <button id="detonateButton" onclick="detonate()">Detonate</button>

    <script>
        const problems = [
            { question: "public classroom HelloWorld {", answer: "public class HelloWorld {}" },
            { question: "public static void main(String args) {", answer: "public static void main(String[] args) {}" },
            { question: "int num _ 10;", answer: "int num = 10;" },
            { question: "What if (num % 2 == 0) {", answer: "if (num % 2 == 0) {}" },
            { question: "System.out.printIn(num + num);", answer: "System.out.println(num + num);" },
            { question: "public void static main(String[] args)", answer: "public static void main(String[] args) {}" },
            { question: "for (int i = 1; f <= 5; i++)", answer: "for (int i = 1; i <= 5; i++)" },
            { question: "public class WhileExampleLoop {}", answer: "public class WhileLoopExample {}" },
            { question: "System.in.println(n);", answer: "System.out.println(n);" },
            { question: "public.static.int.add(int a, int b) {}", answer: "public static int add(int a, int b) {}" },
            { question: "int = #69", answer: "int = 69;" },
            { question: "int result = 8 x 8;", answer: "int result = 8 * 8;" },
            { question: "for (int i = 1; i <= 3; ixx) {}", answer: "for (int i = 1; i <= 3; i++) {}" },
            { question: "empurt java util.Arrays;", answer: "import java.util.Arrays;" },
            { question: "EmployeeManagementSystem system = New employeesanagementSystem(]", answer: "EmployeeManagementSystem system = new EmployeeManagementSystem();" },
        ];

        let currentProblemIndex = 0;
        let timer;
        let timeLeft = 300; // 5 minutes
        let wiresCut = 0;
        const totalWires = 5;
        const wireColors = ['red', 'blue', 'green', 'yellow', 'purple'];
        let correctWireColor;

        function startTimer() {
            timer = setInterval(() => {
                timeLeft--;
                document.getElementById("timeLeft").textContent = timeLeft;
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    alert("Time's up! You lose.");
                    resetGame();
                }
            }, 1000);
        }

        function displayQuestion() {
            if (currentProblemIndex < problems.length) {
                document.getElementById("questionLabel").textContent = problems[currentProblemIndex].question;
                document.getElementById("userInput").value = ""; // Clear previous input
                document.getElementById("result").textContent = ""; // Clear previous result
                generateCodeBoxes();
            } else {
                document.getElementById("questionContainer").style.display = "none"; // Hide question container
                document.getElementById("result").textContent = "Congratulations! You've completed all the problems!";
            }
        }

        function generateCodeBoxes() {
            const codeBoxes = document.getElementById("codeBoxes");
            codeBoxes.innerHTML = ""; // Clear previous boxes
            const correctAnswer = problems[currentProblemIndex].answer;
            const randomCodes = [correctAnswer, ...getRandomCodes(correctAnswer)];
            randomCodes.sort(() => Math.random() - 0.5); // Shuffle codes

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

        function selectCode(selectedCode) {
            const correctAnswer = problems[currentProblemIndex].answer;
            if (selectedCode === correctAnswer) {
                document.getElementById("result").textContent = "Correct!";
                document.getElementById("result").style.color = "green"; // Change text color to green
                currentProblemIndex++; // Move to the next problem
                wiresCut++;
                if (wiresCut <= totalWires) {
                    correctWireColor = wireColors[wiresCut - 1];
                    document.getElementById("wiresContainer").children[wiresCut - 1].style.pointerEvents = "auto"; // Enable next wire
                }
                setTimeout(displayQuestion, 1000); // Display the next question after 1 second
            } else {
                document.getElementById("result").textContent = "Incorrect! Time deducted.";
                document.getElementById("result").style.color = "red"; // Change text color to red
                timeLeft -= 20; // Deduct 20 seconds
            }
        }

        function createWires() {
            const wiresContainer = document.getElementById("wiresContainer");
            wireColors.forEach(color => {
                const wire = document.createElement("div");
                wire.className = "wire";
                wire.style.backgroundColor = color;
                wire.style.pointerEvents = "none"; // Disable clicking initially
                wire.onclick = () => cutWire(color);
                wiresContainer.appendChild(wire);
            });
        }

        function cutWire(color) {
            if (color === correctWireColor) {
                alert("You cut the correct wire!");
                if (wiresCut === totalWires) {
                    document.getElementById("detonateButton").style.backgroundColor = "green"; // Change button color to green
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
            document.getElement