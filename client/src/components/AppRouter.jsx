import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {useSelector} from "react-redux";
import NotFoundPage from "../pages/NotFoundPage";
import {authRoutes, publicRoutes} from "../routes";


const AppRouter = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, element}) => <Route path={path} element={element} key={path}/>)}
            {publicRoutes.map(({path, element}) => <Route path={path} element={element} key={path}/>)}
            <Route path={"*"} element={<NotFoundPage/>}/>
        </Routes>
    );
};

export default AppRouter;