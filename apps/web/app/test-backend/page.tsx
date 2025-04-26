"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TestBackend() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/greet`)
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setMessage("Failed to fetch Backend API");
      });
  }, []);

  return (
    <main>
      <h1>Test Backend API (Axios)</h1>
      <p>{message}</p>
    </main>
  );
}
