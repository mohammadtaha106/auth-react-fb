import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {Spinner} from "@nextui-org/react";
import { auth } from "../utils/firebase";

  export const AuthContext = createContext()
function AuthContextProvider({children}){
    const [user, setuser] = useState(
        {
            isLogin: false,
            userInfo: {},
        }
    )

    const [loading, setloading] = useState(true)

    function onAuthChanged(user) {
        //setUser(user);
        if(user){
            console.log(user);
            
            setuser({
                isLogin: true,
            userInfo: {
                name : user?.displayName,
                photourl : user?.photoURL,
                email : user?.email
            } 
            })
      
        }  else{
            setuser({
                isLogin: false,
            userInfo: {} 
            })
        }
      setloading(false)
      }
    
      useEffect(() => {
        const subscriber =  onAuthStateChanged(auth,onAuthChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
    
    return <AuthContext.Provider value={{user, setuser}}>
        {
            loading ? (
                <div className="flex justify-center items-center w-full h-screen">
                <Spinner color="secondary" size="lg" />
              </div>
              
            ):(
                children
            )
        }
     
    </AuthContext.Provider>
}

export default AuthContextProvider