import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaSignInAlt, FaEyeSlash, FaEye } from "react-icons/fa";
const SingIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex pt-8 md:hidden text-center lg:text-left md:mr-4">
          <div>
            <h1 className="text-primary">
              Welcome Back! <br /> Log in to Your Account
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className=" flex-shrink-0 w-full max-w-md p-4 bg-[#ffffff] shadow-2xl  border"
        >
          <button className=" btn-nav flex  mt-4 gap-4 w-full items-center justify-center">
            <img
              src="https://assets.setmore.com/website/v2/images/icons/icon-google.svg"
              className="h-6 w-6"
              alt=""
            />{" "}
            Continue with google
          </button>
          <button className=" btn-nav flex  mt-4 gap-2 w-full items-center justify-center">
            <img
              src="https://assets.setmore.com/website/v2/images/icons/icon-facebook-blue.svg"
              className="h-6 w-6"
              alt=""
            />{" "}
            Continue with facebook
          </button>
          <div className="divider">OR</div>
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control">
              <label className="label">
                <span className="">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            {errors.email?.type === "required" && (
              <p className="text-red-500">email is required</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="">Password</span>
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register(
                    "password",
                    { required: true },
                    {
                      required: true,
                    }
                  )}
                  placeholder="password"
                  className="input input-bordered  w-full"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-500">password is required</p>
              )}
            </div>

            <div className="form-control mt-6">
              <button className="btn-primary flex  gap-4 w-full items-center justify-center">
                Login
                <FaSignInAlt />{" "}
              </button>
            </div>
          </form>
          <p className="mx-4">
            new there please{" "}
            <Link to={"/sinup"}>
              <button className="btn btn-link card-text-secondary">
                sinup
              </button>
            </Link>{" "}
          </p>
        </div>
        <div className="hidden md:flex text-center lg:text-left md:mr-4">
          <div>
            <h1 className="text-primary">
              Welcome Back! <br /> Log in to Your Account
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
