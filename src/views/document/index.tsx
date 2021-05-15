import React from "react";
import { useParams } from "react-router";

const Document = () => {
    const { id } = useParams<{id: string}>();
    return (
        <div>
            Document with id {id}
        </div>
    );
}

export default Document;