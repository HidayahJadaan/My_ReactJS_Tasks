import {useState} from 'react'


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

// =====================================
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
// =====================================

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}
// =====================================
function Form() {

    const [description, setDescription ]=useState("");
    const [quantity, setQuantity] = useState(1);

    
  function handleSubmit(e) {
    e.preventDefault();

if(!description) return;

    // console.log(e)
    const newItem = { id:7, description, quantity, packed:false};
    console.log(newItem);
    // initialItems.push(newItem);
    // console.log(initialItems)

    setDescription('')
    setQuantity(1);

  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>

      <select value={quantity} onChange={(e)=> setQuantity(+e.target.value)}>
        {/*  ===== Method#1 ===== */}
        {/* 
<option value={1}>1</option>
<option value={2}>2</option>
<option value={3}>3</option> */}

        {/*  ===== Method#2 ===== */}

        {
          Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option vlaue={num} key={num}>
              {" "}
              {num}{" "}
            </option>
          )) // create an array with 20 length, than map over it to createe 20 options items
        }
      </select>

      <input type="text" placeholder="Item..." value={description} 
      
      onChange={(e)=> setDescription(e.target.value)}/>

      
      <button>Add</button>
    </form>
  );
}
// =====================================

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
// =====================================
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

// =====================================

function Stats() {
  return (
    <footer className="stats">
      <em> 💼 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
