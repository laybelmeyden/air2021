import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import TextField from "@mui/material/TextField";
import { AuthAPI } from "../api";
import swal from "sweetalert";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const onSubmit = async () => {
            try {
                await AuthAPI.postLogin({ email, password });
                setRedirect(true);
                swal({
                    title: "Успешно",
                    text: "Вы можете войти",
                    icon: "success",
                    timer: 3000,
                    button: "ок",
                });
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
            <div className="login__form">
                <form>
                    <TextField
                        id="outlined-basic"
                        label="Почта"
                        variant="outlined"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Пароль"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="button" onClick={onSubmit}>
                        о1
                    </button>
                </form>
            </div>
        </div>
    );
}
