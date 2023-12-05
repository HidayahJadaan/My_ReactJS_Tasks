import { useState } from "react";

const messages = [
  {
    title :"Learn React ⚛️",
    name:"Hidayah"
  },
  {
    title:"Apply for jobs 💼",
    name:"Ahmad",
  },
 {
    title: "Invest your new income 🤑",
    name:"Adam",
 }
];



export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const [name, setName] = useState(messages[0].name)
  

  function handlePreviuos() {
    if (step > 1) 
       {
        setStep(step -1 )
        setName(messages[(step-1) - 1 ].name);

       }
    
  }

  function handleNext() {
    if (step < 3) 
        
       {
        setStep(step + 1);
        setName(messages[(step+1) - 1].name);

       }
    
  }

  return (
    <div>
<button className="close" onClick={()=> setIsOpen(!isOpen)}>&times;</button>

    {
        isOpen && 
       ( <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1].title} 
        {name}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePreviuos}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>)
    
    
    }

    </div>
  );
}
