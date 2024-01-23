import MyModal from "./modal";
import { RadioGroup } from "@headlessui/react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { event } from "../../data/Data";
import { Link } from "react-router-dom";

const AddEventModal = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <MyModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="w-full px-4 py-16">
          <div className="mx-auto w-full max-w-xl">
            <RadioGroup>
              <RadioGroup.Label className="sr-only">
                Server size
              </RadioGroup.Label>
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
