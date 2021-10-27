import { useState, createContext } from "react";

//1. Buat setup context dgn createContext
export const UserContext = createContext();

//2. Buat provider utk isi datanya
const UserContextProvider = (props) => {
  const [user] = useState({
    nama: "Impact Byte",
    batch: "Dynamic Draco",
  });
  return(
    <UserContext.Provider value={{user}}>
      {props.children}
      </UserContext.Provider>
  )
}

export default UserContextProvider;