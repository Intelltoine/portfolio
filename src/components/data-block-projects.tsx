import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "next/image";

interface DataBlockProps {
  titre: string;
  imageUrl: any;
  description: string;
  tableau: string[];
  companyUrl: string;
}

export default function DataBlockProjectComponent({
  titre,
  imageUrl,
  description,
  tableau,
  companyUrl,
}: DataBlockProps) {
  return (
    <div className="flex flex-col lg:flex-row text-white gap-4 hover:bg-slate-800 rounded-md p-4 hover:shadow-white-up-right">
      <div className="lg:min-w-48 lg:max-w-48 w-2/3">
        <Image
          alt="image-site-projet"
          src={imageUrl}
          layout="responsive"
          width={1}
          height={1}
          className="rounded border-slate-200/10 transition group-hover:border-slate-200/30 self-start object-contain "
          loading="lazy"
        />
      </div>

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
