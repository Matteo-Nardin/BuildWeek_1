


const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let score = 0;
let domandeCorette=[];
let domandeSbagliate =[];
let domande=[];
let numDomande = 5;
let c=0; //contatore delle domande da mostrare e rispondere
let difficoltaScelta = 'easy'; // impostato da solo ma poi deve essere chiesto dall'utente
for (i=0; i  <numDomande ; i++) {
    domande.push(questions[i]); //raccolgo subito gli oggetti nell'array delle domande che hanno la difficolta scelta dall'utente
}
console.log(domande);
document.querySelector('.totale_pagina').innerText ='/ '+ domande.length; //Mostro il numero totale di domande

/*
requestAnimationFrame(updateTimer);
    //cancello i buttoni creati precedentemente
    document.querySelectorAll('.answers form button').forEach( btn => btn.remove());

    //mostro la nuova domanda e aggiorno il numero della domanda
    document.querySelector('h1').innerText = domande[c].question;
    document.querySelector('.numero_pagina').innerText = c+1;

    //creo nuovi buttoni in base al numeri di risposte presenti
    for (let i = 0; i < domande[c].incorrect_answers.length + 1; i++) {
        let bottone = document.createElement('button');
        bottone.type = 'button';
        document.querySelector('form').appendChild(bottone);
    }                              

    // Inserisco in uno dei bottone generati random la risposta giusta
    let correct_answerBtn = document.querySelectorAll('.answers form button')[Math.floor(Math.random()*domande[c].incorrect_answers.length)];
    correct_answerBtn.innerText =domande[c].correct_answer;


    let d=0; // contatore delle incorrect_answers

    //Ciclo i buttoni creati
    document.querySelectorAll('.answers form button').forEach(btn => {
        //Mostro le risposte false
        if (btn.innerText != correct_answerBtn.innerText) {
            btn.innerText = domande[c].incorrect_answers[d];
            d++;
        }
    })
    //Ciclo i bottoni per attaccare un ascoltatore ad ogni bottone
    document.querySelectorAll('.answers form button').forEach(btn => {
      let tally=0;
        btn.addEventListener('click', () => {
            //controllo se il buttone quando cliccato corrisponde alla domanda giusta...
            if (btn.innerText == domande[c].correct_answer) {
                //Gli do una classname per mostrare il bottone verde
                btn.className= 'correct';
                //Aumento il score
                console.log(tally++);
                //memorizzo la domanda 
                domandeCorette.push[btn.innerText];
                //se bottone cliccato è falso...
            } else {
                //Gli do una classname per mostrare il bottone rosso
                btn.className = 'false';
                //inoltre ciclo i bottoni per mostrare la risposta vera
                domandeSbagliate.push[btn.innerText];
                document.querySelectorAll('.answers form button').forEach(btn => {
                    if(btn.innerText== domande[c].correct_answer){
                        btn.className = 'correct';
                    }
                })
            }
            //Creo un nuovo bottone per andare alla domanda succesiva
            let nextQuestion = document.createElement('button');
            //faccio un controllo all'ultima domanda per andare alla pagina successiva
            if((c+1 == domande.length)) {
                nextQuestion.innerText='Go to results';
                //codice per andare alla pagina dei risultati
                nextQuestion.addEventListener('click', () => window.location.href = "../cielo.html");
            }else {
                nextQuestion.innerText='Next Question';
            }
            nextQuestion.className ='nextQuestion';
            //Appendo bottone
            document.querySelector('form').appendChild(nextQuestion);
            nextQuestion.addEventListener('click', nextpage);
            //Aumento il contatore 
            c++;
        })
    })
    score+=tally;
*/


