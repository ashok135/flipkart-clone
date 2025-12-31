import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../slice/authSlice";
import type { RootState } from "../store/store";
import Logout from "./Logout";
import { useLocation } from "react-router-dom";
interface FormProps {
  username: string;
  password: string;
  confirmPassword?: string;
}

function Login() {
  const dispatch = useDispatch();
  const userData=useSelector((state:RootState)=>state.auth)
  const location = useLocation()
    const [message, setMessage] = useState(
    location.state?.message || ""
  );
  
  console.log(userData)

  const [login, setLogin] = useState(true);
  console.log(login)
  const [loginForm, setLoginForm] = useState<FormProps>({
    username: "",
    password: "",
  });
  const [signUpForm, setSignUpForm] = useState<FormProps>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const signin = ["username", "password"] as const;
  const signup = ["username", "password", "confirmPassword"] as const;
  console.log(loginForm);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    if (login) {
      setLoginForm((prev) => ({
        ...prev,
        [name]: value,
      }));
      console.log(login);
    }
    setSignUpForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function authStaus() {
    const res = await axios.post("https://dummyjson.com/auth/login", loginForm);
    const data = res.data;
    
    dispatch(loginSuccess( data))
   
    console.log(data);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (login) {
      authStaus()
       
    }
  };
 useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 2000);  

      return () => clearTimeout(timer);  
    }
  }, [message]);
  return (<>
      
     { userData.token ? <div className="mt-[100px]"><Logout/></div>:

    <div>
      <div className="fixed  w-full top-0 z-2 bg-blue-500 py-1">
        <Header textColor="text-white" iconColor="brightness-0 invert" />
      </div>
      <div className="bg-blue-100 h-screen  flex items-center justify-center ">
        
       
        <div className="container max-w-2xl  mx-auto p-2 flex gap-5  flex justify-center items-center">
           {message && (
        <p className="text-red-500 mb-3 transition-all fixed top-30">
          {message}
        </p>
      )}
          
          <div className="flex flex-justify-center w-1/2 bg-[#2874F0] flex-col p-6">
            <h2 className="text-[30px] text-white font-semibold leading-tight">
              {login ? "Login" : "Looks like you're new here!"}
            </h2>
            <p className="  text-white  leading-tight pt-5">
              {login
                ? "Get access to your Orders, Wishlist and Recommendations"
                : "Sign up with your mobile number to get started"}
            </p>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2">
            <form
              action=""
              onSubmit={(e) => handleSubmit(e)}
              className="w-full "
            >
              <h1 className="text-center font-semibold text-[22px]">
                {login ? "SignIn" : "SignUp"}
              </h1>
              <div className="flex flex-col justify-center items-center p-2 gap-4 shadow rounded-md w-full">
                {login
                  ? signin.map((feild) => (
                      <input
                        key={feild}
                        name={feild}
                        value={loginForm[feild]}
                        onChange={handleInput}
                        placeholder={feild}
                        className="shadow px-2 py-1"
                      />
                    ))
                  : signup.map((feild) => (
                      <input
                        key={feild}
                        name={feild}
                        value={signUpForm[feild] ?? ""}
                        onChange={handleInput}
                        placeholder={feild}
                        className="shadow px-2 py-1"
                      />
                    ))}

                <button
                  type="submit"
                  className="cursor-pointer text-cente bg-[#FB641B] text-white px-6 py-2 font-semibold"
                >
                  {login ? "Login" : "Sign In"}{" "}
                </button>
                 {login? <a   className="text-blue-600"  onClick={()=>setLogin(!login)}>New to flipkat create one</a>: <a   className="text-blue-600"   onClick={()=>setLogin(!login)}>Already? Login</a> }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
}
    </>
  );
}

export default Login;
