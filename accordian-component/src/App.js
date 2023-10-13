import './index.css'
import {useState} from 'react'

// ============================================
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

// ============================================
export default function App() {
 return(
  <div>
    <Accordian data={faqs}/>
    <Footer />
  </div>
 );
   
}

function Accordian({data}){
return(
 <div className='app'>

<h1>Accordian Component</h1>
<div className="accordion">
    {data.map((item, number)=> <AccordianItem title={item.title} text={item.text} num={number} key={number}/>) }
  </div>

 </div>
);
}


function AccordianItem({num , title, text}){

  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen(){
    setIsOpen(!isOpen)
  }

  return(
    <div className={`item  ${isOpen ? "open" : "" }`} onClick={handleIsOpen}>
     <p className="number">{num < 9 ? `0${num +1}`: num+1}</p>
     <p className="title">{title}</p>
     <p className="icon" onClick={handleIsOpen}>{isOpen ? '-' : '+'}</p>

     
      {isOpen && <div className="content-box">{text}</div>}
     

    </div>
  );
  }
  
  function Footer(){

    return(
      <footer></footer>
    );
  }