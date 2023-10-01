import React from "react";

const ArticleCard = ({ title, img, foots }) => (
  <div className="flex flex-col items-start justify-start p-6 rounded-lg max-w-[370px] border border-solid border-white shadow-lg bg-white article-card">
    <div className="flex flex-col items-start">
      <img src={img} className="w-[100%] h-[100%] mb-2" />
      <p className="font-robocon font-normal text-[18px] leading-[32.4px] text-[#333333]">
        <strong>{title}</strong>
      </p>
    </div>

    <p className="font-robocon font-normal text-[16px] leading-[24px] text-[#9090A7]">
      {foots}
    </p>
  </div>
);

export default ArticleCard;
