import React, { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const initialUser = {
      "id": "5e38e1898b65a410f4b324c4",
      "name": "joe",
      "username": "lorenzo",
      "email": "joeephus@gmail.com",
      "password": "Angel004",
    }
  

  const [ user, setUser ] = useState(initialUser); 

  const updateUser = (user) => {
    const newUserInfo = {
      id: initialUser.id, 
      name: user.name, 
      username: user.username, 
      email: user.email, 
      password: initialUser.id
    }; 

    setUser(newUserInfo);
  } 

  return (
    <UserContext.Provider 
      value={{
        user, 
        updateUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}


