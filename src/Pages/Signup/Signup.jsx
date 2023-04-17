import React, { useEffect } from "react";
import tiger from "../../assets/img/tiger.png";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../../schemas";
import { useDispatch } from "react-redux";
import { createUser, getUserByEmail } from "../../app/features/Auth/authSlice";
import Navigation from "../../shared/Header/Navigation";
import { toast } from "react-hot-toast";
import { useRegisterMutation } from "../../app/features/user/userApi";

const initialValues = {
  name: "",
  email: "",
  password: "",
  profile: "",
};

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userRegister, { isLoading, isSuccess, isError, error, data }] =
    useRegisterMutation();
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: ({ email, password, name, profile }, action) => {

      const formData = new FormData();
      formData.append("image", profile);

      const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY_imgbbKey
        }`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          const creatorImage = data.data.display_url;
          dispatch(createUser({ email, password })).then(() => {
            userRegister({ name, email, password, creatorImage, role: "buyer" });
            dispatch(getUserByEmail(email));
          });
        })
        .catch((err) => console.error(err));
    },
  });

  if (isLoading) {
    toast.loading("Posting....", { id: email });
  }

  if (isSuccess) {
    toast.success("Sign Up success", { id: email });
    navigate("/");
  }

  if (isError) {
    toast.success(error, { id: email });
  }

  return (
    <div>
      <Navigation />
      <section
        className="relative flex flex-wrap lg:h-screen lg:items-center sm:bg-transparent sm:bg-gradient-to-r sm:from-black/25 sm:to-black/80 bg-black/75 w-full h-full"
        style={{ backgroundColor: "#3A0021" }}
      >
        <div className="px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-white">
              Get started today!
            </h1>

            <p className="mt-4 text-white">
              Join our exclusive NFT marketplace and discover unique digital
              assets today - sign up now!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 mb-0 max-w-md space-y-4"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter full name"
                />
                {errors.name && touched.name ? (
                  <p className="text-bold text-lg text-rose-600">
                    {errors?.name}
                  </p>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
                {errors?.email && touched?.email ? (
                  <p className="text-bold text-lg text-rose-600">
                    {errors?.email}
                  </p>
                ) : null}

                <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      trokelinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
                />
                {errors?.password && touched?.password ? (
                  <p className="text-bold text-lg text-rose-600">
                    {errors?.password}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="bg-white p-2 rounded-lg">
              <label
                htmlFor="profile"
                className="block mb-2 text-sm text-gray-500"
              >
                Submit Profile Picture
              </label>
              <input
                required
                type="file"
                id="profile"
                name="profile"
                onChange={(e) => {
                  setFieldValue("profile", e.target.files[0]);
                }}
                onBlur={handleBlur}
                accept="image/*"
              />
              {errors.profile && touched.profile ? (
                <p className="text-bold text-lg text-rose-600">
                  {errors?.profile}
                </p>
              ) : null}
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-white">
                Already have account?
                <Link className="underline" to="/login">
                  Login
                </Link>
              </p>

              <input
                type="submit"
                value="Sign up"
                className="inline-block rounded-lg px-5 py-3 text-sm font-medium text-white bg-black cursor-pointer"
              />
            </div>
          </form>
        </div>

        <div className="relative h-64 sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src={tiger}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Signup;
