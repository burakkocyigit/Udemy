import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };
  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const handleDoneItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  // const handleDoneItem = (id) => {
  //   setItems((items) => {
  //     return items.map((item) => {
  //       if (item.id === id) {
  //         item.packed=!item.packed;
  //         return item;
  //       } else {
  //         return item;
  //       }
  //     });
  //   });
  // };

  
  return (
    <div className="appWrapper">
      <Header />
      <Main
        items={items}
        handleAddItem={handleAddItem}
        handleDeleteItem={handleDeleteItem}
        handleDoneItem={handleDoneItem}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
