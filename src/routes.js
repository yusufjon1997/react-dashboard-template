import React, { Suspense, lazy } from 'react';
import App from 'App';
import { Navigate, Route, Routes } from 'react-router-dom'

// import Register from 'pages/Auth/Register'
const List = lazy(() => import('./pages/Products/List'));
const Login = lazy(() => import('./pages/Auth/Login'));
const Register = lazy(() => import('./pages/Auth/Register'));


const Routers = () => {
    
    return (
        <App>
            {({ isAuthenticated, isLoading }) => {
                return <>
                    {!isLoading && isAuthenticated ?
                        <Suspense fallback={<h2>Loading...</h2>}>
                            <Routes>
                                <Route path='/' element={<List />} />
                            </Routes>
                        </Suspense>
                        :
                        <>
                            <Suspense fallback={<h2>Loading...</h2>}>
                                <Routes>
                                    <Route path='/login' element={<Login />} />
                                    <Route path='/register' element={<Register />} />
                                    <Route path='*' element={<Navigate to="/login" replace={true} />} />
                                </Routes>
                            </Suspense>
                        </>
                    }
                </>
            }}
        </App>
    )
}

export default Routers