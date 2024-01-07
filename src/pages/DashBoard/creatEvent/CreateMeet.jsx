import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";
const CreateMeet = () => {
  const { register, handleSubmit, reset, watch, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-gray-200 p-5 mt-5 rounded-lg"
      >
        <div>
          <label
            className="text-xl font-cursive my-5 block mb-3 text-[#3e5063]"
            htmlFor="eventName"
          >
            Event Name:*
          </label>
          <input
            placeholder="Event Name..."
            required
            className="input block w-full input-bordered"
            id="eventName"
            {...register("eventName")}
          />
        </div>
        <div>
          <label
            className="text-xl font-cursive my-5 block mb-3 text-[#3e5063]"
            htmlFor="eventName"
          >
            Meet Link:*
          </label>
          <input
            placeholder="Meet Link..."
            required
            className="input block w-full input-bordered"
            id="meetLink"
            {...register("meetLink")}
          />
        </div>
        <div>
          <label
            className="text-xl font-cursive my-5 block mt-8 mb-3 text-[#3e5063]"
            htmlFor="description"
          >
            Description:
          </label>
          <textarea
            placeholder="Write your schedule details...."
            id="description"
            className="input block w-full input-bordered min-h-[200px] resize-none"
            {...register("description")}
          ></textarea>
        </div>
        <div>
          <label
            className="text-xl font-cursive my-5 block mt-8 mb-3 text-[#3e5063]"
            htmlFor="duration"
          >
            Duration:*
          </label>
          <select
            id="duration"
            defaultValue={15}
            className="select select-bordered w-full "
            {...register("duration")}
          >
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
            <option value="60">60</option>
          </select>
        </div>
        <div>
          <label
            className="text-xl font-cursive my-5 block mt-8 mb-3 text-[#3e5063]"
            htmlFor="datePicker"
          >
            Select Date:*
          </label>
          <div className="w-full">
            <ReactDatePicker
              id="datePicker"
              selected={watch("date")}
              onChange={(date) => setValue("date", date)}
              dateFormat="dd/MM/yyyy"
              className="input block w-full input-bordered resize-none"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div></div>
        <button className="btn-event">Create Event</button>
      </form>
    </div>
  );
};

export default CreateMeet;
