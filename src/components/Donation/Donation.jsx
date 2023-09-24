import React from 'react';

const Donation = ({donation}) => {
    const {picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, price, description} = donation;
    return (
        <div>
            {/* card */}
            <div>
            <div className="card">
            <figure><img src={picture} /></figure> 
              <div className="card-body px-2">
                <h3>{category}</h3>
              <h2 className="card-title">{title}</h2>
           </div>
     </div>
 </div>
            
        </div>
    );
};

export default Donation;
