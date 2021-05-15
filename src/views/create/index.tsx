import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const API_URL = process.env.REACT_APP_API_URL;

    const handleOnClick = () => {
        axios.post(`${API_URL}/documents`, { title, content: "" })
            .then(response => response.data)
            .then(response => {
                const { _id } = response;
                history.push(`/${_id}`);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <input className="border rounded m-3 p-2" type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)}></input>
            <button className="rounded-lg p-2 text-white bg-green-400" onClick={handleOnClick}>Create</button>
        </div>
    );
}

export default Create;