/* eslint-disable react/prop-types */
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// props coming from ScheduleEvent.jsx to contain the date range
const DateRange = ({ startDate, endDate, setStartDate, setEndDate }) => {
  // contain the start date and end date
  const [localDate, setLocalDate] = useState({
    // if start date is not exists then take the current date.
    startDate: startDate || new Date(),
    endDate: endDate || new Date(),
    key: "selection",
  });
// select start date and end date
  const handleChange = (ranges) => {
    setLocalDate(ranges.selection);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="shadow-xl border border-gray-200">
      {/* calling the state to collect the selected date */}
      <DateRangePicker ranges={[localDate]} onChange={handleChange} />
    </div>
  );
};

export default DateRange;
