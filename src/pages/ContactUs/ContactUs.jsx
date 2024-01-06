const ContactUs = () => {
  return (
    <div className="lg:w-9/12 lg:h-[100vh] mx-auto pt-20 flex flex-col lg:flex-row justify-center items-center gap-x-20">
      <div className="lg:w-[40%] p-3 lg:p-0">
        <h5 className="text-xl text-blue-500 font-cursive mb-5">CONTACT OUR SALES TEAM</h5>
        <h2 className="text-4xl font-prompt mb-8">
          Increase revenue, accelerate sales pipeline, and improve customer
          retention.
        </h2>
        <div className="flex items-center gap-x-2 mb-5">
          <span className="text-blue-500 font-prompt text-4xl">20m</span>
          <p className="text-xl font-cursive">users worldwide</p>
        </div>
        <div className="flex items-center gap-x-2 mb-5">
          <span className="text-blue-500 font-prompt text-4xl">100k</span>
          <p className="text-xl font-cursive">companies use Calendly</p>
        </div>
        <div className="flex items-center gap-x-2 mb-5">
          <span className="text-blue-500 font-prompt text-4xl">200k</span>
          <p className="text-xl font-cursive">countries with monthly active users</p>
        </div>
      </div>
      <form className="p-5 lg:w-[40%]">
        <div className="flex justify-between items-center gap-x-2">
          <div className="w-full">
            <label
              className="text-xl font-cursive my-5 block mb-3 text-[#3e5063]"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              placeholder="Enter your first name"
              type="name"
              required
              className="input block w-full input-bordered"
              id="firstName"
            />
          </div>
          <div className="w-full">
          <label className="text-xl font-cursive my-5 block mb-3 text-[#3e5063]" htmlFor="lastName">
            Last Name
          </label>
          <input
            placeholder="Enter your last name"
            type="name"
            required
            className="input block w-full input-bordered"
            id="lastName"
          />
        </div>
        </div>
        <div>
          <label className="text-xl font-cursive my-5 block mb-3 text-[#3e5063]" htmlFor="email">
            Work Email
          </label>
          <input
            placeholder="Your Email"
            type="email"
            required
            className="input block w-full input-bordered"
            id="email"
          />
        </div>
        <div>
          <label className="text-xl font-cursive my-5 block mb-3 text-[#3e5063]" htmlFor="description">
            How Can We Help You
          </label>
          <textarea className="textarea textarea-bordered w-full" id="description" type="text" rows={3}  placeholder="Bio"></textarea>
        </div>
        <button className="btn w-full mt-5 bg-blue-500 text-white hover:text-black">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
