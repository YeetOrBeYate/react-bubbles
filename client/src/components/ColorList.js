import React, { useState } from "react";
import axios from "axios";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors, setChange }) => {
  
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    
    setEditing(true);
    setColorToEdit(color);
    console.log("color to edit",colorToEdit)
  };

  const axiosWithAuth = ()=>{
    return axios.create({
         headers:{
             authorization: localStorage.getItem("token")
         }
     });
 }

  const saveEdit = e => {
    e.preventDefault();
    const Authy = axiosWithAuth();

    Authy.put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
      .then((res)=>{
        console.log(res)
        setChange();
      })
      .catch((err)=>{
        console.log(err)
      })
  };

  const deleteColor = color => {

    console.log("delete func",color)
    const Yeet = axiosWithAuth();

    Yeet.delete(`http://localhost:5000/api/colors/${color.id}`, color)
      .then((res)=>{
        console.log("delete yes", res)
        setChange();
      })
      .catch((err)=>[
        console.log("delte no", err)
      ])
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  XXXX
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
