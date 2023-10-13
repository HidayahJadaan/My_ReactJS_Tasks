import "./index.css";
import { useState } from "react";

// ============================================
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

// ============================================
export default function App() {
  return (
    <div>
      <Accordian data={faqs} />
      <Footer />
    </div>
  );
}

function Accordian({ data }) {
  const [currentIsOpen, setCurrIsOpen] = useState(null);

  return (
    <div className="app">
      <h1>Accordian Component</h1>
      <div className="accordion">
        {data.map((item, number) => (
          <AccordianItem
            title={item.title}
            text={item.text}
            num={number}
            key={number}
            curOpen={currentIsOpen}
            onOpen={setCurrIsOpen}
          />
        ))}


<AccordianItem title="Test Item" num={77} key="Tested Item" curOpen = {currentIsOpen} onOpen={setCurrIsOpen}>
<p>Allows React Developrs to:</p>
<ul>
  <li>Break Up UI into Componets</li>
  <li>Make Componets Reusable</li>
  <li>Place Sate Efficiently</li>

  </ul>  
</AccordianItem>
      </div>
    </div>
  );
}

function AccordianItem({ num, title, text, curOpen, onOpen ,children}) {
  const currentOpen = num === curOpen;

  const [isOpen, setIsOpen] = useState(false); // + - symbols

  function handleIsOpen() {
    setIsOpen((isOpen)=> !isOpen)
    onOpen(num);
  }

  return (
    <div
      className={`item  ${currentOpen && isOpen ? "open" : ""}`}
      onClick={handleIsOpen}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon" onClick={handleIsOpen}>
        {currentOpen && isOpen ? "-" : "+"}
      </p>

      {currentOpen && isOpen && <div className="content-box">{text}{children}</div>}
    </div>
  );
}

function Footer() {
  return <footer></footer>;
}
