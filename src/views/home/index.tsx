import React, { useCallback } from "react";
import { useHistory } from "react-router";

const Home = () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL!;
    const history = useHistory();

    const handleOnClick = useCallback(() => {
        history.push(`/${BASE_URL}/create`);
    }, [history, BASE_URL]);

    return (
        <div>
            <button 
                className="rounded-lg p-2 text-white bg-green-400" 
                onClick={handleOnClick}
            >
                Create a document
            </button>
        </div>
    );
}

export default Home;