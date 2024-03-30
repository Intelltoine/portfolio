import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface DataBlockProps {
  titre: string;
  date: string;
  description: string;
  tableau: string[];
  companyUrl: string;
}

export default function DataBlockExpComponent({
  titre,
  date,
  description,
  tableau,
  companyUrl,
}: DataBlockProps) {
  return (
    <div className="flex flex-col lg:flex-row text-white gap-4 hover:bg-slate-800 rounded-md p-4 hover:shadow-white-up-right">
      <p
        className="text-slate-500 text-sm mt-[3px] font-mono
       max-w-full whitespace-nowrap"
      >
        {date}
      </p>
      <div className="hover:text-emerald-200 group">
        <h2 className="text-gray-200 mb-4 group-hover:text-emerald-200">
          <a target="_blank" href={companyUrl}>
            {titre}
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-white group-hover:text-emerald-200 ml-2"
            />
          </a>
        </h2>

        <p className="text-gray-400 mb-4 font-mono text-sm">{description}</p>
        <ul className="flex flex-wrap gap-4">
          {tableau.map((element, index) => (
            <li
              key={index}
              className="text-sm bg-cyan-800 py-1 px-4 rounded-full text-emerald-200"
            >
              {element}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
