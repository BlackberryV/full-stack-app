import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {setIsAuth, setUser} from "../redux/slices/userSlice";

const NavBar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logOut = () => {
        dispatch(setIsAuth(false))
        dispatch(setUser({}))
        navigate(LOGIN_ROUTE)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} style={{color: "white"}}>Navbar</NavLink>
                {isAuth ?
                    <Nav className="ml-auto">
                        <Button
                            onClick={() => navigate(ADMIN_ROUTE)}
                            variant={'outline-light'}
                                style={{marginRight: 10}}>Admin panel</Button>
                        <Button variant={'outline-light'} onClick={logOut}>Log out</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Log in</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
};

export default NavBar;