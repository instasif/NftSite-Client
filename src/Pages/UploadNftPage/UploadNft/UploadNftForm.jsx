import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUploadNftMutation } from "../../../app/features/Products/productsApi";
import { toast } from "react-hot-toast";

const UploadNftForm = () => {
  const { email, creatorImage } = useSelector((state) => state.auth.user);
  const [uploadNft, { isSuccess, isLoading }] = useUploadNftMutation();
  const submit = (e) => {
    e.preventDefault();
    const creator = e.target.creator.value;
    const Owner = e.target.owner.value;
    const network = e.target.network.value;
    const tokenId = e.target.tokenId.value;
    const priceETH = e.target.priceETH.value;
    const priceUSD = e.target.priceUSD.value;
    const contact = e.target.contact.value;
    const description = e.target.description.value;
    const image = e.target.image.files[0];
    console.log(image)

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_API_KEY_imgbbKey
      }`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const product = {
          creator,
          Owner,
          email,
          network,
          tokenId,
          priceETH,
          priceUSD,
          contact,
          description,
          creatorImage,
          image: data.data.display_url
        };
        uploadNft(product);
        console.log(product)
      })
      .catch((err) => console.error(err));
  };
  if (isLoading) {
    toast.loading("NFT Uploading...", { id: email })
  }
  if (isSuccess) {
    toast.success("NFT Upload Successfull", { id: email })
  }

  return (
    <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          Upload Nft
        </h1>

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
              name="creator"
              required
              placeholder="creator"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Creator
            </span>
          </label>
          <label
            htmlFor="UserCollectionName"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserCollectionName"
              name="owner"
              required
              placeholder="owner"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Owner
            </span>
          </label>
          <label
            htmlFor="UserCollectionName"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserCollectionName"
              name="network"
              required
              placeholder="Ethereum"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Network
            </span>
          </label>
          <label
            htmlFor="UserCollectionName"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserCollectionName"
              name="tokenId"
              required
              placeholder="tokenId"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Token Id
            </span>
          </label>
          <label
            htmlFor="UserCollectionName"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserCollectionName"
              name="priceETH"
              required
              placeholder="priceETH"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              PriceETH
            </span>
          </label>
          <label
            htmlFor="UserCollectionName"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserCollectionName"
              name="priceUSD"
              required
              placeholder="priceUSD"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              PriceUSD
            </span>
          </label>
          <label
            htmlFor="UserCollectionName"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserCollectionName"
              name="contact"
              required
              placeholder="Contact Address"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Contact Address
            </span>
          </label>
          <label
            htmlFor="UserCollectionName"
            className="relative block overflow-hidden border-b border-gray-200 pt-3 focus-within:border-blue-600"
          >
            <input
              type="text"
              id="UserCollectionName"
              name="description"
              required
              placeholder="description"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span className="absolute left-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
              Description
            </span>
          </label>


          <div>
            <label htmlFor="image" className="block mb-2 text-sm">
              NFT Image
            </label>
            <input
              required
              type="file"
              id="image"
              name="image"
              accept="image/*"
            />
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadNftForm;
