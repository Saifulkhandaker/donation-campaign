import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleDonation = () => {
  const [donation, setDonation] = useState({});
  const {picture, title, description, text_button_bg_color, price} = donation;

  const { id } = useParams();
  const donations = useLoaderData();

  useEffect(() => {
    const findDonation = donations.find((donation) => donation.id == id);
    setDonation(findDonation);
  }, [id, donations]);

  return (
     <div className="h-screen">
        <div className="">
            <img className="relative h-[80vh] md:ml-28 w-3/4 mx-auto rounded-lg" src={picture} alt="" />
            <div className="absolute h-fit hero-overlay bg-opacity-60 bottom-0 left-[68px] w-[290px] md:left-36 md:-bottom-6 md:w-[528px] lg:bottom-[15px] lg:left-[170px] lg:w-[925px] py-2 md:py-4 px-4">
            <button className="btn border-none rounded-sm text-white" style={{background: text_button_bg_color}} >Donate {price}</button>
            </div>
        </div>
        <div className="w-5/6 mx-auto mt-10">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-2 space-y-2">{description}</p>
        </div>

     </div>
  );
};

export default SingleDonation;
