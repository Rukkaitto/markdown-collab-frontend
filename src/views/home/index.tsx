import React, { useCallback } from "react";
import { useHistory } from "react-router";

const Home = () => {
    const history = useHistory();

    const handleOnClick = useCallback(() => {
        history.push('/create');
    }, [history]);

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