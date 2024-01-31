import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaEyeSlash, FaEye } from "react-icons/fa";
import useContexts from "../../../hooks/useContexts";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Sinup = () => {
  // we used react hook form package. and handle form with that.
  const { 
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // import the all function from authProvider and call it here.
  const { handleSinup, updateUserProfile, handleGoogleSinin } = useContexts();
  const navigate = useNavigate();
  const id = uuidv4();
  // this is only for login with email.
  const onSubmit = (data) => {
    const { name, email, password, photo } = data;
    const role = "user";
    const currentPlane = "free";
    handleSinup(email, password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(name, photo);
        axios
          .post(
            "https://lets-sheduleit-backend.vercel.app/api/v1/users/creat-user",
            {
              user: {
                id,
                email,
                name,
                photo,
                role,
                currentPlane,
              },
            }
          )
          .then((data) => {
            console.log(data.data.massage);
            if (data.data.sucsees === true) {
              navigate("/");
            }
          });
      })
      .catch((err) => console.error(err));
  };
  // when you will login with the google. this function will take your information and post it in database with post method. After login, you wil redirect to the home page.
  const handleGoogleLogin = () => {
    handleGoogleSinin()
      .then((result) => {
        console.log(result.user);

        const email = result?.user?.email;
        const name = result?.user?.displayName;
        const photo = result?.user?.photoURL;
        const role = "user";
        const currentPlane = "free";
        const users = {
          id,
          email,
          name,
          photo,
          role,
          currentPlane,
        };
        axios
          .post(
            "https://lets-sheduleit-backend.vercel.app/api/v1/users/creat-user",
            {
              user: users,
            }
          )
          .then((data) => {
            console.log(data.data.massage);
            if (data.data.sucsees === true) {
              navigate("/");
            }
          });
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero min-h-screen pt-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex pt-4 md:hidden text-center lg:text-left md:mr-4">
          <div>
            <h1 className="text-primary">
              <span className="text-[#0069ff]"> Create your</span> <br /> own
              booking calendar
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
          className="card flex-shrink-0 p-4 w-full max-w-md shadow-2xl border "
        >
          <button
            // this function for google login. if you want to login with google. you can do that
            onClick={handleGoogleLogin}
            className=" btn-nav flex mt-4  gap-4 w-full items-center justify-center"
          >
            <img
              src="https://assets.setmore.com/website/v2/images/icons/icon-google.svg"
              className="h-6 w-6"
              alt=""
            />
            Continue with google
          </button>
          <button className=" btn-nav flex  mt-4 gap-2 w-full items-center justify-center">
            <img
              src="https://assets.setmore.com/website/v2/images/icons/icon-facebook-blue.svg"
              className="h-6 w-6"
              alt=""
            />
            Continue with facebook
          </button>
          <div className="divider">OR</div>
          {/* handle submit function */}
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control">
              <label className="label">
                <span className="">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="your name"
                className="input input-bordered"
              />
            </div>
            {errors.name?.type === "required" && (
              <p className="text-red-500">name is required</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                placeholder="your photo url"
                className="input input-bordered"
              />
            </div>
            {errors.photo?.type === "required" && (
              <p className="text-red-500">Photo URL is required</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="your email"
                className="input input-bordered"
              />
            </div>
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email is required</p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="">Password</span>
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
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
            </div>
            {errors.password?.type === "required" && (
              <p className="text-red-500">password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                password must be atlist 6 charectar
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-500">
                Password is smaller then 20 charectar
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                password must be one uppercase one lower case one numbar and one
                special cherecter
              </p>
            )}
            <div className="form-control">
              <label className="label">
                <span className="">confirm Password</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  {...register("confirm-password", {
                    required: true,
                    validate: (value) => value === watch("password"),
                  })}
                  placeholder="confirm-password"
                  className="input input-bordered w-full"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            {errors["confirm-password"]?.type === "required" && (
              <p className="text-red-500">Confirm password is required</p>
            )}
            {errors["confirm-password"]?.type === "validate" && (
              <p className="text-red-500">
                Password must match the previous password
              </p>
            )}
            <div className="form-control mt-6">
              {/* submit button for email login */}
              <button className="btn-primary flex  gap-4 w-full items-center justify-center">
                Sing up
                <FaSignInAlt />{" "}
              </button>
            </div>
          </form>
          <p className="mx-4">
            have an account plaeace
            <Link to={"/login"}>
              <button className="btn btn-link card-text-secondary">
                login{" "}
              </button>
            </Link>{" "}
          </p>
        </div>
        <div className="hidden md:flex text-center lg:text-left md:mr-4">
          <div>
            <h1 className="text-primary">
              <span className="text-[#0069ff]"> Create your</span> <br /> own
              booking calendar
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

export default Sinup;
