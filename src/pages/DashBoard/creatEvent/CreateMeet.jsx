import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaAngleDown, FaAngleUp, FaTimes } from "react-icons/fa";
import { useForm } from "react-hook-form";
const CreateMeet = () => {
  const [dateRange, setDateRange] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [action, setAction] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [scheduleDate, setScheduleDate] = useState(null);
  const { register, handleSubmit, reset, watch, setValue } = useForm();
  const [schedule, setSchedule] = useState(null);
  const liveDuration = watch("duration");
  useEffect(() => {
    setMethod(preMethod);
    setEndDate(preTimeRange?.endDate);
  }, [schedule]);
  const {
    duration: preDuration,
    eventName: preEventName,
    description: preDescription,
    timeRange: preTimeRange,
    scheduleDate: preScheduleDate,
    method: preMethod,
    methodInfo: preMethodInfo,
    inviteeInfo,
    scheduleLink,
    hostEmail,
    hostName,
    eventType,
    path,
  } = schedule || {};
  const [method, setMethod] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const clearDateRange = () => {
    setDateRange(null);
    setStartDate(new Date());
    setEndDate(null);
  };

  return (
    <div className="w-1/2 mx-auto my-20">
      <form className="border border-gray-200 p-5 mt-5 rounded-lg">
        <div>
          <label className="text-xl font-cursive my-5 block mb-3 text-[#3e5063]" htmlFor="eventName">
            Event Name:*
          </label>
          <input
            placeholder="Event Name..."
            required
            className="input block w-full input-bordered"
            defaultValue={preEventName}
            id="eventName"
            {...register("eventName")}
          />
        </div>
        <div>
          <label className="text-xl font-cursive my-5 block mb-3 text-[#3e5063]" htmlFor="eventName">
            Meet Link:*
          </label>
          <input
            placeholder="Meet Link..."
            required
            className="input block w-full input-bordered"
            id="eventName"
          />
        </div>
        <div>
          <label className="text-xl font-cursive my-5 block mt-8 mb-3 text-[#3e5063]" htmlFor="description">
            Description:
          </label>
          <textarea
            placeholder="Write your schedule details...."
            id="description"
            defaultValue={preDescription}
            className="input block w-full input-bordered min-h-[200px] resize-none"
            {...register("description")}
          ></textarea>
        </div>
        <div>
          <label className="text-xl font-cursive my-5 block mt-8 mb-3 text-[#3e5063]" htmlFor="duration">
            Duration:*
          </label>
          <select id="duration" defaultValue={15} className="select select-bordered w-full ">
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
            <option value="60">60</option>
          </select>
        </div>
        <div>
          {!preScheduleDate ? (
            <>
              <label className="text-xl font-cursive my-5 block mt-8 mb-3 text-[#3e5063]">Date Range:*</label>

              <div
                className={`rounded-md p-3 w-full relative 
                          ${
                            action
                              ? "border-2 border-[#00a4f8]"
                              : "border border-[#9ab2cc]"
                          }`}
              >
                {dateRange === "Select Range" || endDate ? (
                  <div className="relative flex gap-3">
                    <DatePicker
                      selected={startDate}
                      onChange={onChange}
                      startDate={new Date(startDate)}
                      endDate={endDate ? new Date(endDate) : endDate}
                      selectsRange
                      withPortal
                    />
                    <span
                      onClick={clearDateRange}
                      className="right-1 top-1 absolute text-lg cursor-pointer"
                    >
                      <FaTimes />
                    </span>
                  </div>
                ) : (
                  <div
                    onClick={() => setAction(!action)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium">
                        Indefinitely into the future
                      </p>
                      {action ? (
                        <FaAngleUp className="text-xl" />
                      ) : (
                        <FaAngleDown className="text-xl" />
                      )}
                    </div>
                    {action && (
                      <div className="">
                        <div
                          onClick={() => setDateRange("Select Range")}
                          className="flex gap-3 border-t-2 border-[#00a4f8] pt-2 mt-2"
                        >
                          <p className="text-lg font-medium">
                            Select a date range
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <label className="text-xl font-cursive my-5 block mt-8 mb-3 text-[#3e5063]">
                Select Date/Time:*
              </label>
              <div className="input block w-full input-bordered">
                <DatePicker
                  selected={
                    scheduleDate ? scheduleDate : new Date(preScheduleDate)
                  }
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  onChange={(date) => setScheduleDate(date)}
                  minDate={new Date()}
                  placeholderText="Select a date and time"
                  timeIntervals={liveDuration}
                  withPortal
                  required
                />
              </div>
            </>
          )}
        </div>
        <button className="border py-1 px-4 rounded-full hover:bg-gray-500 hover:text-white transition-all duration-200 my-8">Create Event</button>
      </form>
    </div>
  );
};

export default CreateMeet;
