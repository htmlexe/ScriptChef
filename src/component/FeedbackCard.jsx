import React from "react";

const FeedbackCard = ({ content, title, img, stats, foots }) => (
  <div className="flex flex-col items-start justify-start p-6 rounded-lg max-w-[370px] border border-solid border-white shadow-lg bg-white feedback-card">
    <div className="flex flex-col items-start">
      <img src={img} className="w-[100%] h-[100%] mb-2" />
      <p className="font-robocon font-normal text-[18px] leading-[32.4px] text-[#333333]">
        <strong>{title}</strong>
      </p>
    </div>

    <p className="font-robocon font-normal text-[16px] leading-[24px] text-[#060640] text-start">
      {content}
    </p>

    <hr className="w-3/4 my-4 border border-solid border-gray-300" />

    <div className="font-robocon font-normal text-[16px] leading-[20px] text-[#2E343F]">
      {stats.map((stat, index) => (
        <p key={index}>
          <strong>{stat.split(" ")[0]}</strong>{" "}
          {stat.split(" ").slice(1).join(" ")}
        </p>
      ))}
    </div>

    <hr className="w-3/4 my-4 border border-solid border-gray-300" />

    <p className="font-robocon font-normal text-[16px] leading-[24px] text-[#9090A7]">
      {foots}
    </p>
  </div>
);

export default FeedbackCard;
