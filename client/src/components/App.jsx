import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
import NavBar from "./NavBar";
import '../index.css'
import {useEffect, useState} from "react";
import {check} from "../http/userApi";
import {useDispatch} from "react-redux";
import {setIsAuth, setUser} from "../redux/slices/userSlice";
import {Spinner} from "react-bootstrap";

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        check().then(data => {
            dispatch(setIsAuth(true))
            dispatch(setUser(data))
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
