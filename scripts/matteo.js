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
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];
  
let score = 0;
let questionNumber = 0; // indice domanda questionNumber>question.length
let bt = document.querySelector(".btn");
let asBox= document.querySelector("#answerBox");

//appena carico la pagina
let quest = document.querySelector(".domanda");
quest.innerText = questions[questionNumber].question;

TypeOfAnswer(questionNumber);
questionNumber++ // faccio partire da 1

let btn = document.querySelectorAll("button");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click",next);
}
console.log(btn[1].innerText)

// let handler = () => 


function next() {
        // rimuove i bottoni
        let rBtn = document.querySelectorAll("#answerBox > button");
        // console.log(rBtn);
        for(let i = 0; i<rBtn.length; i++){
          rBtn[i].remove()
        }

        // genero la domanda
        quest.innerText = questions[questionNumber].question;
        // genero i bottoni con il testo corretto
        TypeOfAnswer(questionNumber);
        //seleziono i bottoni creati e attacco la funzione stessa in modo che vada all'infinito
        let btn = document.querySelectorAll("button");
        for (let i = 0; i < btn.length; i++) {
          btn[i].addEventListener("click",next);
        }
        console.log(btn)

        questionNumber++;
        // in questo if richiamo "automaticamente" il cambio di pagina una volta cliccata l'ultimo bottone
        if(questionNumber === questions.length ){
          for (let i = 0; i < btn.length; i++) {
            btn[i].addEventListener("click", ()=> {location.href = "../cielo.html"});
          }
        }
        //aggiungere il riconoscimento vero o falso
}

//----------------------------------------PIERPAOLO--------------------------------------------------------

function TypeOfAnswer(n){
  // for(let n=0; n<questions.length; n++){
    /* document.p.appendChild(questions[n].question) */
    
    //-----per le domande multiple----------------
    // riempio l'array delle risposte sbagliate
    let arr = [...questions[n].incorrect_answers];
    // mi genero un valore casuale da poter utilizzare per inserire la risposta vera
    let rand = Math.floor(Math.random() * questions[n].incorrect_answers.length);
    arr.splice(rand, 0 , questions[n].correct_answer);
    console.log(arr)
    // arr da usare per riempire il contenuto dei bottoni
    //--------------------------------------------
    if(questions[n].type === "multiple"){

        for(let c=0; c<arr.length; c++){
          let x = document.createElement ("button");
          x.innerText = arr[c]
          asBox.appendChild(x)
        }
    }else{
        for(let c=0; c<arr.length; c++){
          let x = document.createElement ("button");
          x.innerText = arr[c]
          asBox.appendChild(x)
        }
    } 
  // }
  
}

function myFunction(e) { 
  let text = e.target.innerText;

  if(text === questions.correct_answer){
    score += 1;
  }

}
//Per creare i bottoni
function createButton(n){
  for(let i=0; i<n; i++){
      let x = document.createElement ("button");
      // x.innerText = questions[i].correct_answer
      //  x.innerText = 'Prova'
      document.body.appendChild(x)
  } 
}
//-----------------------------------------------------------------------------------------------------------------------------
window.onload = function () {
  // TIPS:

  // SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
  // Per ogni domanda, crea un container e incorporale tutte all'interno. 
  // Crea poi dei radio button
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
  // con le risposte corrette e incorrette come opzioni
  // (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale) 
  //
  // SE MOSTRI UNA DOMANDA ALLA VOLTA:
  // Mostra la prima domanda con il testo e i radio button.
  // Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
  // salvando le risposte dell'utente in una variabile
};

  // Come calcolare il risultato? Hai due strade:
  // Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
  // Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

  // BUON LAVORO 💪🚀

  // declare the function 
// const shuffle = (array: string[]) => { 
//   for (let i = array.length - 1; i > 0; i--) { 
//     const j = Math.floor(Math.random() * (i + 1)); 
//     [array[i], array[j]] = [array[j], array[i]]; 
//   } 
//   return array; 
// }; 
  
// // Usage 
// const myArray = ["apple", "banana", "cherry", "date", "elderberry"]; 
// const shuffledArray = shuffle(myArray); 

// console.log(shuffledArray); 