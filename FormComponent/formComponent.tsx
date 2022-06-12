// import React = require("react");
// import { useState } from "react";
// import { PrimaryButton } from "@fluentui/react/lib/Button";

// import Form from "./form";

// type Values = {
//     name: string, 
//     email: string,
// }

// const formComponent = () => {
//     const [values, setValues] = useState<Values>({
//         name: "",
//         email: "",
//     });

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValues({...values,[event.target.name]: event.target.value});
//     }

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(values)
//     }

//     return (
//         <form onSubmit={(e) => handleSubmit(e)}>
//             <Form changeHandler={handleChange} label={"Name"} name={"name"} />
//             <Form changeHandler={handleChange} label={"Email"} name={"email"} />
//             <PrimaryButton type={"submit"}>Submit</PrimaryButton>
//         </form>
//     )
// }

// export default formComponent