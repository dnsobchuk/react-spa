import { useParams, useLocation } from "react-router-dom";
import React from "react";

const Profile = () => {
    // Используйте хук useParams для получения имени пользователя из URL.
    // Имя пользователя должно быть применено в качестве именованного параметра в маршруте.
    let { username } = useParams();
    // useLocation применяется для захвата состояния из входных данных в объект.
    // Так можно захватить каждое поле в объекте, используя то же имя, что и имя переменной.
    let { pathname } = useLocation();
    let { state } = useLocation();

    return (
        <div>
            <h1>{username} Profile</h1>
            <p> Registered on:{state.registrationdate} </p>
            <p> Visiting: {pathname}</p>
        </div>
    )
}

export default Profile;