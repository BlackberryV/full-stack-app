import React, {useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTER_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {login, registration} from "../http/userApi";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuth, setUser} from "../redux/slices/userSlice";

const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (email, password) => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            console.log(data)
            dispatch(setUser(data))
            dispatch(setIsAuth(true))
            navigate(SHOP_ROUTE, {replace: true})
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className={"d-flex justify-content-center align-items-center"}
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: "600px"}} className={"p-5"}>
                <h2 className={"m-auto"}>{isLogin ? "Log In" : "Sign Up"}</h2>
                <Form className={"d-flex flex-column"}>
                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={"Email"}
                        className={"mt-3"}
                    />
                    <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={"password"}
                        placeholder={"Password"}
                        className={"mt-3"}
                    />
                    <Button
                        className={"mt-3"}
                        variant={"outline-success"}
                        onClick={() => handleSubmit(email, password)}
                    >Submit</Button>
                    <div className={"align-self-center mt-3"}>
                        <NavLink
                            to={isLogin ? REGISTER_ROUTE : LOGIN_ROUTE}
                        >{isLogin ? "Sign Up" : "Log In"}</NavLink>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;