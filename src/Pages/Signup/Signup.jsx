import React from "react";
import tiger from "../../assets/img/tiger.png";
import Header from "../../shared/Header/Header";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signupSchema } from "../../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values, action) => {
      console.log(values);
      
      action.resetForm();
    },
  });

  return (
    <div>
      <Header />
      <section
        className="relative flex flex-wrap lg:h-screen lg:items-center sm:bg-transparent sm:bg-gradient-to-r sm:from-black/25 sm:to-black/80 bg-black/75"
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
              <label for="name" className="sr-only">
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
              <label for="email" className="sr-only">
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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label for="password" className="sr-only">
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
