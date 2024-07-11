import React from "react";
import { setLoggedInState } from "@/store/reducers/authSlice";
import { useAppDispatch } from "@/store";
const AuthUpdater = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-4">
      <button className="bg-blue-500 text-white rounded-lg px-4 py-2"
        onClick={() => dispatch(setLoggedInState(true))}>Log in</button>
      <button className="bg-white text-black border rounded-lg px-4 py-2"
        onClick={() => dispatch(setLoggedInState(false))}>Log out</button>
    </div>
  );
};
export default AuthUpdater;
