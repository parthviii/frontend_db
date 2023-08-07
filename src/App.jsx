import React from "react";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { FlexRow } from "./components/Containers";
import Header from "./components/Header";
import TableComponent from "./components/TableComponent";
import { Container, Row, Col, } from 'react-bootstrap';

const data = [
  {
    select:"",
    id: "1",
    isin: "US9128283C60",
    cusip: "9128283C6",
    issuer: "United States Department of the Treasury",
    maturitydate: "2023-08-07",
    coupon: "1.3",
    type: "Goverment Bond",
    facevalue: "1000.0",
    status: "Inactive"
},
{
  id: "2",
  isin: "US9128283C60",
  cusip: "9128283C6",
  issuer: "United States Department of the Treasury",
  maturitydate: "2023-08-07",
  coupon: "1.3",
  type: "Goverment Bond",
  facevalue: "1000.0",
  status: "Active"
},
{
  id: "3",
  isin: "US9128283C60",
  cusip: "9128283C6",
  issuer: "United States Department of the Treasury",
  maturitydate: "2023-08-07",
  coupon: "1.3",
  type: "Goverment Bond",
  facevalue: "1000.0",
  status: "Inactive"
},

{
  id: "4",
  isin: "US9128283C60",
  cusip: "9128283C6",
  issuer: "United States Department of the Treasury",
  maturitydate: "2023-08-07",
  coupon: "1.3",
  type: "Goverment Bond",
  facevalue: "1000.0",
  status: "Active"
},

  {
    select:"",
    id: "5",
    isin: "US9128283C60",
    cusip: "9128283C6",
    issuer: "United States Department of the Treasury",
    maturitydate: "2023-08-07",
    coupon: "1.3",
    type: "Goverment Bond",
    facevalue: "1000.0",
    status: "Inactive"
},
{
  id: "6",
  isin: "US9128283C60",
  cusip: "9128283C6",
  issuer: "United States Department of the Treasury",
  maturitydate: "2023-08-07",
  coupon: "1.3",
  type: "Goverment Bond",
  facevalue: "1000.0",
  status: "Active"
},
{
  id: "7",
  isin: "US9128283C60",
  cusip: "9128283C6",
  issuer: "United States Department of the Treasury",
  maturitydate: "2023-08-07",
  coupon: "1.3",
  type: "Goverment Bond",
  facevalue: "1000.0",
  status: "Inactive"
},

{
  id: "8",
  isin: "US9128283C60",
  cusip: "9128283C6",
  issuer: "United States Department of the Treasury",
  maturitydate: "2023-08-07",
  coupon: "1.3",
  type: "Goverment Bond",
  facevalue: "1000.0",
  status: "Active"
}

  // Add more data objects here
];

const App = () => {
  return (
    <Container fluid>
    <Navbar/>
  <Row>
    <Col xs={12} md={2}>  
      <Sidebar/>
    </Col>
    <Col xs={12} md={10}>
    <SearchBar />
      {/* Your content for the right two-thirds of the dashboard */}
      <TableComponent data={data}/>
    </Col>
  </Row>
</Container>

  );
};

export default App;