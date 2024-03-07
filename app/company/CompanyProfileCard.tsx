import React from "react";

interface Props {
  id: number;
  name: string;
  description: string;
  hiringStatus: string;
  jobTitles: string[];
}

const CompanyProfileCard = ({
  name,
  description,
  hiringStatus,
  jobTitles,
}: Props) => {
  const hiringColor = hiringStatus === "Hiring" ? "success" : "error";
  return (
    <div className="card w-[365px] bg-base-100 shadow-xl ">
      <figure>{/* <Image src="company-logo.jpg" alt=""/> */}</figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className={`badge badge-${hiringColor}`}>{hiringStatus}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <ul className="flex flex-wrap">
            {jobTitles.map((title, index) => (
              <li
                key={index}
                className="text-xs">
                <div className="badge badge-outline">{title}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfileCard;
