import React, { useEffect, useState } from "react";
import { getUser, logoutUser } from "../api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token"); // get token
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await getUser(token); // pass token to API
        setUser(res.data);
      } catch (err) {
        console.error(err);
        localStorage.removeItem("token"); // remove invalid token
        navigate("/login"); // redirect if not authenticated
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        await logoutUser(token); // pass token
        localStorage.removeItem("token");
      } catch (err) {
        console.error(err);
      }
    }
    navigate("/login");
  };


  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <button
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
