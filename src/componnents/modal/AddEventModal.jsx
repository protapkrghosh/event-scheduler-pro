import MyModal from "./modal";
import { RadioGroup } from "@headlessui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { event } from "../../data/Data";
import { Link } from "react-router-dom";

// received isOpen and setIsOpen state as a props where the modal is use
const AddEventModal = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      {/* my modal is the reusable modal which received isOpen and setIsOpen as a props and handle open modal */}
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
        {/*  modal body which is show the content of modal body its show as a children of the modal */}
        <div className="w-full px-4 py-16">
          <div className="mx-auto w-full max-w-xl">
            <RadioGroup>
              <RadioGroup.Label className="sr-only">
                Server size
              </RadioGroup.Label>
              {/* create a custom event data in the data/data.jsx files and use map to render show the  data of events */}
              <div className="space-y-2">
                {event.map((plan) => (
                  <RadioGroup.Option key={plan.title}>
                    <div className="flex items-center justify-center ">
                      <Link to={plan.link}>
                        <div className="card card-side w-full bg-base-100 shadow-xl px-4 border cursor-pointer hover:border-[#0069ff]">
                          <figure>
                            <img src={plan.img} alt="Movie" />
                          </figure>

                          <div className="card-body">
                            <h2 className="card-title">{plan.title}</h2>
                            <h2 className="card-title">{plan.titleTwo}</h2>
                            <p>{plan.discriptions}</p>
                          </div>
                          <FaLongArrowAltRight className="my-auto mr-2 font-bold text-[#0069ff] text-xl" />
                        </div>
                      </Link>
                    </div>
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        </div>
      </MyModal>
    </div>
  );
};
export default AddEventModal;
