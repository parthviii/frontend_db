import React, { useState } from "react";
import { Form, Table, Pagination } from "react-bootstrap";
import { Chip } from "@mui/material";
import { FlexColumnAlignCenter } from "./Containers";
import { Typography } from "@mui/material";

const TableComponent = ({ data, selectedItems, setSelectedItems }) => {
  const handleCheckboxChange = (itemId, index) => {
    setSelectedItems([...selectedItems, data[index]]);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the index of the last item of the current page
  const lastIndex = currentPage * itemsPerPage;

  // Calculate the index of the first item of the current page
  const firstIndex = lastIndex - itemsPerPage;

  // Get the items for the current page
  const currentItems = data.slice(firstIndex, lastIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Change the current page number
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section>
      {data.length > 0 ? (
        <div className="container card card-body temp">
          <Table
            responsive
            hover={true}
            className="table table-striped table-light"
          >
            <thead>
              <tr className="table-primary">
                <th>Select</th>
                <th>Security ID</th>
                <th>ISIN</th>
                <th>CusIP</th>
                <th>Issuer</th>
                <th>Maturity Date</th>
                <th>Coupon</th>
                <th>Type</th>
                <th>Face Value</th>
                <th>Status</th>
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
                      onChange={() => handleCheckboxChange(item.id, index)}
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
      ) : (
        <FlexColumnAlignCenter
          style={{
            rowGap: "3em",
          }}
        >
          <img
            alt="no results found"
            length="400em"
            width="400em"
            src={require("./images/nodatafound.png")}
          />
          <Typography color="#2e5e80" variant="h5">
            No Results Found!
          </Typography>
        </FlexColumnAlignCenter>
      )}
    </section>
  );
};

export default TableComponent;
