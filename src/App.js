import Input from "./components/Input";
import Button from "./components/Button";

import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <Input username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
      <Button username={username} password={password} />
    </form>

  );
}

export default App;