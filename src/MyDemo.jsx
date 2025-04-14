import React, {useState} from 'react';

function MyDemo(){

    const[name, setName] = useState("enter name above")
    const[answer, setAnswer] = useState("");


    return(
        <div>
            <input id="myName"></input>
            <button onClick={() => setName(document.getElementById("myName").value.toUpperCase())}>Submit Name</button>
            <p>Name: {name} </p>
            <p>Answer: {answer}</p>
            <label><input name="rb" type = "radio" value = "Yes" checked = {answer == "Yes"}
            onChange ={(e) => setAnswer(e.target.value)}/>Yes</label>
            <label><input name="rb" type = "radio" value = "No" checked = {answer == "No"}
            onChange ={(e) => setAnswer(e.target.value)}/>No</label>          
        </div>
    );
};

export default MyDemo;