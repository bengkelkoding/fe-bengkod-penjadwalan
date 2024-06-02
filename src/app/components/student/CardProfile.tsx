import React from "react";

interface UserInfoProps {
  name: string;
  nimMhs: string;
  linkImg: string;
}

const CardProfile: React.FC<UserInfoProps> = ({ name, nimMhs, linkImg }) => {
  return (
    <div className="-mt-9 bg-white rounded-3xl p-4 flex">
      <img src={linkImg} alt="#" className=" rounded-full w-14 h-14 "></img>
      <div className="ml-4 mt-2">
        <div className="text-blue-900 text-sm  rounded-2xl font-semibold uppercase"> {name}</div>
        <div className="text-blue-900 text-sm "> {nimMhs} </div>
      </div>
    </div>
  );
};

export default CardProfile;
