import React from 'react';

const Donation = ({donation}) => {
    const {picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, price, description} = donation;
    return (
        <div>
            {/* card */}
            <div>
            <div style={{backgroundColor: card_bg_color}} className="card">
            <figure><img src={picture} /></figure> 
              <div className="card-body px-2">
                <h3 className='font-semibold rounded-md py-1 px-3 w-fit' style={{ backgroundColor:category_bg_color, color: text_button_bg_color}}>{category}</h3>
              <h2 style={{color: text_button_bg_color}} className="card-title">{title}</h2>
           </div>
     </div>
 </div>
            
        </div>
    );
};

export default Donation;
