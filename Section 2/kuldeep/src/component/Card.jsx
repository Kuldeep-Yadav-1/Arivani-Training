import React from 'react'

function Card() {
  let todaydate = new Date();
  let formattedDate= todaydate.toLocaleDateString('en-US',{weekday: 'long',year: 'numeric' ,month:'long' ,day:'numeric', hour:'numeric',minute:'numeric',hour12: true});

  return (
    <>
     <div className='shadow-2xl w-96 p-1 m-5 rounded min-w-min'>
      <div className='flex '>
          <span className='m-2'><i className="fa-brands fa-facebook text-5xl font-weight-900 text-blue-700 "></i></span>
          <div className='m-2'>
             <h2 className='text-lg text-left text-bold'>Kuldeep yadav</h2>
             <p className='text-sm'>{formattedDate}</p>
          </div>
      </div>
      <p className='text-left m-2'>A Beautiful sunshine image</p>
      <img className='p-2 rounded' src='https://images.unsplash.com/photo-1593935320420-7216f4f96fe5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2hpbmUlMjBmcmVlJTIwdW5zcGFsc2h8ZW58MHx8MHx8fDA%3D'/>
      <div className='grid grid-cols-3'>
        <div>
          <p>{0}<i className="fa-solid fa-thumbs-up ms-1"></i></p>
          <button type="button" class=" text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 hover:bg-blue-700 "><i class="fa-solid fa-thumbs-up me-2"></i>Like</button>
        </div>
        <div>
          <p>{0}<i class="fa-solid fa-comment ms-1"></i></p>
          <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2 "><i class="fa-solid fa-comment me-2"></i>Comment</button>
        </div>
        <div>
          <p>{0}<i class="fa-solid fa-share ms-1"></i></p>
          <button></button>
          <button type="button" class="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-4 py-2.5 me-2 mb-2"><i class="fa-solid fa-share me-2"></i>Share</button>

        </div>
      </div>
     </div>
    </>
  )
}

export default Card
