import React from "react";
import { SiBinance, SiOpensea } from "react-icons/si";

const Detail = ({ data }) => {

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
        <td className="whitespace-nowrap px-4 py-2 text-black">
          0x6ba....ff0e8b02a
        </td>
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

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-500">
          Royalty Fee
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-black">
          <div className="flex gap-3">
            <div className="flex justify-center items-center gap-2">
              <SiBinance className="text-amber-400" />
              <span>0%</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <SiOpensea className="text-blue-500" />
              <span>0%</span>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-500">
          Platform Fee
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-black">
          <div className="flex gap-3">
            <div className="flex justify-center items-center gap-2">
              <SiBinance className="text-amber-400" />
              <span>1%</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <SiOpensea className="text-blue-500" />
              <span>2.5%</span>
            </div>
          </div>
        </td>
      </tr>
    </tbod>
  );
};

export default Detail;
