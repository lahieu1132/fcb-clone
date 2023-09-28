import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import Loading from "../../components/loading";
import { getUser } from "../../services/auth/authSlice";
import Sidebar from "../../components/profile/Sidebar";
import { Outlet } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <Sidebar />
          <Outlet />
        </>
      )}
    </>
  );
}

export default Profile;
