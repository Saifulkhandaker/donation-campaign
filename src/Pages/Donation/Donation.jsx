import { useEffect, useState } from "react";
import DonationsItem from "../../components/DonationsItem/DonationsItem";


const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noDonation, setNoDonation] = useState("");
    const [dataLength, setDataLength] = useState(4);

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
                <div className="text-center py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                       { 
                       donations.slice(0, dataLength).map(donation => <DonationsItem donation={donation} ></DonationsItem>)
                       }
                    </div>
                    <div className={dataLength === donations.length ? "hidden" : ''}>
                        <button
                        onClick={() => setDataLength(donations.length)}
                        className="btn px-8 bg-black text-white mt-8">See All</button>
                    </div>
                </div>
            }
            
        </div>
    );
};

export default Donation;