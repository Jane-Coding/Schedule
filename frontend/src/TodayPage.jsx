import Box from "@mui/material/Box"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import TextField from '@mui/material/TextField';
import Paper from "@mui/material/Paper";

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
      <TextField id="outlined-search" label="Search for subject" type="search" /> 
      <TextField id="outlined-search" label="Search for hashtag" type="search" /> 
    </Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            <TableCell>Today's study</TableCell>
            <TableCell>Hashtags</TableCell>
            <TableCell align="center">Time spent, min</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.subjectName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.subjectName}
              </TableCell>
              <TableCell component="th" scope="row">
                <Chip label={row.hashtags} variant="outlined" />
              </TableCell>
              <TableCell align="center">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
