import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// ====================================


function App() {
  return (
    <div className="card">
      <Avator />
      <Intro />
      <SkillList />
     
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);
// ====================================

function Avator(){
  return (
    
      <img src="./profile2.png" alt="Profile Imge"/>
    
  );
 
}
// ====================================

function Intro(){
  return (
    <div className="IntroText">
      <h1>Hidayah Al-Jadaan</h1>
      <p >Fresh graduate computer engineer from Jordan University of Science and Technology. 
      I am 23 years old, passionate aboute web development, AI, memeory systems and computer architecture.
     <p> Currentyly, I am a full-stack web developer trainee at Optimum Partners.</p>
    </p>
    </div>
  );
}
// ====================================

function SkillList(){

  return(
    <div className="skills-list">
      <Skill skill = "HTML" emoji="🧡" color= "rgba(255, 140, 0,0.2)"/>
      <Skill skill = "CSS" emoji="💙" color= "rgba(32, 178, 170,0.5)"/>
      <Skill skill = "React" emoji="❤️‍🔥" color= "rgba(220, 20, 60,0.5)"/> 
      <Skill skill = "Git& Github" emoji="💚" color= "rgba(144, 238, 144,0.5)"/> 
      <Skill skill = "Flutter" emoji="💜" color= "rgba(147, 112, 219,0.5)"/> 
      <Skill skill = "Python" emoji="🤍" color= "rgba(211, 211, 211,0.5)"/> 


    </div>
  );
}
// ====================================
function Skill(props){
  return(
    <div className="skill" style={{backgroundColor:props.color, borderColor:props.color}}>

<span>{props.skill}</span>
 <span>{props.emoji}</span>

    </div>
  
  );
}