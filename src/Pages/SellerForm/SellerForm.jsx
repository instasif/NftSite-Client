import React, { useState } from "react";
import { useUpdateUserMutation } from "../../app/features/user/userApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { getUserByEmail } from "../../app/features/Auth/authSlice";

const SellerForm = () => {
  const [coverPhoto, setCoverPhoto] = useState("");
  const dispatch = useDispatch()
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  const [setSeller] = useUpdateUserMutation();
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault();
    const collectionName = e.target.collectionName.value;
    const bio = e.target.bio.value;
    const chain = e.target.chain.value;
    const photo = e.target.coverPhoto.files[0];

    const formData = new FormData();
    formData.append("image", photo);

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY_imgbbKey
      }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setCoverPhoto(data.data.display_url);
      })
      .catch((err) => console.error(err));

    const data = {
      email,
      collectionName,
      bio,
      chain,
      coverPhoto: coverPhoto,
      role: "seller",
    };
    setSeller(data)
      .then(() => {
        toast.success('You are seller now')
        dispatch(getUserByEmail(email))
        navigate('/')
      })

  };





  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Become A Nft Seller
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          Write down bellow your all information:
        </p>

        <form
          onSubmit={submit}
          action=""
          className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <label
            htmlFor="UserCollectionName"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserCollectionName"
              name="collectionName"
              required
              placeholder="Collection Name"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Collection Name
            </span>
          </label>

          <label
            htmlFor="UserBio"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserBio"
              name="bio"
              required
              placeholder="Bio"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Bio
            </span>
          </label>

          <label
            htmlFor="UserChain"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserChain"
              required
              name="chain"
              placeholder="Chain"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Chain
            </span>
          </label>

          <div>
            <label htmlFor="image" className="block mb-2 text-sm">
              Cover Photo:
            </label>
            <input
              required
              type="file"
              id="image"
              name="coverPhoto"
              accept="image/*"
            />
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Become a Seller
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerForm;
