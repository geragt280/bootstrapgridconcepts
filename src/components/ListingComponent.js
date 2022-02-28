import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function ListingComponent() {

    const [showItem, setshowItem] = useState(false);
    const [selectedItem, setselectedItem] = useState('');
    const selectedListType = useSelector(state => state.listtype);


    const RenderList = () => {
        const array = ['Item 1','Item 2','Item 3','Item 4','Item 5'];
    
        return (
          array.map((item) =>
            <li className='row m-1 p-1 list-single-item just-content-center' onClick={() => selectItem(item)}>
             <p className='m-1' ><b>{item}</b></p>  
            </li>
          )
        )
      }
    
      const selectItem = (itemname) => {
        console.log(itemname)
        setselectedItem(itemname);
        setshowItem(true)
      }


  return (
    <div>
        <div className='row'>
            <div className='col'>
              <ul className='m-2 p-0 grid-item-list'>
                <RenderList/>
              </ul>
            </div>
            {showItem && <div className='col item-detail-box'>
              <div className='item-detail m-2'>
                <div className='row'>
                  <h3 className='col p-0'>{selectedItem}</h3>
                  <div className='col d-flex justify-content-end close-details'>
                    <h3 className='p-1 close-details-icon' onClick={() => setshowItem(false)}>
                      X
                    </h3>
                  </div>
                </div>
              </div>
            </div> }
        </div>
    </div>
  )
}
