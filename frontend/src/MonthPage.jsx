import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function MonthPage() {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", p: 1, m: 1}}>
        <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ flex: 1}}>
          <DateCalendar />
        </LocalizationProvider>
        <Paper sx={{ flex: 1}}>Information about the day</Paper>
      </Box>
    </>
  );
}
