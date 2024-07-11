import React from "react";
import { useAppSelector } from "@/store";

const AuthViewer = () => {
  const loggedInState = useAppSelector((state) => state.auth.loggedIn);
  return (
    <div className="flex gap border border-1 border-black p-20">
      You are now {loggedInState ? "Logged  In" : "Logged Out"}
    </div>
  );
};
export default AuthViewer;