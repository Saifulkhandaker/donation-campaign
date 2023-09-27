import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleDonation = () => {
  const [donation, setDonation] = useState({});
  const {picture, title, description, text_button_bg_color, price} = donation;

  const { id } = useParams();
  const donations = useLoaderData();

  useEffect(() => {
    const findDonation = donations.find((donation) => donation.id == id);
    setDonation(findDonation);
  }, [id, donations]);

  // local storage for set donation:
  const handleDonate = () => {

    const addedDonationsArray = [];


    const donationItems = JSON.parse(localStorage.getItem('donations'));
    // if no data here then enter if condition
    if(!donationItems){
      addedDonationsArray.push(donation);
      localStorage.setItem('donations', JSON.stringify(addedDonationsArray));
      toast.success('Your kindness shines ! You have successfully donated.');
    }
    else{
      const isExist = donationItems.find(donation => donation.id == id);

      if(!isExist){
        addedDonationsArray.push(...donationItems,donation);
      localStorage.setItem('donations', JSON.stringify(addedDonationsArray))
      toast.success('Your kindness shines ! You have successfully donated.');
      }
      else{
      toast.error('Thank you for your generosity! This item has already been donated.');
      }
    }
  }

  return (
     <div className="h-screen">
        <div className="relative">
            <img className="w-full h-[90vh] rounded-lg" src={picture} alt="" />
            <div className="absolute h-fit hero-overlay bg-opacity-60 bottom-0 left-0 w-full  py-2 md:py-4 px-4">
            <button 
            onClick={handleDonate}
            className="btn border-none rounded-sm text-white" style={{background: text_button_bg_color}} >Donate {price}</button>
            </div>
        </div>
        <div className="w-full  mt-10">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-2 space-y-2">{description}</p>
        </div>
        <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
     </div>
  );
};

export default SingleDonation;
