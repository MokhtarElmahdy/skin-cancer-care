import {createBrowserRouter} from 'react-router-dom'
import RootLayout from './RootLayout'
import Home from '../pages/Home/Home'
import AboutPage from '../pages/About/AboutPage'
import ContactPage from '../pages/Contact/ContactPage'
import LoginPage from '../pages/Authentication/LoginPage'
import SignupPage from '../pages/Authentication/SignupPage'
export const router = createBrowserRouter([
    {path: "/" , element: <RootLayout/> , children: [
        {index: true, element: <Home/>},
        {path: 'about', element: <AboutPage/>},
        {path: 'contact', element: <ContactPage/>},
        {path: 'signup', element: <SignupPage/>},
        {path: 'login', element: <LoginPage/>},
    ]}
])

export const navs = [
    {path: '/' , title: 'Home'},
    {path: 'about' , title: 'About'},
    {path: 'contact' , title: 'Contact'},
]