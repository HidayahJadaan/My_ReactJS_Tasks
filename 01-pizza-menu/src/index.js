import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// ====================================

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// ====================================
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
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

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
// ====================================
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  // const pizzas2 = [];
  // const numPizzas2= pizzas2.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* ========= Method#1 ======== */}
      {/* <div>

{pizzaData.map((pizza)=> 

<Pizza 
name={pizza.name}
photoName={pizza.photoName}
ingredients={pizza.ingredients}

/>)}
</div> */}

      {/* ========= Method#2 ======== */}

      {/* <Pizza 
      name= {pizzaData[0].name}
       ingredients= {pizzaData[0].ingredients}
       photoName = {pizzaData[0].photoName}
       price= {pizzaData[0].price}
       
       />
 */}

      {/* ========= Method#3 ======== */}

      {/* Conditional Rendering */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza 
            
            pizzaObject={pizza} key={pizza.name}
            
            />
          ))}
        </ul>
      )} */}
      {/* ========= Method#4======== */}
      {/* Using Ternary Operaor */}

      {numPizzas > 0 ? (
        // React Fragment <></>, React.Fragment --> some times we need a key
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone even, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObject={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>No Pizzas, we're still working on our menu, please come later.</p>
      )}
    </main>
  );
}

// ====================================

function Pizza({ pizzaObject }) {
  // if (pizzaObject.soldOut) return null;

  return (
    // Template Literal

    <li className={`pizza ${pizzaObject.soldOut ? "sold-out" : ""}`}>
      <img alt={pizzaObject.name} src={pizzaObject.photoName} />

      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>

        {/* Conditionally render the whole element */}
        {pizzaObject.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span> ${pizzaObject.price} </span>
        )}

        {/* Conditionally render the content */}
        {/* <span>{ pizzaObject.soldOut ? "SOLD OUT" : <span> ${pizzaObject.price} </span>  } </span> */}
      </div>
    </li>
  );
}

// ====================================
function Footer() {
  const hour = new Date().getHours();
  const openHours = 8;
  const closeHours = 22; // Opens at 8:00AM- closes at 10:00PM
  const isOpen = hour >= openHours && hour <= closeHours;
  //  console.log(isOpen)

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHours} />
      ) : (
        <p>
          We're happy to welcome you between {openHours - 12}:00AM --{" "}
          {closeHours - 12}:00PM
        </p>
      )}
    </footer>
  );
}
// ====================================

function Order({ closeHours }) {
  return (
    <div className="order">
      <p>
        We're open until {closeHours - 12}:00 PM, Come visit us or order now.
      </p>
      <button className="btn">Order now</button>
    </div>
  );
}
