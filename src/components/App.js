import React, {useEffect, useState} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {
  const [poems, setPoems] = useState([]);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8004/poems`)
      .then(res => res.json())
      .then((poemArr) => {
        setPoems(poemArr);
      })
  }, []);

  function handleNewPoem(newPoem){
    const newPoemArr = [...poems, newPoem];
    setPoems(newPoemArr);
  }
  
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={()=>setShowForm(!showForm)}>Show/hide new poem form</button>
        {showForm ? <NewPoemForm onAddNewPoem={handleNewPoem} /> : null}
      </div>
      <PoemsContainer poems={poems} />
    </div>
  );
}

export default App;
