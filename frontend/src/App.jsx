import React from "react";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";
import "./index.css"; // Make sure this import exists

function App() {
  return (
    <div className="container">
      <h1>Lost & Found Reporter</h1>
      <ItemForm />
      <hr />
      <ItemList />
      <footer>© 2025 College Lost & Found System</footer>
    </div>
  );
}

export default App;