function nextpage() {
  requestAnimationFrame(updateTimer);
  //cancello i buttoni creati precedentemente
  document.querySelectorAll('.answers form button').forEach( btn => btn.remove());

  //mostro la nuova domanda e aggiorno il numero della domanda
  document.querySelector('h1').innerText = domande[c].question;
  document.querySelector('.numero_pagina').innerText = c+1;

  //creo nuovi buttoni in base al numeri di risposte presenti
  for (let i = 0; i < domande[c].incorrect_answers.length + 1; i++) {
      let bottone = document.createElement('button');
      bottone.type = 'button';
      document.querySelector('form').appendChild(bottone);
  }                              

  // Inserisco  in uno dei bottone a caso generati la risposta giusta
  let correct_answerBtn = document.querySelectorAll('.answers form button')[Math.floor(Math.random()*domande[c].incorrect_answers.length)];
  correct_answerBtn.innerText =domande[c].correct_answer;


  let d=0; // contatore delle risposte non essate
  document.querySelectorAll('.answers form button').forEach(btn => {
    //Mostro le risposte false
    if (btn.innerText != correct_answerBtn.innerText) {
        btn.innerText = domande[c].incorrect_answers[d];
        d++;
    }
  })

  //Ciclo i buttoni creati
  let i=1;
  let tally;
  document.querySelectorAll('.answers form button').forEach(btn => {
    btn.addEventListener('click', () => {
      if(i>0) { //controllo if per rendere cliccabile una sola volta i bottoni;
        i--;
        createNextQuestionButton();
        scoreCheck(btn);
        //Aumento il contatore
        c++;
        return tally;
      }
      return tally;
    });
    return tally;
  })
  return score+=tally;
}

console.log(score);



function createNextQuestionButton() {
  //Creo un nuovo bottone per andare alla domanda succesiva
  let nextQuestion = document.createElement('button');
  //faccio un controllo all'ultima domanda per andare alla pagina successiva
  if((c+1 == domande.length)) {
      nextQuestion.innerText='Go to results';
      //codice per andare alla pagina dei risultati
      nextQuestion.addEventListener('click', () => window.location.href = "../cielo.html");
  }else {
      nextQuestion.innerText='Next Question';
  }
  nextQuestion.className ='nextQuestion';
  //Appendo bottone
  document.querySelector('form').appendChild(nextQuestion);
  nextQuestion.addEventListener('click',nextpage);
}

function scoreCheck(btn, tally) {
  //controllo se il buttone quando cliccato corrisponde alla domanda giusta...
  if (btn.innerText == domande[c].correct_answer) {
    //Gli do una classname per mostrare il bottone verde
    btn.className= 'correct';
    //memorizzo la domanda 
    domandeCorette.push[btn.innerText];
    //Aumento lo score
    return tally +=1;
    //se bottone cliccato è falso...
  } else {
    //Gli do una classname per mostrare il bottone rosso
    btn.className = 'false';
    //inoltre ciclo i bottoni per mostrare la risposta vera
    domandeSbagliate.push[btn.innerText];
    document.querySelectorAll('.answers form button').forEach(btn => {
        if(btn.innerText== domande[c].correct_answer){
            btn.className = 'correct';
        }
    });
  }
}


let startTime = performance.now();
let timeleft = 60;
let circle = document.querySelector('.circle circle');
let circumference = parseInt(circle.getAttribute('stroke-dasharray'));
let timerElement = document.getElementById("timer");

function updateTimer() {
    let currentTime = performance.now();
    let elapsedTime = (currentTime - startTime) / 1000; 

    let remainingTime = timeleft - elapsedTime;
    if (remainingTime <= 0) {
        remainingTime = 0;
    }

    let newProgress = 1 - (remainingTime / timeleft); 
    circle.style.strokeDashoffset = circumference * newProgress;

    if (newProgress >= 0.5) {
        circle.style.stroke = '#ffa500'; 
    }
    if (newProgress >= 0.75) {
        circle.style.stroke = '#ff0000'; 
    }

    timerElement.innerHTML = Math.floor(remainingTime); 

    if (remainingTime > 0) {
        requestAnimationFrame(updateTimer);
    }
}



