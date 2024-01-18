(function () {


    let startButton = document.querySelector('.start-btn');
    let categorySelect = document.getElementById('category');
    let text1 = document.getElementById('text1');
    let difficultySelect = document.getElementById('difficulty');
    let gameSetup = document.querySelector('.game-setup')
    let textQuestion = document.getElementById('text-question')
    let nextBtn = document.getElementById('next-btn')
    let answerButtons = document.getElementById("answer-btns")
    let menuBtn = document.getElementById('menu')


    let buttonsDisabled = false;
    let questionIndex = 0;
    let started = false;
    let isAnswerButtonClicked = false;

    const questionsEasyAnimals = [
        {
            question: "Which animal is the biggest?",
            answers: [
                { text: "Cat", correct: false },
                { text: "Dog", correct: false },
                { text: "Elephant", correct: true },
                { text: "Lion", correct: false },
            ]
        },
        {
            question: "Which animal is the smallest?",
            answers: [
                { text: "Chicken", correct: false },
                { text: "Rat", correct: false },
                { text: "Mouse", correct: true },
                { text: "Puppy", correct: false },
            ]
        },
        {
            question: "Which animal has stripes on its body?",
            answers: [
                { text: "Cheetah", correct: false },
                { text: "Zebra", correct: true },
                { text: "Giraffe", correct: false },
                { text: "Cow", correct: false },
            ]
        },
        {
            question: "Which animal is a symbol of Australia and is a mammal that can jump?",
            answers: [
                { text: "Kangaroo", correct: true },
                { text: "Koala", correct: false },
                { text: "Wombat", correct: false },
                { text: "Spider", correct: false },
            ]
        },
        {
            question: "What are baby cats called?",
            answers: [
                { text: "Puppies", correct: false },
                { text: "Cubs", correct: false },
                { text: "Chicks", correct: false },
                { text: "Kittens", correct: true },
            ]
        },
    ];

    const questionsEasyHistory = [
        {
            question: "Which ancient civilization built the pyramids?",
            answers: [
                { text: "Roman Empire", correct: false },
                { text: "Greek Empire", correct: false },
                { text: "Egyptian Empire", correct: true },
                { text: "Persian Empire", correct: false },
            ]
        },
        {
            question: "Who was the first President of the United States?",
            answers: [
                { text: "Abraham Lincoln", correct: false },
                { text: "George Washington", correct: true },
                { text: "Thomas Jefferson", correct: false },
                { text: "John F. Kennedy", correct: false },
            ]
        },
        {
            question: "In which year did World War II end?",
            answers: [
                { text: "1945", correct: true },
                { text: "1918", correct: false },
                { text: "1939", correct: false },
                { text: "1955", correct: false },
            ]
        },
        {
            question: "Who discovered America in 1492?",
            answers: [
                { text: "Christopher Columbus", correct: true },
                { text: "Vasco da Gama", correct: false },
                { text: "Ferdinand Magellan", correct: false },
                { text: "Amerigo Vespucci", correct: false },
            ]
        },
        {
            question: "Who was the first king of Poland?",
            answers: [
                { text: "Bolesław Chrobry", correct: true },
                { text: "Jan III Sobieski", correct: false },
                { text: "Władysław Jagiełło", correct: false },
                { text: "Kazimierz Wielki", correct: false },
            ]
        },
    ];

    const questionsEasyFood = [
        {
            question: "What is the main ingredient in guacamole?",
            answers: [
                { text: "Tomatoes", correct: false },
                { text: "Avocado", correct: true },
                { text: "Onions", correct: false },
                { text: "Lettuce", correct: false },
            ]
        },
        {
            question: "What is the sweet substance that bees produce?",
            answers: [
                { text: "Honey", correct: true },
                { text: "Maple Syrup", correct: false },
                { text: "Ketchup", correct: false },
                { text: "Mustard", correct: false },
            ]
        },
        {
            question: "What is the main ingredient in chocolate?",
            answers: [
                { text: "Sugar", correct: false },
                { text: "Cocoa", correct: true },
                { text: "Butter", correct: false },
                { text: "Flour", correct: false },
            ]
        },
        {
            question: "Which fruit is yellow and often peeled before eating?",
            answers: [
                { text: "Banana", correct: true },
                { text: "Watermelon", correct: false },
                { text: "Grapes", correct: false },
                { text: "Kiwi", correct: false },
            ]
        },
        {
            question: "What is traditional food in Poland?",
            answers: [
                { text: "Pierogi", correct: true },
                { text: "Chicken", correct: false },
                { text: "Sandwiches", correct: false },
                { text: "Ketchup", correct: false },
            ]
        },
    ];

    const questionsEasySport = [
        {
            question: "Which Olympic sport involves a bow, arrows, and a target?",
            answers: [
                { text: "Archery", correct: true },
                { text: "Javelin throw", correct: false },
                { text: "Fencing", correct: false },
                { text: "Shot put", correct: false },
            ]
        },
        {
            question: "In which sport do players try to score goals by hitting a ball into the opposing team's net with a stick?",
            answers: [
                { text: "Golf", correct: false },
                { text: "Baseball", correct: false },
                { text: "Hockey", correct: true },
                { text: "Football", correct: false },
            ]
        },
        {
            question: "In which sport do teams try to score points by throwing a ball through the opposing team's hoop?",
            answers: [
                { text: "Football", correct: false },
                { text: "Baseball", correct: false },
                { text: "Basketball", correct: true },
                { text: "Hockey", correct: false },
            ]
        },
        {
            question: "What is the name of the sport where participants slide down a snow-covered hill with skis on their feet?",
            answers: [
                { text: "Skateboarding", correct: false },
                { text: "Ice skating", correct: false },
                { text: "Surfing", correct: false },
                { text: "Skiing", correct: true },
            ]
        },
        {
            question: "In which sport do teams pull against each other at the opposite ends of a rope?",
            answers: [
                { text: "Tug of war", correct: true },
                { text: "Wrestling", correct: false },
                { text: "Judo", correct: false },
                { text: "Karate", correct: false },
            ]
        },
    ];

    const questionsMediumAnimals = [
        {
            question: "What is the only continent where giraffes live in the wild?",
            answers: [
                { text: "Africa", correct: true },
                { text: "Asia", correct: false },
                { text: "North America", correct: false },
                { text: "South America", correct: false },
            ]
        },
        {
            question: "Which venomous snake is known for its hood?",
            answers: [
                { text: "Cobra", correct: true },
                { text: "Python", correct: false },
                { text: "Boa Constrictor", correct: false },
                { text: "Rattlesnake", correct: false },
            ]
        },
        {
            question: "Which mammal can fly?",
            answers: [
                { text: "Bat", correct: true },
                { text: "Bird", correct: false },
                { text: "Butterfly", correct: false },
                { text: "Bee", correct: false },
            ]
        },
        {
            question: "Which species of monkey is known for its colorful face and rear end?",
            answers: [
                { text: "Baboon", correct: false },
                { text: "Mandrill", correct: true },
                { text: "Capuchin", correct: false },
                { text: "Gorilla", correct: false },
            ]
        },
        {
            question: "What is the largest big cat in the world?",
            answers: [
                { text: "Lion", correct: false },
                { text: "Leopard", correct: false },
                { text: "Jaguar", correct: false },
                { text: "Tiger", correct: true },
            ]
        },
    ];

    const questionsMediumHistory = [
        {
            question: "In what year did the Berlin Wall fall, symbolizing the end of the Cold War?",
            answers: [
                { text: "1989", correct: true },
                { text: "1991", correct: false },
                { text: "1975", correct: false },
                { text: "1995", correct: false },
            ]
        },
        {
            question: "What ancient civilization built the city of Machu Picchu?",
            answers: [
                { text: "Maya", correct: false },
                { text: "Aztec", correct: false },
                { text: "Inca", correct: true },
                { text: "Roman", correct: false },
            ]
        },
        {
            question: "What famous event happened on July 20, 1969?",
            answers: [
                { text: "Assassination of John F. Kennedy", correct: false },
                { text: "Moon landing", correct: true },
                { text: "End of World War II", correct: false },
                { text: "Fall of the Berlin Wall", correct: false },
            ]
        },
        {
            question: "Who was the queen of ancient Egypt known for her relationships with Julius Caesar and Mark Antony?",
            answers: [
                { text: "Cleopatra", correct: true },
                { text: "Nefertiti", correct: false },
                { text: "Hatshepsut", correct: false },
                { text: "Isis", correct: false },
            ]
        },
        {
            question: "When was the baptism of Poland?",
            answers: [
                { text: "966 AD", correct: true },
                { text: "996 AD", correct: false },
                { text: "969 AD", correct: false },
                { text: "999 AD", correct: false },
            ]
        },
    ];

    const questionsMediumFood = [
        {
            question: "What is the traditional bread used for making bruschetta?",
            answers: [
                { text: "Ciabatta", correct: true },
                { text: "Baguette", correct: false },
                { text: "Pita", correct: false },
                { text: "Sourdough", correct: false },
            ]
        },
        {
            question: "In which country did the sandwich originate?",
            answers: [
                { text: "Italy", correct: false },
                { text: "France", correct: false },
                { text: "England", correct: true },
                { text: "United States", correct: false },
            ]
        },
        {
            question: "What is the main ingredient in the Japanese dish tempura?",
            answers: [
                { text: "Rice", correct: false },
                { text: "Seaweed", correct: false },
                { text: "Batter-fried seafood or vegetables", correct: true },
                { text: "Soy sauce", correct: false },
            ]
        },
        {
            question: "Which spice gives traditional Indian curry its yellow color?",
            answers: [
                { text: "Cumin", correct: false },
                { text: "Coriander", correct: false },
                { text: "Turmeric", correct: true },
                { text: "Paprika", correct: false },
            ]
        },
        {
            question: "What is the main ingredient in traditional Greek moussaka?",
            answers: [
                { text: "Eggplant", correct: true },
                { text: "Tomato", correct: false },
                { text: "Beef", correct: false },
                { text: "Potato", correct: false },
            ]
        },
    ];

    const questionsMediumSport = [
        {
            question: "Which country won the FIFA World Cup in 2018?",
            answers: [
                { text: "Germany", correct: false },
                { text: "Brazil", correct: false },
                { text: "France", correct: true },
                { text: "Argentina", correct: false },
            ]
        },
        {
            question: "Who is often called 'The Greatest' in the history of boxing?",
            answers: [
                { text: "Mike Tyson", correct: false },
                { text: "Muhammad Ali", correct: true },
                { text: "Floyd Mayweather", correct: false },
                { text: "Manny Pacquiao", correct: false },
            ]
        },
        {
            question: "Which city hosted the 2016 Summer Olympics?",
            answers: [
                { text: "Beijing", correct: false },
                { text: "Rio de Janeiro", correct: true },
                { text: "London", correct: false },
                { text: "Tokyo", correct: false },
            ]
        },
        {
            question: "In which sport would you perform a triple axel?",
            answers: [
                { text: "Figure Skating", correct: true },
                { text: "Ski Jumping", correct: false },
                { text: "Snowboarding", correct: false },
                { text: "Gymnastics", correct: false },
            ]
        },
        {
            question: "What is the highest possible score in a single game of bowling?",
            answers: [
                { text: "200", correct: false },
                { text: "250", correct: false },
                { text: "300", correct: true },
                { text: "350", correct: false },
            ]
        },
    ];

    const questionsHardAnimals = [
        {
            question: "Which species of jellyfish is considered the most venomous marine animal?",
            answers: [
                { text: "Lion's Mane Jellyfish", correct: false },
                { text: "Sea Wasp Box Jellyfish", correct: true },
                { text: "Moon Jellyfish", correct: false },
                { text: "Portuguese Man-of-War", correct: false },
            ]
        },
        {
            question: "What is the largest living species of lizard?",
            answers: [
                { text: "Gecko", correct: false },
                { text: "Komodo Dragon", correct: true },
                { text: "Iguana", correct: false },
                { text: "Monitor Lizard", correct: false },
            ]
        },
        {
            question: "Which bird is known for having the largest wingspan?",
            answers: [
                { text: "Eagle", correct: false },
                { text: "Albatross", correct: true },
                { text: "Falcon", correct: false },
                { text: "Hawk", correct: false },
            ]
        },
        {
            question: "What is the largest living primate?",
            answers: [
                { text: "Gorilla", correct: false },
                { text: "Orangutan", correct: false },
                { text: "Chimpanzee", correct: false },
                { text: "Eastern Gorilla", correct: true },
            ]
        },
        {
            question: "Which species of octopus is known for its exceptional intelligence and problem-solving abilities?",
            answers: [
                { text: "Giant Pacific Octopus", correct: false },
                { text: "Common Octopus", correct: false },
                { text: "Blue-Ringed Octopus", correct: false },
                { text: "Veined Octopus", correct: true },
            ]
        },
    ];

    const questionsHardHistory = [
        {
            question: "Which battle, fought in 331 BCE, saw Alexander the Great defeat Persian King Darius III?",
            answers: [
                { text: "Battle of Marathon", correct: false },
                { text: "Battle of Gaugamela", correct: true },
                { text: "Battle of Cannae", correct: false },
                { text: "Battle of Thermopylae", correct: false },
            ]
        },
        {
            question: "During which war did the Battle of Gettysburg take place?",
            answers: [
                { text: "American Revolutionary War", correct: false },
                { text: "Civil War", correct: true },
                { text: "World War I", correct: false },
                { text: "Napoleonic Wars", correct: false },
            ]
        },
        {
            question: "Who was the first emperor of China, known for the construction of the Great Wall?",
            answers: [
                { text: "Kublai Khan", correct: false },
                { text: "Sun Yat-sen", correct: false },
                { text: "Qin Shi Huang", correct: true },
                { text: "Mao Zedong", correct: false },
            ]
        },
        {
            question: "In which year did the Black Death (Bubonic Plague) reach Europe?",
            answers: [
                { text: "1347", correct: true },
                { text: "1492", correct: false },
                { text: "1420", correct: false },
                { text: "1666", correct: false },
            ]
        },
        {
            question: "Who was the first woman to win a Nobel Prize, being awarded the Nobel Prize in Physics in 1903?",
            answers: [
                { text: "Marie Curie", correct: true },
                { text: "Rosalind Franklin", correct: false },
                { text: "Ada Lovelace", correct: false },
                { text: "Jane Goodall", correct: false },
            ]
        },
    ];


    const questionsHardFood = [
        {
            question: "What is the name of the French dish made from thinly sliced raw meat or fish?",
            answers: [
                { text: "Sushi", correct: false },
                { text: "Tartare", correct: true },
                { text: "Ceviche", correct: false },
                { text: "Carpaccio", correct: false },
            ]
        },
        {
            question: "Which type of pasta is shaped like small rice grains and is often used in soups?",
            answers: [
                { text: "Orzo", correct: true },
                { text: "Farfalle", correct: false },
                { text: "Cavatappi", correct: false },
                { text: "Penne", correct: false },
            ]
        },
        {
            question: "What is the main ingredient in the traditional Korean dish kimchi?",
            answers: [
                { text: "Cabbage", correct: true },
                { text: "Tofu", correct: false },
                { text: "Seaweed", correct: false },
                { text: "Rice", correct: false },
            ]
        },
        {
            question: "Which spice is made from the dried stigma of a flower and is one of the most expensive spices by weight?",
            answers: [
                { text: "Cumin", correct: false },
                { text: "Saffron", correct: true },
                { text: "Turmeric", correct: false },
                { text: "Cardamom", correct: false },
            ]
        },
        {
            question: "What is the name of the Italian dish consisting of thinly sliced raw meat or fish, typically served as an appetizer?",
            answers: [
                { text: "Antipasto", correct: false },
                { text: "Bruschetta", correct: false },
                { text: "Carpaccio", correct: true },
                { text: "Caprese", correct: false },
            ]
        },
    ];


    const questionsHardSport = [
        {
            question: "Which country won the most gold medals in the 2016 Summer Olympics?",
            answers: [
                { text: "United States", correct: true },
                { text: "China", correct: false },
                { text: "Russia", correct: false },
                { text: "Great Britain", correct: false },
            ]
        },
        {
            question: "Who holds the record for the most goals scored in FIFA World Cup history?",
            answers: [
                { text: "Lionel Messi", correct: false },
                { text: "Pele", correct: false },
                { text: "Cristiano Ronaldo", correct: false },
                { text: "Miroslav Klose", correct: true },
            ]
        },
        {
            question: "In which year did Michael Jordan win his first NBA Championship with the Chicago Bulls?",
            answers: [
                { text: "1989", correct: false },
                { text: "1991", correct: true },
                { text: "1995", correct: false },
                { text: "1998", correct: false },
            ]
        },
        {
            question: "Which tennis player holds the record for the most Grand Slam singles titles?",
            answers: [
                { text: "Serena Williams", correct: false },
                { text: "Roger Federer", correct: false },
                { text: "Rafael Nadal", correct: false },
                { text: "Margaret Court", correct: true },
            ]
        },
        {
            question: "In what year did the first modern Olympic Games take place?",
            answers: [
                { text: "1886", correct: false },
                { text: "1896", correct: true },
                { text: "1904", correct: false },
                { text: "1920", correct: false },
            ]
        },
    ];



    const questions = {
        Animals: {
            'Beginner explorer': questionsEasyAnimals,
            'Wildlife enthusiast': questionsMediumAnimals,
            'Animal kingdom master': questionsHardAnimals
        },
        Food: {
            'Tasty bites': questionsEasyFood,
            'Culinary explorer': questionsMediumFood,
            'Cook chef': questionsHardFood
        },
        History: {
            'History novice': questionsEasyHistory,
            'Time traveler apprentice': questionsMediumHistory,
            'Historian extraordinare': questionsHardHistory,
        },
        Sport: {
            'Sport enthusiast': questionsEasySport,
            'Athlete': questionsMediumSport,
            'Pro player': questionsHardSport
        }

    }


    function getPlaceholderOption() {
        const optiontag = document.createElement("option")
        optiontag.textContent = "-Please select a difficulty-";
        optiontag.value = ''

        return optiontag
    }

    function onCategorySelectHandle(e) {
        console.log(e)
        const category = e.target.value;
        // console.log(category)
        const selectedCategory = questions[category]
        // console.log(selectedCategory)

        difficulty.innerHTML = '' //difficulty - id in html
        difficulty.appendChild(getPlaceholderOption())

        Object.entries(selectedCategory).forEach(([level]) => {

            const optiontag = document.createElement("option")
            optiontag.textContent = level;
            optiontag.value = level

            difficulty.appendChild(optiontag)
            /// kod, ktory generuje nam tagi <option> dla poziomu trudnosci
        })

    }


    startButton.addEventListener('click', function () {

        if (difficultySelect.value === "" || categorySelect.value === "") {
            alert("Please select options below")
        } else {
            text1.style.display = 'none';
            gameSetup.style.display = "none";
            answerButtons.style.display = "block";
            nextBtn.style.display = "block";
            textQuestion.style.display = "block";
            started = true;
            questionIndex = 0;
            displayQuestion()

        }



    });

    difficultySelect.addEventListener('change', displayQuestion);
    categorySelect.addEventListener('change', onCategorySelectHandle);

    function displayQuestion() {
        
        isAnswerButtonClicked=false;
        answerButtons.innerHTML = ""
        if (!started) {    //ustawiona flaga, żeby nie wyswietlalo pytan bez nacisniecia przycisku start
            return;
        }
        else {

            const category = categorySelect.value;
            const difficulty = difficultySelect.value;
            let currentQuestions = questions[category][difficulty]

            const currentQuestion = currentQuestions[questionIndex]

            // Dodaj styl do elementu #text-question
            textQuestion.textContent = ''; // Wyczyść tekst przed animacją

            // Ustawienie animacji typowania

            let index = 0;
            const typingInterval = setInterval(function () {

                textQuestion.textContent += currentQuestion.question[index];

                index++;
                if (index === currentQuestion.question.length) {
                    clearInterval(typingInterval); // Zatrzymaj animację po napisaniu całego tekstu
                }
            }, 20); // Czas w milisekundach między kolejnymi znakami


            // const button = document.createElement('button') // znacznik w html
            // const text = document.createTextNode('This is button')
            // button.appendChild(text);
            // answerButtons.appendChild(button);
            // button.classList.add('btn');
            currentQuestion.answers.forEach(el => {
                const button = document.createElement('button') // znacznik w html
                const text = document.createTextNode(el.text)
                button.appendChild(text)
                answerButtons.appendChild(button);
                button.classList.add('btn');
                button.addEventListener('click', function () {
                    isAnswerButtonClicked=true;
                    if (!buttonsDisabled) {
                        if (el.correct === true) {
                            button.style.backgroundColor = 'green';
                            buttonsDisabled = true;
                        } else {
                            button.style.backgroundColor = 'red';
                            buttonsDisabled = true;
                            currentQuestion.answers.forEach((answer, answerIndex) => {
                                if (answer.correct) {
                                    const correctButton = answerButtons.children[answerIndex];
                                    correctButton.style.backgroundColor = 'green';
                                }
                            });

                        }

                    }
                })
            })

        }
    }

    


    nextBtn.addEventListener('click', function () {

        if (isAnswerButtonClicked == true) {
            
            questionIndex++;

            const selectedCategory = categorySelect.value;
            const selectedDifficulty = difficultySelect.value;

            const selectedQuestions = questions[selectedCategory][selectedDifficulty];

            if (questionIndex < selectedQuestions.length) {
                answerButtons.innerHTML = ''; //czysci przyciski przed wyswietleniem nowego pytania
                buttonsDisabled = false;
                displayQuestion();
            } else {
                // Wyświetl wyniki, zakończ grę
                alert("No more questions!");
                menuBtn.style.display = "block";
                menuBtn.addEventListener('click', function () {


                    categorySelect.value = "";
                    difficultySelect.value = "";
                    answerButtons.style.display = "none"
                    menuBtn.style.display = 'none';
                    nextBtn.style.display = 'none';
                    textQuestion.style.display = 'none';
                    text1.style.display = 'block';
                    gameSetup.style.display = 'block';
                    buttonsDisabled = false;
                    started = false;
                    displayQuestion();

                }
                )


            }
        }   else{
            alert("Please choose an answer")
        }




    });


})();