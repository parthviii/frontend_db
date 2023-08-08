import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TableComponent from "./components/TableComponent";
import { Container, Row, Col } from "react-bootstrap";

// const data = [
//   {
//     select: "",
//     id: "1",
//     isin: "US9128283C60",
//     cusip: "9128283C6",
//     issuer: "United States Department of the Treasury",
//     maturitydate: "2023-08-07",
//     coupon: "1.3",
//     type: "Goverment Bond",
//     facevalue: "1000.0",
//     status: "Inactive",
//   },
//   {
//     id: "2",
//     isin: "US9128283C60",
//     cusip: "9128283C6",
//     issuer: "United States Department of the Treasury",
//     maturitydate: "2021-08-07",
//     coupon: "1.3",
//     type: "Goverment Bond",
//     facevalue: "1000.0",
//     status: "Active",
//   },
//   {
//     id: "3",
//     isin: "US9128283C60",
//     cusip: "9128283C6",
//     issuer: "United States Department of the Treasury",
//     maturitydate: "2020-08-07",
//     coupon: "1.3",
//     type: "Goverment Bond",
//     facevalue: "1000.0",
//     status: "Inactive",
//   },

//   {
//     id: "4",
//     isin: "US9128283C60",
//     cusip: "9128283C6",
//     issuer: "United States Department of the Treasury",
//     maturitydate: "2025-08-07",
//     coupon: "1.3",
//     type: "Goverment Bond",
//     facevalue: "1000.0",
//     status: "Active",
//   },

//   {
//     select: "",
//     id: "5",
//     isin: "US9128283C60",
//     cusip: "9128283C6",
//     issuer: "United States Department of the Treasury",
//     maturitydate: "2030-08-07",
//     coupon: "1.3",
//     type: "Goverment Bond",
//     facevalue: "1000.0",

//     status: "Inactive",
//   },
//   {
//     id: "6",
//     isin: "US9128283C60",
//     cusip: "9128283C6",
//     issuer: "United States Department of the Treasury",
//     maturitydate: "2032-08-07",
//     coupon: "1.3",
//     type: "Goverment Bond",
//     facevalue: "1000.0",
//     status: "Active",
//   },
//   {
//     id: "7",
//     isin: "US9128283C60",
//     cusip: "9128283C6",
//     issuer: "United States Department of the Treasury",
//     maturitydate: "2028-08-07",
//     coupon: "1.3",
//     type: "Goverment Bond",
//     facevalue: "1000.0",
//     status: "Inactive",
//   },

//   {
//     id: "demoid126783648376",
//     isin: "US9128283C60",
//     cusip: "9128283C6",
//     issuer: "United States Department of the Treasury",
//     maturitydate: "2024-08-07",
//     coupon: "1.3",
//     type: "Goverment Bond",
//     facevalue: "1000.0",
//     status: "Active",
//   },

//   // Add more data objects here
// ];

const data = [
  {
    id: 0,
    isin: "US9128283C60",
    cusip: "9128283C6",
    issuer: "United States Department of the Treasury",
    maturitydate: "2023-08-07",
    coupon: 1.3,
    type: "Goverment Bond",
    facevalue: 1000,
    status: "active",
    isfav: 0,
  },
  {
    id: 1,
    isin: "ISIN12345678",
    cusip: "CUSIP1234",
    issuer: "Apas pvt. ltd.",
    maturitydate: "2025-12-31",
    coupon: 0.05,
    type: "Corporate Bond",
    facevalue: 1000,
    status: "active",
    isfav: 0,
  },
  {
    id: 2,
    isin: "ISIN87654321",
    cusip: "CUSIP4321",
    issuer: "Goverment Bond",
    maturitydate: "2030-06-30",
    coupon: 0.03,
    type: "Goverment Bond",
    facevalue: 1000,
    status: "active",
    isfav: 0,
  },
  {
    id: 3,
    isin: "ISIN55555555",
    cusip: "CUSIP7890",
    issuer: "pop pvt. ltd.",
    maturitydate: "2028-08-15",
    coupon: 0.04,
    type: "Corporate Bond",
    facevalue: 1000,
    status: "active",
    isfav: 0,
  },
  {
    id: 4,
    isin: "ISIN88888888",
    cusip: "CUSIP1010",
    issuer: "Goverment Bond",
    maturitydate: "2032-03-20",
    coupon: 0.025,
    type: "Goverment Bond",
    facevalue: 1000,
    status: "active",
    isfav: 0,
  },
];
const App = () => {
  // const [data,setData]=useState([]);

  // useEffect(() => {
  // fetch("http://localhost:9090/bonds/security")
  // .then((response) => response.json())
  // .then((responseData) => {
  //   setData(responseData);
  //  // You can see the fetched data here
  //   // Now you can store the data in a local variabl
  //   // Do further processing with responseData
  // })
  // .catch((error) => {
  //   console.error("Error fetching data:", error);
  // });
  // },[]);

  const [filter, setFilter] = useState("all"); // Initialize with default filter
  return (
    <Container fluid className="contain">
      <Navbar />
      <Header />
      <Row>
        <Col xs={12} md={2}>
          <Sidebar setFilter={setFilter} />
        </Col>
        <Col xs={12} md={10}>
          <SearchBar data={data} filter={filter} />
          {/* Your content for the right two-thirds of the dashboard */}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
