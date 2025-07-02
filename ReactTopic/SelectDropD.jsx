import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

const SelectDropD = () => {
  const [isUserId, setIsUserId] = useState(1);
  const [usersList, setUsersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch all users once for the dropdown
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsersList(data));
  }, []);

  // Fetch selected user info when isUserId changes
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${isUserId}`)
      .then((res) => res.json())
      .then((data) => setSelectedUser(data));
  }, [isUserId]);

  return (
    <Box>
      <select
        className="dropDownCustom"
        onChange={(e) => setIsUserId(Number(e.target.value))}
        value={isUserId}
      >
        <option value="" disabled>Select User</option>
        {usersList.map((user) => (
          <option value={user.id} key={user.id}>
            User-{user.id}
          </option>
        ))}
      </select>

      <div className="listUser">
        {selectedUser && (
          <p>
            Name: {selectedUser.name} <br />
            Email: {selectedUser.email}
          </p>
        )}
      </div>
    </Box>
  );
};

export default SelectDropD;
