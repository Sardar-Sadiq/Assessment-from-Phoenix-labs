// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Toaster, toast } from "sonner";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) =>
        u.username === form.username.trim() &&
        u.password === form.password.trim()
    );

    if (user) {
      localStorage.setItem("currentUserId", String(user.id)); 
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      toast.error("Invalid username or password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Toaster richColors />
      <Card className="w-full max-w-md h-[400px] p-6 rounded-2xl shadow-md">
        <div className=" mb-6 text-center space-y-2">
          <h2 className="text-3xl font-bold">Acme Patient Portal</h2>
        <h3 className="text-gray-500">Enter your credentials to access your dashboard</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
