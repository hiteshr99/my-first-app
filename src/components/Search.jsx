import { useState } from "react";

function Search() {
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div style={{ margin: "20px" }}>
            <h2>Search Bar</h2>

            <input
                type="text"
                placeholder="Type something..."
                onChange={handleChange}
            />

            <p>Uppercase Output: {text.toUpperCase()}</p>
        </div>
    );
}

export default Search;