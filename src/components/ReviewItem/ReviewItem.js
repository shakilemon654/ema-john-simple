import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewItem = ({item, handleRemoveItemButton}) => {
    const {name, img, price, quantity} = item;
    
    return (
        <div className='border rounded border-grey-600 mb-4
            flex items-center p-2'
        >
            <div className=''>
                <img className='w-20 h-20' src={img} alt='' />
            </div>
            <div className='w-full flex justify-between items-center ml-6'>
                <div>
                    <p className='font-semibold text-md'>{name}</p>
                    <p>Price: ${price}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div onClick={() => handleRemoveItemButton(item)}
                    className='w-10 h-10 border rounded-full
                     bg-red-200 flex justify-center items-center'
                >
                    <button>
                        <FontAwesomeIcon className='text-red-600' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;