import { useState } from "react"
import Signup from "./Signup";
import Login from "./Login";
import { Button } from "@/components/ui/button";
import "./Auth.css";

const Auth = () => {
    const [active,setActive] = useState(true);
  return (
    <div className="loginContainer">
        <div className="box h-[30rem] w-[25rem]">
            <div className="minContainer login">
                <div className="loginBox w-full px-10 space-y-5">
                    {active ? <Signup /> : <Login />}

                    <div>
                        <span>Already have an account?    </span>
                        <Button className="hover:bg-accent hover:text-accent-foreground" 
                        onClick={() => setActive(!active) }>
                            {active ? "signin" : "signup"}
                        </Button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth