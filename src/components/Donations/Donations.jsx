import { useLoaderData } from "react-router-dom";
import Donation from "../Donation/Donation";


const Donations = () => {

    const donations = useLoaderData();

    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 my-16">
            {
                donations.map(donation => <Donation donation={donation}></Donation>)
            }
                
        </div>
    );
};

export default Donations;