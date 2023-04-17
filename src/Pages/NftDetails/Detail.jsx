import React from "react";

const Detail = ({ data }) => {
  console.log(data);

  const { Creator, Network, Owner } = data;
  return (
    <tbod>
      <tr>
        <td className="whitespace-nowrap px-4 w-80 py-2 font-medium text-slate-500">
          Category
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-black mx-12">Art</td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-500">
          Creator
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-black">{Creator}</td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-500">
          Owner
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-black">{Owner}</td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-500">
          Contract Address
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-black">0x6ba....ff0e8b02a</td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-500">
          Token ID
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-black">3996</td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-500">
          Network
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-black">{Network}</td>
      </tr>
    </tbod>
  );
};

export default Detail;
