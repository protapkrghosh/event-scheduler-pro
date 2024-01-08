import { servicesData } from "../../../data/Data";

const FetureSerivises = () => {
  return (
    <div className=" flex items-center justify-center md:w-10/12 mx-auto px-3 lg:px-0">
      <div>
        <div className="text-center">
          <h1 className="text-primary ">
            Nice knowing <span className="text-[#0069ff]">paperwork.</span>
          </h1>
          <p className="text-secondary py-6">
            Give customers your undivided attention and see satisfaction soar.{" "}
            We handle the follow-ups so you can focus on delivering the best{" "}
            <br />
            experience.
          </p>
        </div>
        <div className="md:grid grid-cols-3 gap-8 pt-14 ">
          {servicesData.map((service) => (
            <div key={service.id} className="card w-full shadow-xl border p-2">
              <div className="card-body">
                <p className="text-[#0069ff] text-5xl font-bold">
                  {service.img}
                </p>
                <h2 className="card-title text-2xl text-[#0069ff] ">
                  {service.title}
                </h2>
                <p className="text-secondary">{service.discriptions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FetureSerivises;
