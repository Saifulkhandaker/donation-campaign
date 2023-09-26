import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleDonation from "../Pages/SingleDonation/SingleDonation";

const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/donation.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('/donation.json')
            },
            {
                path: "/donations/:id",
                element: <SingleDonation></SingleDonation>,
                loader: () => fetch('/donation.json')
            }
        ]
    }
])

export default myCreatedRoute;