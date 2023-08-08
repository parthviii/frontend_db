import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import TableComponent from "./TableComponent";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.75),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.6),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "gray",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    border: "2px solid #c5cfe3",
    "&:hover": {
      border: "2px solid #5c79af",
    },
    borderRadius: "5px",
  },
}));

const SearchBar = ({ data, filter }) => {
  const [search, setSearch] = React.useState("");
  const [tableData, setData] = React.useState({ nodes: data });
  const [isdataSorted, setDataSorted] = React.useState(0);
  const [selectedItems, setSelectedItems] = React.useState([]);

  React.useEffect(() => {
    const filteredData = {
      nodes: data.filter((item) =>
        item.id.toLowerCase().includes(search.toLowerCase())
      ),
    };
    setData(filteredData);
  }, [search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const compare = (a, b) => {
    a = a.maturitydate.split("-").join("");
    b = b.maturitydate.split("-").join("");
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  };

  const sortByDate = () => {
    let sortedData = {
      nodes: data.sort(compare),
    };

    if (isdataSorted === 0) {
      setDataSorted(1);
    } else if (isdataSorted < 0) {
      setDataSorted(1);
    } else {
      sortedData = {
        nodes: data.sort(compare).reverse(),
      };
      setDataSorted(-1);
    }
    setData(sortedData);
  };

  const exportData = () => {
    console.log(selectedItems);
    let csvContent =
      "data:text/csv;charset=utf-8," +
      selectedItems.map((e) => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  };

  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        height={"fit-content"}
        backgroundColor={"lightgray"}
      >
        <Toolbar style={{ paddingLeft: "0.00001em", paddingRight: "1.3em" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search by Security ID"
              inputProps={{ "aria-label": "search" }}
              id="search"
              type="text"
              onChange={handleSearch}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex", columnGap: "20px" } }}>
            <Button size="small" variant="outlined" onClick={sortByDate}>
              {isdataSorted === 0 ? (
                <SwapVertIcon />
              ) : isdataSorted < 0 ? (
                <ArrowDownwardIcon />
              ) : (
                <ArrowUpwardIcon />
              )}
              <Typography
                variant="body1"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Sort by maturity date
              </Typography>
            </Button>
            <Button size="small" variant="outlined" onClick={exportData}>
              <UpgradeIcon />
              <Typography
                variant="body1"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Export
              </Typography>
            </Button>
          </Box>
        </Toolbar>
      </Box>
      <TableComponent
        data={tableData.nodes}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        filter={filter}
      />
    </>
  );
};

export default SearchBar;
