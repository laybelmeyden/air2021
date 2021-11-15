import { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import { Link, NavLink } from "react-router-dom";
import swal from "sweetalert";
import { AuthAPI } from "../api";

const AdminPage = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [redirect, setRedirect] = useState(false);
    const logout = async () => {
        try {
            await AuthAPI.postLogout();
            setRedirect(true);
        } catch (error) {}
    };
    useEffect(() => {
        let mounted = true;
        try {
            AuthAPI.currentUser()
                .then((res) => {
                    setName(res.data.name);
                    setEmail(res.data.email);
                })
                .catch((error) => {
                    if (error.response.status === 401) {
                        swal({
                            title: "Ошибка",
                            text: "У вас нет доступа к этой странице",
                            icon: "error",
                            timer: 3000,
                            button: "ок",
                        }),
                            setRedirect(true);
                    }
                });
        } catch (error) {}
        return () => mounted = false;
    }, []);
    if (redirect) return <Redirect to="login" />;
    return (
        <div className="container">
            вы вошли {name} {email}
            <div className="btn btn__logout" onClick={logout}>
                Выход
            </div>
        </div>
    );
};

export default AdminPage;
