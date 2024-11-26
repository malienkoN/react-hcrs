import { useState } from "react";

import Button from "../Button";
import TextInput from "../TextInput";

const LoginForm = () => {
    const [username, setUserName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <TextInput
                placeholder="Your full name"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
            />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default LoginForm;
