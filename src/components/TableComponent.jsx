import React, { useState } from "react";
import { Form, Table, Pagination } from "react-bootstrap";
import { Chip } from "@mui/material";

const TableComponent = ({ data,filter }) => {
  const handleCheckboxChange = (itemId) => {
    console.log("Item ID:", itemId);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  let filteredData = data;
const currentDate = new Date(); // Current date

if (filter === "matured") {
  filteredData = data.filter((item) => new Date(item.maturitydate) <= currentDate);
} else if (filter === "pending") {
  filteredData = data.filter((item) => new Date(item.maturitydate) > currentDate);
} else if (filter === "flagged") {
  filteredData = filteredData.filter(
    (item) =>
      new Date(item.maturitydate) < currentDate &&
      item.status === "Active"
  );
}else if (filter === "upcoming") {
  const tenDaysLater = new Date();
  tenDaysLater.setDate(tenDaysLater.getDate() + 10);

  filteredData = filteredData.filter(
    (item) =>
      new Date(item.maturitydate) > currentDate &&
      new Date(item.maturitydate) <= tenDaysLater
  );
}


  // Calculate the index of the last item of the current page
  const lastIndex = currentPage * itemsPerPage;

  // Calculate the index of the first item of the current page
  const firstIndex = lastIndex - itemsPerPage;

  // Get the items for the current page
  let currentItems = filteredData.slice(firstIndex, lastIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Change the current page number
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      <div className="container card card-body temp">
        <Table
          responsive
          hover={true}
          className="table table-striped table-light"
        >
          <thead>
            <tr className="table-primary">
              <th>select</th>
              <th>id</th>
              <th>isin</th>
              <th>cusip</th>
              <th>issuer</th>
              <th>maturitydate</th>
              <th>coupon</th>
              <th>type</th>
              <th>facevalue</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={item.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white",
                }}
              >
                <td>
                  <Form.Check
                    type="checkbox"
                    className="custom-checkbox"
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.isin}</td>
                <td>{item.cusip}</td>
                <td>{item.issuer}</td>
                <td>{item.maturitydate}</td>
                <td>{item.coupon}</td>
                <td>{item.type}</td>
                <td>{item.facevalue}</td>
                <td>
                  <Chip
                    label={item.status}
                    color={item.status === "Active" ? "success" : "error"}
                    variant="filled"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <ul class="pagination justify-content-center">
          <Pagination>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => handlePagination(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        </ul>
      </div>
    </section>
  );
};

export default TableComponent;
