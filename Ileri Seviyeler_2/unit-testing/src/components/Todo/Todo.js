import React, { useState } from 'react';

function Todo() {

    const [text, setText] = useState("");
    
    const defaultItems = [
        {   
            name : "Item A"
        },
        {
            name : "Item B"
        },
        {
            name : "Item C"
        }
    ];

    const addItem = () => {

        setItems((prev) => [...prev, {name: text}]);
        setText("");
    };

    const [items, setItems] = useState(defaultItems);
  return (
    <>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder='write whatever you want to do'/>
        <br/>
        <br/>
        <button onClick={addItem}>Add</button>

        {items.map((item, key) => (
            <ul key={key}>
                <li>{item.name}</li>
            </ul>
        ))
        
        }
    </>
  )
}

export default Todo;