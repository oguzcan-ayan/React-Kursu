import React, {useState} from 'react';

function Colors() {

    const [colors, setColors] = useState(["red", "green", "blue"]);
    const handleClick = () => {
       /*  setColors([...colors, "gray"
            Math.random() * 10
        ]); */
        setColors((prev) => ([...prev, "gray"]));
    };

  return (
    <>
    <h2>Colors</h2>
    {
        colors.map((color, i) => (
            <div key={i}>{color}</div>
        ))
    }
    <button onClick = {handleClick
        /* () => setColors([...colors, "gray"]) */
        }>Add a color</button>

    </>
  )
}

export default Colors;