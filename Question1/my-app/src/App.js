import { useState } from "react";

const App = () => {
  const [user, setUser] = useState();
  const [pass, setpass] = useState();
  const [token, setToken] = useState(null);

  const submitHandler = (e) => {
    const sendReq = async () => {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user,
          password: pass,
        }),
      });
      const data = await response.json();

      setToken(data.token);
      localStorage.setItem("token", data.token);
      console.log(data);
    };
    sendReq();
    e.preventDefault();
  };

  return (
    <>
      <h1>Sign Up Form</h1>
      <div className="users">
        <h2>Valid Usernames and Passwords For Testing</h2>
        <ul>
          <li>"username":"atuny0","password":"9uQFF1Lh"</li>
          <li>"username":"rshawe2","password":"OWsTbMUgFc"</li>
        </ul>
      </div>
      <form action="" method="post" onSubmit={submitHandler}>
        <h2>Enter Username:</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
        />
        <h2>Enter Password:</h2>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setpass(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Sign In</button>
      </form>
      <br />
      {token && (
        <div>
          <h2> The Sign In Token is: </h2>
          {token}
        </div>
      )}
    </>
  );
};

export default App;
