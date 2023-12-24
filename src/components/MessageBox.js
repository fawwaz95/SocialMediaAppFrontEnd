import React, { useState } from 'react';

const MessageBox = () => {
  const [showModal, setShowModal] = useState(true);

  const handleYes = () => {
    // Logic for 'Yes' button
    setShowModal(false);
  };

  const handleNo = () => {
    // Logic for 'No' button
    setShowModal(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
        {
            console.log("MSGBOX............")
        }
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded p-8">
            <h2 className="text-lg font-bold mb-4">Message</h2>
            <p className="mb-4">Do you want to proceed?</p>
            <div className="flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={handleYes}>Yes</button>
                <button className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={handleNo}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBox;