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


//Vedere se la Domanda è multipla oppure booleana


function TypeOfAnswer(){
    for(let n=0; n<questions.length; n++){
        /* document.p.appendChild(questions[n].question) */
        if(questions[n].type === "multiple"){
            console.log (n)
            createButton(4);
            let element = {correct_answer: [] ,incorrect_answers: []};
            for(let c=0; c<questions.length; c++){
                for(let i=0; i<4; i++){
                    element[c]= questions[0].correct_answer
                    element[c]= questions[i].incorrect_answers
                }
            }
            console.log(element)
        }
        else if(questions[n].type === "boolean"){
            let p = document.createElement('p');
            let text = document.createTextNode("This is a new paragraph.");
            text.appendChild(p);
            /* document.body.appendChild(p); */
            document.querySelector('p').appendChild(body)
            createButton(2);
        }  
    }
    
}

TypeOfAnswer()


function multipleBottonChoose(){
    let element = [];
    for(let i=1; i<5; i++){
        element[i-1]= document.getElementById ('btnAnswer' + i).addEventListener('click', () => {

        }  )
    }
    console.log(element)
}

//gestisco i dati da inserire nei button
function correctOrNotAnswer(){

}
 
//Per creare i bottoni
function createButton(n){
    for(let i=0; i<n; i++){
        let x = document.createElement ("button");
        x.innerText = 'Prova'
        document.body.appendChild(x)
    } 
}


/*  BottonChoose()

function AnswerText (){
    for(let i=0; i<questions.length; i++){
        element[i]= document.getElementById ('btnAnswer' + i)
    }
} */
