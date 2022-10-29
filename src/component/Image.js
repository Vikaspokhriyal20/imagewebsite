import React, { useState } from 'react'
import axios from 'axios'

function Image() {
  const [photo, setphoto] = useState('');
  const [result, setresult] = useState([]);  

  const getmyphoto = () => {
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=YI9RTDCU2abhUtsxrI9LHhx4d7KQZsn7EIEPWGcnIlM`)
      .then((response) => {
       console.log(response)
        setresult(response.data.results)
    })
  }

  return (
    <>
      <div className="container mt-3 text-center">
        <input type='text' className='form-control p-4' value={photo} onChange={(e) => setphoto(e.target.value)} placeholder='search image' />
        
        <button type='submit' className='btn btn-dark m-2 ' onClick={getmyphoto}>Get Photo</button>
      </div>



      <div className='container sideborder '>
      <div className='row text-center text-lg-start'>
        {
          result.map((p) => {
            return (
              <div className='col-lg-3 col-md-4 col-6 '>
                <a href="#" className="d-block mb-4 h-100">
                  <img src={p.urls.small} alt='img' className='img-fluid img-thumbnail' />
                  </a>
              </div>
            )
          })
        }
      </div>
      </div>

    
    </>
  )
}

export default Image
