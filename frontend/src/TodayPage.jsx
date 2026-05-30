import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function createData(subjectName, hashtags, time) {
  return { subjectName, hashtags, time };
}

const rows = [
  createData("React", "programming", 159),
  createData("CS50", "programming", 20),
  createData("Hindi", "language", 5),
  createData("Japanese", "language", 25),
  createData("Deutsch", "language", 5),
];

export default function TodayPage() {
  return (
    <>
      <Box>
        <TextField
          id="outlined-search"
          label="Search for subject"
          type="search"
        />
        <TextField
          id="outlined-search"
          label="Search for hashtag"
          type="search"
        />
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>№</TableCell>
              <TableCell>Today's study</TableCell>
              <TableCell>Hashtags</TableCell>
              <TableCell align="center">Time spent today, min</TableCell>
              <TableCell
                align="center"
                sx={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Typography>Add time, min</Typography>
                <Button variant="contained">Add all</Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.subjectName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.subjectName}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Chip label={row.hashtags} variant="outlined" />
                </TableCell>
                <TableCell align="center">{row.time}</TableCell>
                <TableCell
                  align="center"
                  sx={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <TextField
                    id="outlined-search"
                    label="Add time"
                    type="search"
                  />
                  <Button variant="contained">Add</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Divider />
        <TableFooter>
          <TableRow>
            <TableCell>Total time spent today</TableCell>
            <TableCell>Time</TableCell>
          </TableRow>
        </TableFooter>
      </TableContainer>
    </>
  );
}
