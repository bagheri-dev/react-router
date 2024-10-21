import * as React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IUserProfileCard } from "../types/users/UserProfile.Type";

const UserProfileCard: React.FC<IUserProfileCard> = ({
  id,
  firstName,
  lastName,
  maidenName,
  age,
  gender,
  email,
  phone,
  username,
  password,
  birthDate,
  image,
  bloodGroup,
  height,
  weight,
  eyeColor,
  ip,
  role,
}) => {
  return (
    <>
      <div key={id} className="container mx-auto">
        <div className="flex flex-col items-center gap-y-2 border-2 py-4 mx-3 border-[#3A6D8C] rounded-lg">
          <p>{role}</p>
          <div className="py-5">
            <img
              className="w-20 h-20 p-1 rounded-full ring-2 ring-gray-500 "
              src={image}
              alt={username}
            />
          </div>
          <p className="lg:text-3xl font-bold">{firstName} {lastName}</p>
          <div className="flex gap-x-5">
            <p className="lg:text-xl font-bold">UserName : {username}</p>
            <p className="lg:text-2xl font-bold">Password : {password}</p>
          </div>
          <p className="text-xl">{maidenName}</p>
          <div className="lg:flex-row flex flex-col items-center gap-x-5">
            <p className="">gender : {gender}</p>
            <p className="">age : {age}</p>
            <p className="">birthDate : {birthDate}</p>
          </div>
          <div className="flex lg:flex-row flex-col space-y-4 lg:space-y-0 items-center gap-x-5">
            <p>mail : {email}</p>
            <p>phone :{phone}</p>
          </div>
        </div>
        <div className="text-center mt-5 mx-3">
          <div className="border-2 py-3 px-5 border-[#3A6D8C] rounded-lg">
            <h3 className="text-xl font-bold text-[#6A9AB0] flex gap-x-3">
              <FaUserCircle />
              Persen data
            </h3>
            <p>bloodGroup : {bloodGroup}</p>
            <p>height : {height}</p>
            <p>weight : {weight}</p>
            <p>eyeColor {eyeColor}</p>
            <p>ip : {ip}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfileCard;
