import React, {useState} from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {
  const poemCards = poems.map((poem) => {
    return <Poem key={poem.id} poem={poem}/>
  })

  return (
    <div className="poems-container">
      {poemCards}
    </div>
  );
}

export default PoemsContainer;
