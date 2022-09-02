import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./dashboard.scss";
import { auth, db, logout } from ".././firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import CompanyDetails from '../CompanyDetails/companyDetails.component';
import CompanyForm from '../CompanyForm/companyForm.component';
import {useDispatch} from 'react-redux';
import {clearStore} from '.././CompanyForm/companyForm.action';
import Button from '@mui/material/Button';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div className="dashboard">
       <div className="dashboard__container">
        <div>Logged in as {name} , {user?.email} </div>
         <div>
          <Button 
            variant = "contained"
            size ="meduim"
            color = "primary"
            onClick={()=>{
            dispatch(clearStore())
            logout()}}>Logout</Button></div>
       </div>
       <div className="dashboard_content">
       <CompanyForm />
       <CompanyDetails />
       </div>
     </div>
  );
}
export default Dashboard;