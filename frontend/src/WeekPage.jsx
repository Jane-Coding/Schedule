import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  subjectName,
  monday,
  tuesday,
  wednessday,
  thursday,
  friday,
  saturday,
  sunday,
) {
  return {
    subjectName,
    monday,
    tuesday,
    wednessday,
    thursday,
    friday,
    saturday,
    sunday,
  };
}

const rows = [
  createData("React", 60, 60, 60, 30, 20, 10),
  createData("CS50", 60, 60, 60, 30, 20, 10),
  createData("Japanese", 60, 60, 60, 30, 20, 10),
];

export default function WeekPage() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell align="center">Monday</TableCell>
            <TableCell align="center">Tuesday</TableCell>
            <TableCell align="center">Wednessday</TableCell>
            <TableCell align="center">Thursday</TableCell>
            <TableCell align="center">Friday</TableCell>
            <TableCell align="center">Saturday</TableCell>
            <TableCell align="center">Sunday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.subjectName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.subjectName}
              </TableCell>
              <TableCell align="center">{row.monday}</TableCell>
              <TableCell align="center">{row.tuesday}</TableCell>
              <TableCell align="center">{row.wednessday}</TableCell>
              <TableCell align="center">{row.thursday}</TableCell>
              <TableCell align="center">{row.friday}</TableCell>
              <TableCell align="center">{row.saturday}</TableCell>
              <TableCell align="center">{row.sunday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
