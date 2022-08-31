import React from "react";

function Button({ password }) {
    if (password == "252525") return (
        <>
            <button type="button">Login</button>
        </>
    );
}

export default Button;