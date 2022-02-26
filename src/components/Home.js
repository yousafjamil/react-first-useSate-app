import React, { useState } from 'react'
import data from '../data'
const Home = () => {

  const [list, setList] = useState(data)
  console.log(list)


  return (
    <div className='container  py-5 mt-5 '  >
      <div className='row'>
        <div className='col-sm-8 col-md-8 col-lg-8 offset-sm-2 offset-md-2 offset-lg-2'>
          {list.map((item, index) => {
            return (
              <>
                <div class="card mb-5 jumbotron" >
                  <img class="card-img-top" src={item.image} alt="Card image cap" style={{ maxWidth: '400px', justifyContent: 'center', margin: '1rem', height: '400px' }} />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.age}</p>

                  </div>
                </div>

              </>
            )
          })}
          <button className='btn btn-outline-info w-75' onClick={() => setList('')}>Clear All </button>
        </div>

      </div>


    </div>);

};

export default Home;
