import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    username: "sanyam123",
    email: "sanyam@gmail.com",
    password: "asdf",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log({ response: data });
      console.log(formData);
      navigate("/");
    } catch (err) {
      console.log(`failed to fetch: ${err}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-center items-center">
            Login
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="form" onSubmit={handleSubmit}>
            <Label htmlFor="username">username</Label>
            <Input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="username"
            />

            <Label htmlFor="email">email</Label>
            <Input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
            />

            <Label htmlFor="password">Password</Label>
            <Input
              type="text"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Button>submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
