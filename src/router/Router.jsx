import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from '../component/Home';
import Aboutme from "../Pages/Aboutme";
import Summary from "../Pages/Summary";
import Portfolio from "../Pages/Portfolio";
import Testimonal from "../Pages/Testimonal";
import Contact from "../Pages/Contact";


export const router = createBrowserRouter([
    {
        path : '/',
        Component : RootLayout,
        children : [
            {
                index : true ,
                Component : Home
            },
            {
                path : 'aboutme',
                Component : Aboutme
            },
            {
                path : 'summary',
                Component : Summary
            },
            {
                path : 'portfolio',
                Component : Portfolio
            },
            {
                path : 'testimonial',
                Component : Testimonal
            },
            {
                path : 'contact',
                Component : Contact
            }
        ]
    }
])