import React from "react";

const ContantCard = ({ content }) => {
  const { title, img, name, value } = content;
  return (
    <div className="relative card group card-compact  overflow-hidden  bg-base-100 shadow-l hover:shadow-2xl ">
      <figure className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
        <img
          src={img}
          className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
          alt="Louvre"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="card-title">{title}</h2>
          <h1 className="card-title"> {value}</h1>
        </div>
        <h1 className="card-title">{name}</h1>
      </div>
      <button className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-blue-500 text-white opacity-0 group-hover:opacity-100 transition duration-300">
        Add to cart
      </button>
    </div>
  );
};
/* <div className="relative h-48 w-64 bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg">
  <img className="w-full h-full object-cover" src="https://via.placeholder.com/640x480.png" alt="Card Image">
  <button className="absolute bottom-0 left-0 w-full bg-blue-500 text-white py-2 hover:bg-blue-600">Button</button>
</div> */
export default ContantCard;
