import React = require("react");
import { useState } from "react";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { TextField } from "@fluentui/react";

export default function forms() {
    const [inputValue, setInputValue] = useState('');
  
    // the type variable must match the DOM element emitting the
    // event, an `input` in this case
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(inputValue)
    }
  
    return (
      <div>
        <h1>form</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <TextField label={"Name"} name={"name"} onChange={e => handleInputChange}/>
            <TextField label={"Email"} name={"email"} onChange={e => handleInputChange}/>
            <PrimaryButton type={"submit"}>Submit</PrimaryButton>
        </form>
      </div>
    );
  }