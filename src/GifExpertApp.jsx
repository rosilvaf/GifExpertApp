import { useState } from "react"
import {AddCategory, GifGrid} from "./components/GifGrid";

export const GifExpert = () => {

  const [categories, setCategories] = useState(['one']);

  //useState is a React Hook that lets you add a state variable to your component.


  const onAddCategory = ( newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
    <h1>GifExpert</h1>
    <input type="text" />
      <AddCategory onNewCategory = { (value) => onAddCategory(value)}></AddCategory>
      {
        categories.map((category)=>{
          <GifGrid 
          key= {category}
          category={category}>
          </GifGrid>
        })
      }
      <button onClick={onAddCategory}>
        Add
      </button>
    </>
  )
}
