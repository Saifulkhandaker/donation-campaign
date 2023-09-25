import React from 'react';
import { Link } from 'react-router-dom';

const DonationsItem = ({donation}) => {
    const {id, picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, price, description} = donation;
    return (
        <div>
            <div style={{backgroundColor: card_bg_color}} className="card rounded-lg grid grid-cols-2 gap-5">
                <div>
                    <img src={picture} alt="" />
                </div>
                <div className='py-3 space-y-3 text-left'>
                <h3 className='font-semibold rounded-md py-1 px-3 w-fit' style={{ backgroundColor:category_bg_color, color: text_button_bg_color}}>{category}</h3>
                <h2 style={{color: text_button_bg_color}} className="card-title">{title}</h2>
                <h2 style={{color: text_button_bg_color}} className='font-bold'>{price}</h2>
                
                <Link to={`/donations/${id}`}>
                <button className="py-2 px-3 font-medium border-none rounded-sm text-white" style={{background: text_button_bg_color}}>View Details </button>
                </Link>

                </div>

            </div>
 
        </div>
    );
};

export default DonationsItem;