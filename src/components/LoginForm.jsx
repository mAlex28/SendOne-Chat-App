import { useState } from "react";
import axios from "axios";
import { WechatOutlined } from "@ant-design/icons";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [passoword, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": "5d75c181-0563-4a41-bd86-087a41f7b544",
      "User-Name": username,
      "User-Secret": passoword,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", passoword);

      window.location.reload();
      setError("");
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">
          <WechatOutlined /> SendNow
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={passoword}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button className="button" type="submit">
              <span>Log In</span>
            </button>
          </div>
        </form>
        <h2 className="error">{error}</h2>
      </div>
    </div>
  );
};

export default LoginForm;
