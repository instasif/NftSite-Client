import React from 'react';

const Detail = () => {
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
          <td className="whitespace-nowrap px-4 py-2 text-black">3C63D0</td>
        </tr>

        <tr>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-slate-500">
            Network
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-black">Ethereum</td>
        </tr>
      </tbod>
    );
};

export default Detail;