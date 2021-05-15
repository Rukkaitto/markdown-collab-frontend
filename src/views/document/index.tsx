import axios from "axios";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
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
        socket.current = io(API_URL!)

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
        <div className="p-3 h-screen flex">
            <textarea className="p-3 border w-1/2 h-full" value={content} onChange={handleOnChange}>
            </textarea>
            <div className="p-3 w-1/2">
                <ReactMarkdown rehypePlugins={[[rehypeHighlight, {ignoreMissing: true}]]} children={content}></ReactMarkdown>
            </div>
        </div>
    );
}

export default Document;