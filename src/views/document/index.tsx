import axios from "axios";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import io, { Socket } from "socket.io-client";


const Document = () => {
    const { id } = useParams<{id: string}>();
    const API_URL = process.env.REACT_APP_API_URL;
    const [content, setContent] = useState("");
    const socket = useRef<Socket>();

    useEffect(() => {
        axios.get(`${API_URL}/api/documents/${id}`)
            .then(response => response.data)
            .then(response => {
                setContent(response.content);
            })
            .catch(error => {
                console.error(error);
            });
        socket.current = io("http://localhost:8080")

        socket.current.on("contentUpdate", ({id: updatedId, content: newContent}) => {
            if (updatedId === id) {
                setContent(newContent);
            }
        });
    }, [id, API_URL, socket]);

    const handleOnChange = (e: ChangeEvent<{value: string}>) => {
        setContent(e.target.value);
        socket.current?.emit("contentChange", {
            id, content: e.target.value,
        });
    }

    return (
        <div className="p-3 h-screen">
            <textarea className="p-3 border w-1/2 h-full" value={content} onChange={handleOnChange}>

            </textarea>
        </div>
    );
}

export default Document;