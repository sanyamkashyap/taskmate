import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: "sanyam",
    username: "sanyam123",
    email: "sanyam@gmail.com",
    password: "asdf",
  });

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log({ response: data });
      console.log(formData);
      setTimeout(()=>{
navigate("/")
      },[2000])
    } catch (err) {
      console.log(`failed to fetch: ${err}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="auth__container">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="username"
        />

        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email"
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};
