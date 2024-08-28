import React, { useState } from "react";

export const Us = () => {
  const [list, setList] = useState([]);
  const [message, setMessage] = useState({
    text: "",
    id: "",
  });

  const changeMessage = (e) => {
    setMessage({
      ...message,
      text: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    setList([...list, newTodo]);
    setMessage({
      text: "",
      id: "",
    });
  };

  const handleDelete = (id) => {
    // console.log(id);
    let newTodos = list.filter((eachItem) => {
      return eachItem.id !== id;
    });
    // console.log(newTodos);
    setList(newTodos);
  };
  console.log(list);
  return (
    <div style={{ textAlign: "center" }}>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          value={message.text}
          placeholder="Enter Message"
          onChange={changeMessage}
        />
        <button onClick={handleSubmit} type="submit">
          Add
        </button>
      </form>
      <hr />
      <div>
        {list.length === 0 && <h3>em ledhu antha dolla</h3>}
        {list.map((eachItem) => {
          return (
            <div key={eachItem.id}>
              <span>
                <h1 style={{ display: "inline-block" }}>{eachItem.text}</h1>
              </span>
              <button>Edit</button>
              <button onClick={() => handleDelete(eachItem.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
