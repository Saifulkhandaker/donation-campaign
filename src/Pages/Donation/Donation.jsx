import { useEffect, useState } from "react";
import DonationsItem from "../../components/DonationsItem/DonationsItem";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noDonation, setNoDonation] = useState("");

    useEffect(() => {

        const donationItems = JSON.parse(localStorage.getItem('donations'));
        if(donationItems){
            setDonations(donationItems);
        }
        else{
            setNoDonation("No Donation Added..!")
        }
    }, [])

    return (
        <div>
            {
                noDonation ? <p className="text-2xl font-bold h-[80vh] flex justify-center items-center">{noDonation}</p> : 
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                       { 
                       donations.map(donation => <DonationsItem donation={donation} ></DonationsItem>)
                       }

                    </div>
                </div>
            }
            
        </div>
    );
};

export default Donation;