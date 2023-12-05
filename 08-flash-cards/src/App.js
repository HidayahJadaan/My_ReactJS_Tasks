import {useState} from 'react'


const questions=[
  {
    id:3457,
    question:"What Languages Is Ract Based On?",
    answer:"Javascript"
  },
  {
    id:7336,
    question:"What Are The Building Blocks Of React Apps?",
    answer:"Components"
  },
  {
    id:8832,
    question:"What's The Name Of The Syntax We Use To Describe a UI in React?",
    answer:"JSX"
  },
  {
    id:1297,
    question:"How To Pass Data From Parent To Child Components?",
    answer:"Props"
  },
  {
    id:9103,
    question:"How To Give Components Memory?",
    answer:"useState Hook"
  },
  {
    id:2002,
    question:"What Do We Call An Input Elemnt That Is Completely Synchronized With State?",
    answer:"Contolled Component"
  },
]

export default function App() {
 
 return(
  <FlashCards />

 );
}

function FlashCards(){

  const [selectdID, setSelectdID] = useState(null);

function handleClick(id){
  setSelectdID(id !== selectdID ? id : null );
}
 
  return(

    <div>

<h1>Flash Cards</h1>
    <div className="flashcards">
     
      {questions.map((Question)=> <div 
      key={Question.id} 
      onClick={()=> handleClick(Question.id) }
      className={Question.id === selectdID ? "selected" : ""}>

        <p>
          
          {Question.id === selectdID ? Question.answer: Question.question}
        
        </p>
      </div>)}
    </div>
    
    </div>
  );
}
