import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { logout } from "../../services/AuthService";

const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(UserContext);

    useEffect(() => {
        logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/')
            })
            .catch(() => {
                navigate('/');
            });
    }, []);

    return null;
};

export default Logout;