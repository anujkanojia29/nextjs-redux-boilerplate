import React from "react";
import { useAppSelector } from "@/store";

const AuthViewer = () => {
  const loggedInState = useAppSelector((state) => state.auth.loggedIn);
  return (
    <div className="flex gap border border-1 border-border p-20 bg-background text-text-primary">
      You are now {loggedInState ? "Logged  In" : "Logged Out"}
    </div>
  );
};
export default AuthViewer;