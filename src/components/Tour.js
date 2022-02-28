import React from 'react'
import About from './About';

function Tour({ tour,RemoveSingleItem }) {
 

    return (
        <div className='container'>
            <div className='row'>

                <div className='col-sm-8 col-md-8 col-lg-12'>
{tour.map((item)=><About  data={item}  RemoveSingleItem={RemoveSingleItem}/>)}


                </div>
            </div>

        </div>
    )
}

export default Tour