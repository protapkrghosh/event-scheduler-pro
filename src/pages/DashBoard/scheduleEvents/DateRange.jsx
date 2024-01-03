import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRange = () => {
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const handleCahange = (ranges) => {
    setDate(ranges.selection);
  };
  return (
    <div className="shadow-xl border border-gray-200">
      <DateRangePicker ranges={[date]} onChange={handleCahange} />
    </div>
  );
};

export default DateRange;
