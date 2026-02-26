import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(subjectName, time) {
  return { subjectName, time };
}

const rows = [
  createData('React', 159),
  createData('CS50', 20),
  createData('Hindi', 5),
  createData('Japanese', 25),
  createData('Deutsch', 5),

];

export default function TodayList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, width: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Today's study</TableCell>
            <TableCell align="right">Time spent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.subjectName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.subjectName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
