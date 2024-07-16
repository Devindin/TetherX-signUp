import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

function RoleCard({ header, imageSrc, listItems, isSelected, onClick }) {
  return (
    <div
      className={`border  w-[180px] h-[210px] md:w-[266px] md:h-[294px] p-4 flex flex-col items-center cursor-pointer transition-transform transform
        bg-[#101010] ${
        isSelected ? 'border-[#49C8B7] text-[#49C8B7] scale-105' : 'border-gray-300 text-[#ffff] scale-100'
      }`}
      onClick={onClick}
    >
      <h3 className="font-roboto text-[14px] md:text-[20px] font-semibold mb-4">{header}</h3>
      <img
        className="w-[64px] h-[64px] sm:w-[64px] sm:h-[64px] md:w-[100px] md:h-[100px] mb-4"
        src={imageSrc}
        alt="Role"
      />
      <ul className="w-full text-[8px] sm:text-[10px] md:text-[16px] font-roboto">
        {listItems.map((item, index) => (
          <li key={index} className="flex items-center  md:mb-2">
            <CheckIcon className="text-[5px] md:text-[20px]"/>
            <span className="ml-2">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoleCard;
