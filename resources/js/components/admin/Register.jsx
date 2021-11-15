import React, { useState } from "react";
import swal from "sweetalert";
import { Redirect, useHistory } from "react-router";
import { AuthAPI } from "../api";
import TextField from "@mui/material/TextField";


export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const onSubmit = async () => {
        try {
            await AuthAPI.postRegister({ name, email, password });
            // history.push('register')
            swal({
                title: "Успешно",
                text: "Вы можете войти",
                icon: "success",
                timer: 3000,
                button: "ок",
            });
            setRedirect(true);
            
        } catch (error) {
            swal({
                title: "Ошибка",
                text: "Вы не можете войти",
                icon: "error",
                timer: 3000,
                button: "ок",
            });
        }
    };
    if (redirect) return <Redirect to="admin" />;
    return (
        <div className="container">
            <div className="register">
                <form>
                    <TextField
                        id="outlined-basic"
                        label="Логин"
                        name="name"
                        value={name}
                        variant="outlined"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Почта"
                        name="email"
                        value={email}
                        variant="outlined"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Пароль"
                        name="password"
                        value={password}
                        variant="outlined"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={onSubmit}>
                        отправить
                    </button>
                </form>
            </div>
        </div>
    );
}
