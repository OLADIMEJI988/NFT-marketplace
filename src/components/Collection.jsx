import React from 'react';

export default function Collection({ mainImg, priImg, secImg, title, avatarName, avatarImg }) {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md">
      <img
        className="w-full object-cover rounded-lg cursor-pointer hover:brightness-110 transition"
        src={mainImg}
        alt={title}
      />
      <div className="flex gap-3 mt-2">
        <img
          className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-lg cursor-pointer hover:brightness-110 transition"
          src={priImg}
          alt={`${title} secondary 1`}
        />
        <img
          className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-lg cursor-pointer hover:brightness-110 transition"
          src={secImg}
          alt={`${title} secondary 2`}
        />
        <div className="h-16 w-16 sm:h-20 sm:w-20 bg-[#A259FF] text-white rounded-xl flex justify-center items-center space-mono cursor-pointer hover:brightness-110 transition text-sm sm:text-base">
          <p>1025+</p>
        </div>
      </div>
      <div className="mt-3 sans">
        <p className="text-base sm:text-[15px]">{title}</p>
        <div className="flex items-center gap-2 mt-2">
          <img className="h-4 sm:h-5 w-auto rounded-full" src={avatarImg} alt={avatarName} />
          <p className="font-light text-xs sm:text-[12px]">{avatarName}</p>
        </div>
      </div>
    </div>
  );
}
