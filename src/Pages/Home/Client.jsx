import React, { useCallback, useState } from 'react';
import {  useNavigate } from 'react-router-dom'; // Import useHistory from react-router-dom

function Client() {
  const [val, setVal] = useState('');
  const Navigate = useNavigate(); // Initialize useHistory

  const handleJoinCall = useCallback(() => {
    // Navigate to a new route with roomId as a parameter
    Navigate(`/room/${val}`);
  },[val,Navigate]);

  return (
    <>
      <div className='flex-col pt-40'>
        <div className='flex justify-center'>
          <div className='bg-gray-500 text-3xl font-extrabold text-center uppercase w-fit rounded-md mt-4'>Video Calling Room</div>
        </div>
        <div className='flex justify-center mt-10'>
          <input
            onChange={(e) => { setVal(e.target.value) }}
            className='px-3 py-2 bg-gray-300 rounded-md font-size-xl'
            type="text"
            placeholder='enter Meetingcode...'
          />
          <button
            onClick={handleJoinCall} // Call handleJoinCall when the button is clicked
            className='px-2 py-1 bg-green-600 ml-2 rounded-md font-semibold'
          >
            Join Call
          </button>
        </div>
      </div>
    </>
  )
}

export default Client;
