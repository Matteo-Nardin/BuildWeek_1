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

//let element = {correct_answer: [] ,incorrect_answers: []}; sono tutte le risposte vere e false messew in un obj








//-------------------------------------------------------------MINE-----------------------------------------------------------------

//Vedere se la Domanda è multipla oppure booleana

function TypeOfAnswer(){
  let n=0
  while(n<questions.length){
      if(questions[n].type === "multiple"){
        if(n===0){
          ifMultiple(n);
        }
        addEventListener("click", function(){
          ifMultiple(n);
          
        })
        
        //Si dovrebbe fermare ed al click continua
        
      }
      else if(questions[n].type === "boolean"){
        if(n===0){
          ifBoolean(n);
        }
        addEventListener("click", function(){
        ifBoolean(n);
      })
      }
      n++;
  }
}

TypeOfAnswer()


//Se è una domanda Multipla
function ifMultiple(n){

  //Creo la linea di testo per la domanda
  let p = document.createElement('p');
  let text = document.createTextNode(questions[n].question);

  //Appendo il testo
  p.appendChild(text);
  document.body.appendChild(p); 

  //Ho creato una variabile answer che mi contenesse tutti i correct e gli incorrect answer
  let answer = [questions[n].correct_answer, ...questions[n].incorrect_answers];
  console.log (answer);

  //Creo i bottoni per le risposte
  for(let i=0; i<4; i++){           
      let btn = document.createElement ("button");
      btn.id = 'btnAnswer' + i;

      //richiamo la variabile con tutti i correct e gli incorrect e li metto nei bottoni
      btn.innerText = answer[i];
      document.body.appendChild(btn);   
  }
  BottonChoosenext(n)
  
} 

//Se una domanda è vero o falso
function ifBoolean(n){
  //Creo la linea di testo per la domanda
  let p = document.createElement('p');
  let text = document.createTextNode(questions[n].question);

  //Appendo il testo
  p.appendChild(text);
  document.body.appendChild(p);

  //Creo i bottoni per le risposte
  for(let i=0; i<2; i++){       
    if(i===0){
      let btn = document.createElement ("button");
      btn.id = 'btnAnswer' + i;
      btn.innerText = 'True';
      document.body.appendChild(btn); 
    }
    else if(i===1){
      let btn = document.createElement ("button");
      btn.id = 'btnAnswer' + i;
      btn.innerText = 'False';
      document.body.appendChild(btn); 
    }      
  }
  BottonChoosenext(n)
}

//Per creare i bottoni NON UTILIZZATAAAAA---------------------------------------------
function createButton(num){
  for(let i=1; i<=num; i++){
    let btn = document.createElement("button");
    btn.id = 'btnAnswer' + i;
    document.body.appendChild(btn); 
  }
}

//Per fare andare avanti la pagina
function BottonChoosenext(n){
  let element = [];
  let scelta= [];
  console.log(element)
  for(let i=0; i<4; i++){   
    //creo una variabile per prendere tutti i button
    element[i]= document.getElementById ('btnAnswer' + i)
    //creo un event listener ai button
    element[i].addEventListener('click', (e) => {
    //mi scrivo i button id per sapere quali ha cliccato l'utente
    scelta.push(e.target.id)
    console.log(scelta)
    deleteButton(n)
    //come andare avanti
    console.log('Button' + i + 'clicked')
    })
  }
  return scelta
}

function BottonNext(n){

}


function deleteButton(n){
  if(n!==0){
    let btn = [];
    for(let i =0; i<4; i++){
      btn = document.querySelectorAll('btnAnswer' + i)
      }
      delete btn;
    }
}


function casistica(){

} 
