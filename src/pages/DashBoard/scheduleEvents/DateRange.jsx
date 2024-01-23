/* eslint-disable react/prop-types */
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const DateRange = ({ startDate, endDate, setStartDate, setEndDate }) => {
  const [localDate, setLocalDate] = useState({
    startDate: startDate || new Date(),
    endDate: endDate || new Date(),
    key: "selection",
  });

  const handleChange = (ranges) => {
    setLocalDate(ranges.selection);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  return (
    <div className="shadow-xl border border-gray-200">
      <DateRangePicker ranges={[localDate]} onChange={handleChange} />
    </div>
  );
};

export default DateRange;
