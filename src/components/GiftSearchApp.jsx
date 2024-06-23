import { useState } from "react";

export const GiftSearchApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  return (
    <>
      <h1>Gift Search</h1>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
