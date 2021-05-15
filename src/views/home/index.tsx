import React from "react";

const Home = () => {
    const API_URL = process.env.REACT_APP_API_URL;
    return (
        <div>
            {API_URL}
        </div>
    );
}

export default Home;