import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Document = () => {
    const { id } = useParams<{id: string}>();
    const [content, setContent] = useState("");

    useEffect(() => {
        const API_URL = process.env.REACT_APP_API_URL;

        axios.get(`${API_URL}/documents/${id}`)
            .then(response => response.data)
            .then(response => {
                setContent(response.content);
            })
            .catch(error => {
                console.error(error);
            });
    }, [id]);

    return (
        <div>
            Document with id {id}
            content: {content}
        </div>
    );
}

export default Document;