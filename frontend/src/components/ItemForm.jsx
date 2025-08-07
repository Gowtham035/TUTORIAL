import { useState } from "react";
import axios from "axios";

const ItemForm = () => {
  const [form, setForm] = useState({
    name: "",
    item: "",
    location: "",
    contact: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/items", form);
    alert("Item reported!");
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Your Name" onChange={handleChange} required />
      <input name="item" placeholder="Item Name" onChange={handleChange} required />
      <input name="location" placeholder="Location" onChange={handleChange} required />
      <input name="contact" placeholder="Contact" onChange={handleChange} required />
      <button type="submit">Report Item</button>
    </form>
  );
};

export default ItemForm;
