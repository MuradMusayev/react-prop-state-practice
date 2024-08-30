import React, { useEffect, useState } from "react";
import Login from "./components/LoginPage";
import Register from "./components/RegisterPage";
import Blogs from "./Components/BlogsPage";

function App() {
  const [registerStatus, setRegisterStatus] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("userData"));
    console.log(localData);
    // console.log(localData);

    if (localData) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div>
      {!isLogin ? (
        <Blogs setIsLogin={setIsLogin} />
      ) : (
        <div className="forms">
          {registerStatus ? (
            <Register setRegisterStatus={setRegisterStatus} />
          ) : (
            <Login
              setRegisterStatus={setRegisterStatus}
              setIsLogin={setIsLogin}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
