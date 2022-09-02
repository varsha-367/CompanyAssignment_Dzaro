import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {setCompanyDetails} from './companyForm.action'
import './companyForm.scss'
import Button from '@mui/material/Button';

const CompanyForm = () => {
const [sector, setSector] = useState(useSelector(store => store.companyDetailsReducer.Sectors))
const dispatch = useDispatch();

const handleSubmit = (e) => {
    const values = e.target;
    e.preventDefault();
    dispatch(setCompanyDetails({cname: values[0].value, cdomain:values[1].value ,csector: values[2].value}))
    e.target.reset();
}


    return (
    <div className="Form_Container">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="cname">Company Name :</label>
        <input type="text" id="cname" name="cname"/><br></br>
        <label htmlFor="cdomain">Company Domain :</label>
        <input type="text" id="cdomain" name="cdomain"/><br></br>
        <label htmlFor="csector">Company sector :</label>
        <select name="csector" id="csector">
            {sector.map((element,idx) => (<option key={idx} value={element}>{element}</option> )   
             )}
        </select><br></br>
        <Button className="button" variant="contained" size="small" color="primary" type="submit" value="Submit">Submit</Button>
        </form> 
    </div>
)}

export default CompanyForm