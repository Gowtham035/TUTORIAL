import { useEffect, useState } from "react";
import axios from "axios";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredItems = items.filter(item =>
    item.item.toLowerCase().includes(search.toLowerCase()) ||
    item.location.toLowerCase().includes(search.toLowerCase()) ||
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Reported Items</h2>

      <input
        type="text"
        placeholder="Search by item, location or name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <div key={item._id} className="item-card">
            <h3>{item.item}</h3>
            <p><strong>By:</strong> {item.name}</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Contact:</strong> {item.contact}</p>
          </div>
        ))
      ) : (
        <p>No items match your search.</p>
      )}
    </div>
  );
};

export default ItemList;
