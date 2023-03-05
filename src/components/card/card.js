

import React, { useState } from "react";
import jsonData from "./public/data/card.json";
import './public/css/card.css'

  export const CardList = () => {

    const [selectedUserId, setSelectedUserId] = useState(null);
    const [userData, setUserData] = useState({
    name: '',
    email: '',
    city: '',
    tasks: [],
  });

  const handleSelectUser = (userId) => {
    setSelectedUserId(userId);
    const selectedUser = jsonData.users.find(user => user.id === userId);
    setUserData(selectedUser);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  
  const handleSaveChanges = () => {
  if (selectedUserId !== null) {
    const updatedUserData = { ...userData };
    const userIndex = jsonData.users.findIndex(user => user.id === selectedUserId);
    const updatedUsers = [...jsonData.users];
    updatedUsers[userIndex] = updatedUserData;
    jsonData.users = updatedUsers;
    setUserData(updatedUserData);
  }
};


  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center">
        {jsonData.users.map(user => (
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" key={user.id} onClick={() => handleSelectUser(user.id)}>
            {user.id}
          </button>
        ))}
      </div>
      {selectedUserId !== null && (
        <div className="mt-4 p-4 border border-gray-200 rounded-md">
          <div className="mb-2">
            <label htmlFor="name" className="mr-2">Name: </label>
            <input type="text" name="name" value={userData.name} onChange={handleInputChange} className="rounded-md p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"/>
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="mr-2">Email: </label>
            <input type="text" name="email" value={userData.email} onChange={handleInputChange} className="rounded-md p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"/>
          </div>
          <div className="mb-2">
            <label htmlFor="city" className="mr-2">City: </label>
            <input type="text" name="city" value={userData.city} onChange={handleInputChange} className="rounded-md p-2 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"/>
          </div>
          <button onClick={handleSaveChanges}>Changer</button>
        </div>
      )}
    </div>
  );
};