import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import { FlexColumnAlignCenter } from "./Containers";
import { Typography } from "@mui/material";

export default function CustomDashboard({ email }) {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(`http://localhost:9090/bonds/user/fav?username=${email}`)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        // You can see the fetched data here
        // Now you can store the data in a local variabl
        // Do further processing with responseData
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const [filter, setFilter] = React.useState("all");
  return data.length > 0 ? (
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
  ) : (
    <FlexColumnAlignCenter
      style={{
        rowGap: "3em",
        marginTop: "4em",
      }}
    >
      <img
        alt="no results found"
        length="400em"
        width="400em"
        src={require("./images/nofavorites.png")}
      />
      <Typography color="#2e5e80" variant="h5">
        No Favorites!
      </Typography>
    </FlexColumnAlignCenter>
  );
}
