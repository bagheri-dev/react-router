import React from "react";
import { Link } from "react-router-dom";
import { IUserCard } from "../types/users/UserCard.Type";

const UserCard: React.FC<IUserCard> = ({
  id,
  firstName,
  lastName,
  image,
  crypto,
}) => {
  return (
    <>
      <Link
        key={id}
        to={`/users/${id}`}
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#EAD8B1] px-2 py-2 md:py-0"
      >
        <img
          className="w-20 h-20 p-1 rounded-full ring-2 ring-gray-500"
          src={image}
          alt="Bordered avatar"
        />
        <div className="flex flex-col justify-between p-4 leading-normal text-center w-full">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {firstName + " " + lastName}
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            {" "}
            <span className="text-gray-600">coin :</span> {crypto.coin}
          </p>
          <p className="mb-3 font-normal text-gray-700 ">
            {" "}
            <span className="text-gray-600">network :</span> {crypto.network}
          </p>
          <p className="mb-3 font-normal text-gray-700 text-sm lg:text-base overflow-hidden">
            {" "}
            <span className="text-gray-600">wallet address :</span>
            <br />
            {crypto.wallet}
          </p>
        </div>
      </Link>
    </>
  );
};

export default UserCard;
