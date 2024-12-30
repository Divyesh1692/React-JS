import React, { useState } from "react";
const UserProfileCard = ({
  name,
  age,
  bio,
  location,
  profilePicture,
  isStyled,
}) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [fullBio, setFullBio] = useState(false);

  const follow = () => {
    setIsFollowing(!isFollowing);
  };

  const showBio = () => {
    setFullBio(!fullBio);
  };

  return (
    <div
      className={`${
        isStyled
          ? "bg-blue-100 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:scale-105"
          : "bg-white"
      } max-w-sm w-full mx-auto border-2 border-gray-300`}
    >
      <div className="flex justify-center mb-4">
        <img
          src={profilePicture}
          alt={`${name}'s profile`}
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
      <h2 className="text-2xl font-semibold text-center">{name}</h2>
      <p className="text-center text-gray-600">Age: {age}</p>
      <p className="text-center text-gray-600">Location: {location}</p>
      <p className="text-center text-gray-600">
        Bio: {fullBio ? bio : `${bio.substring(0, 100)}...`}
        {bio.length > 100 && (
          <button
            onClick={showBio}
            className="text-blue-500 hover:underline ml-2"
          >
            {fullBio ? "Read Less" : "Read More"}
          </button>
        )}
      </p>
      <div className="mt-4 text-center">
        <button
          onClick={follow}
          className={`${
            isFollowing
              ? "bg-red-500 text-white"
              : "bg-blue-500 text-white"
          } px-4 py-2 rounded-full`}
        >
          {isFollowing ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;