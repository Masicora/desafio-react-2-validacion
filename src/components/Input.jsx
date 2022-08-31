function Input({ username, setUsername, password, setPassword }) {
    return (
        <>
            <h1>Login</h1>
            <label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    placeholder="username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                ></input>
            </label>
            <label>
                <input
                    value={password}
                    type="password"
                    id="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
            </label>
        </>
    );
}
export default Input;