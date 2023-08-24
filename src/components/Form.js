import axios from "axios";
import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `https://api.github.com/users/${userInput}`;
    const resp = await axios.get(url);
    onSubmit(resp.data);
    setUserInput("");
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Github Username"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button>Add card</button>
    </form>
  );
};

export default Form;
