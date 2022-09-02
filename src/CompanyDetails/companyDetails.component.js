import * as React from 'react';
import { useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './companyDetails.scss'


const CompanyDetails = () => {
const data  = useSelector(store => store.companyDetailsReducer.CompanyTable) ||[];
  return (
   (data.length > 0)  &&
    <div className="Table_container"> 
    <TableContainer component={Paper}>
      <Table id="company_details" aria-label="Company table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Company Domain</TableCell>
            <TableCell align="right">Comapny Sector</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.cname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.cname}
              </TableCell>
              <TableCell align="right">{row.cdomain}</TableCell>
              <TableCell align="right">{row.csector}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div> 
  );
}

export default CompanyDetails;