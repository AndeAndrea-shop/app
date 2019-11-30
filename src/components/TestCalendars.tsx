import React from "react";
import { DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Divider } from "@material-ui/core";

export function TestCalendars(props) {
	const [selectedDate, handleDateChange] = React.useState(new Date());
	return (
		<>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Divider/>
				<DatePicker
					variant="inline"
					label="Basic example"
					value={selectedDate}
					onChange={handleDateChange}
				/>
				<Divider/>
				<DatePicker
					disableToolbar
					variant="inline"
					label="Only calendar"
					helperText="No year selection"
					value={selectedDate}
					onChange={handleDateChange}
				/>
				<Divider/>
				<KeyboardDatePicker
					autoOk
					variant="inline"
					inputVariant="outlined"
					label="With keyboard"
					format="MM/dd/yyyy"
					value={selectedDate}
					InputAdornmentProps={{ position: "start" }}
					onChange={date => handleDateChange(date)}
				/>
				<Divider/>
			</MuiPickersUtilsProvider>
		</>
	);
}
