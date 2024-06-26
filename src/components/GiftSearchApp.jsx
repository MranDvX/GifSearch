import { useState } from "react";
import { AddCategory } from "./categories/AddCategory";

export const GiftSearchApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (NewCategory) => {
    if (categories.includes(NewCategory)) return;
    setCategories([NewCategory, ...categories]);
  };

  return (
    <>
      <h1>Gift Search</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
