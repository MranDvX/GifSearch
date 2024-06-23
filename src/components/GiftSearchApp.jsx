import { useState } from "react";

export const GiftSearchApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const addCategory = () => {
    setCategories(["Naruto", ...categories]);
  };

  return (
    <>
      <h1>Gift Search</h1>
      <button onClick={addCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
