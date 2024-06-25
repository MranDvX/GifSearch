import { useState } from "react";
import { AddCategory } from "./categories/AddCategory";

export const GiftSearchApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const addCategory = () => {
    setCategories(["Naruto", ...categories]);
  };

  return (
    <>
      <h1>Gift Search</h1>
      <AddCategory setCategories={setCategories} />
      <button onClick={addCategory}>Add</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
