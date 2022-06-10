import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [form, setForm] = useState({...initialState});
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  function onChange({target}) {
    const value = target.value;
    const keyName = target.name;
    setForm({...form, [keyName]: value});
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(form);
    setForm({...initialState});
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                onChange={onChange}
                value={form.name}
                required
              />
            </td>
            <td>
              <input 
                name="cuisine"
                id="cuisine"
                type="text"
                placeholder="Cuisine"
                onChange={onChange}
                value={form.cuisine}
                required
              />
            </td>
            <td>
              <input 
                name="photo"
                id="photo"
                type="url"
                placeholder="URL"
                onChange={onChange}
                value={form.photo}
                required
              />
            </td>
            <td>
              <textarea 
                name="ingredients"
                id="ingredients"
                type="text"
                placeholder="Ingredients"
                onChange={onChange}
                value={form.ingredients}
                rows={3}
                required
               />
            </td>
            <td>
              <textarea 
                name="preparation"
                id="prepartion"
                type="text"
                placeholder="Preparation"
                onChange={onChange}
                value={form.preparation}
                rows={3}
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
