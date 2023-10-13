import { useState } from "react";

const initialItems = [
  { id: 1, description: " Passports", quantity: 2, packed: false },
  { id: 2, description: " Socks", quantity: 12, packed: false },
  { id: 3, description: " Charger", quantity: 21, packed: false },
  { id: 4, description: " Laptop", quantity: 12, packed: false },
  { id: 5, description: " Computer", quantity: 10, packed: false },
  { id: 6, description: " Headphones", quantity: 7, packed: false },
];

// =====================================
export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {

    const confirmed = window.confirm("Are You Sure You Want To Delete All Items?");
    if(confirmed)
    setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items}/>
    </div>
  );
}
// =====================================

function Logo() {
  return <h1>🏝️ Far Away 🧳</h1>;
}
// =====================================
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    // console.log(e)
    const newItem = { id: Date.now(), description, quantity, packed: false };
    // console.log(newItem);
    // initialItems.push(newItem);
    // console.log(initialItems)

    setDescription("");
    setQuantity(1);
    onAddItems(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip? </h3>

      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
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

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
}
// =====================================

function PackingList({ items, onDeleteItem, onToggleItem ,onClearList}) {

const [sortBy, setSortBy] =useState("input");

let sortedItems;

if(sortBy === 'input')  sortedItems= items;
if(sortBy === 'description')  sortedItems= items.slice().sort((a, b) => a.description.localeCompare(b.description));
if(sortBy === 'packed') sortedItems= items.slice().sort((a, b) => Number(a.packed) - Number(b.packed))
if(sortBy === 'Quantity') sortedItems= items.slice().sort((a, b) => Number(a.quantity) - Number(b.quantity))


  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>


<div className="actions">
<select value={sortBy} onChange={e=> setSortBy(e.target.value)}>

<option value='input'>Sort by input order</option>
<option value='description'>Sort by description</option>
<option value='Quantity'>Sort by Quantity</option>
<option value='packed'>Sort by packed status</option>

</select>

<button onClick={onClearList}>Clear List</button>
</div>


    </div>
  );
}
// =====================================
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => {
          onToggleItem(item.id);
        }}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span className="quantity"> {item.quantity}</span>
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

// =====================================

function Stats({items}) {

if(!items.length)
return(
<em className="stats">Start Adding New Items In Your Packing List ✈️</em>
);
const numItems = items.length;
const numofPacked = items.filter((item)=> item.packed).length;
const percentage =Math.round( (numofPacked/numItems) * 100 );

  return (
    <footer className="stats">
     {percentage === 100 ? 'You Have Got Everthing! Ready To Go? ✈️': 
     ` 💼 You have ${numItems} items on your list, and you already packed ${numofPacked} ${percentage }%`}
    </footer>
  );
}
