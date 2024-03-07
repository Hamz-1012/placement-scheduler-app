"use client";

import React, { useState } from "react";
import CompanyProfileCard from "./CompanyProfileCard";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const companies = [
  {
    id: 1,
    name: "InnoTech Solutions",
    description:
      "A leading technology company specializing in software development",
    jobTitles: ["Software Engineer", "Data Scientist", "Product Manager"],
    hiringStatus: "Hiring",
  },
  {
    id: 2,
    name: "SwiftCommerce",
    description:
      "An innovative e-commerce platform connecting buyers and sellers",
    jobTitles: ["Front-end Developer", "Marketing Specialist"],
    hiringStatus: "Not Hiring",
  },
  {
    id: 3,
    name: "EcoMfg Global",
    description:
      "Global manufacturing company with a focus on sustainable practices",
    jobTitles: ["Mechanical Engineer", "Supply Chain Analyst"],
    hiringStatus: "Hiring",
  },
  {
    id: 4,
    name: "HealthTech Innovators",
    description:
      "Start-up revolutionizing the healthcare industry with cutting-edge technology",
    jobTitles: ["AI Researcher", "UX/UI Designer"],
    hiringStatus: "Not Hiring",
  },
  {
    id: 5,
    name: "Global Finance Solutions",
    description: "Financial institution providing comprehensive solutions",
    jobTitles: ["Financial Analyst", "Risk Management Specialist"],
    hiringStatus: "Hiring",
  },
  {
    id: 6,
    name: "GreenEnergy Co.",
    description:
      "Renewable energy company committed to sustainable power solutions",
    jobTitles: ["Electrical Engineer", "Environmental Analyst"],
    hiringStatus: "Hiring",
  },
  {
    id: 7,
    name: "SecureNet Systems",
    description:
      "Leading cybersecurity firm ensuring digital safety for businesses",
    jobTitles: ["Security Analyst", "Network Engineer"],
    hiringStatus: "Not Hiring",
  },
  {
    id: 8,
    name: "LogiTranz Solutions",
    description:
      "Logistics and transportation company optimizing supply chain processes",
    jobTitles: ["Logistics Coordinator", "Fleet Manager"],
    hiringStatus: "Hiring",
  },
  {
    id: 9,
    name: "InnoDesign Creations",
    description: "Innovative design agency shaping creative solutions",
    jobTitles: ["Graphic Designer", "Art Director"],
    hiringStatus: "Not Hiring",
  },
  {
    id: 10,
    name: "HealthPlus Wellness",
    description: "Wellness center promoting health and holistic well-being",
    jobTitles: ["Wellness Coach", "Nutritionist"],
    hiringStatus: "Hiring",
  },
  {
    id: 11,
    name: "TechTrend Innovations",
    description: "Pioneering technology trends with cutting-edge solutions",
    jobTitles: ["AI Developer", "Software Architect"],
    hiringStatus: "Not Hiring",
  },
  {
    id: 12,
    name: "EduSolutions Inc.",
    description:
      "Educational technology company transforming learning experiences",
    jobTitles: ["EdTech Specialist", "Instructional Designer"],
    hiringStatus: "Hiring",
  },
  {
    id: 13,
    name: "GreenGro Farms",
    description: "Sustainable agriculture company cultivating organic produce",
    jobTitles: ["Agricultural Engineer", "Farm Manager"],
    hiringStatus: "Not Hiring",
  },
  {
    id: 14,
    name: "FinTech Dynamics",
    description:
      "Financial technology firm revolutionizing digital transactions",
    jobTitles: ["Blockchain Developer", "Cryptocurrency Analyst"],
    hiringStatus: "Hiring",
  },
  {
    id: 15,
    name: "ConnectTech Solutions",
    description: "Connecting businesses with innovative technology solutions",
    jobTitles: ["IT Consultant", "Tech Support Specialist"],
    hiringStatus: "Hiring",
  },
  {
    id: 16,
    name: "GlobalConsult Experts",
    description:
      "International consulting firm providing strategic business solutions",
    jobTitles: ["Management Consultant", "Market Research Analyst"],
    hiringStatus: "Not Hiring",
  },
  {
    id: 17,
    name: "SolarTech Solutions",
    description:
      "Solar energy technology company leading the green energy revolution",
    jobTitles: ["Solar Panel Engineer", "Renewable Energy Analyst"],
    hiringStatus: "Hiring",
  },
  {
    id: 18,
    name: "InnoMed Devices",
    description:
      "Innovative medical devices company advancing healthcare technology",
    jobTitles: ["Biomedical Engineer", "Clinical Research Specialist"],
    hiringStatus: "Not Hiring",
  },
  {
    id: 19,
    name: "GreenTech Innovations",
    description:
      "Environmentally conscious technology solutions for a sustainable future",
    jobTitles: ["Environmental Engineer", "Green Energy Analyst"],
    hiringStatus: "Hiring",
  },
  {
    id: 20,
    name: "TradeNet Global",
    description:
      "International trade and commerce facilitator for global business expansion",
    jobTitles: ["International Trade Analyst", "Trade Coordinator"],
    hiringStatus: "Hiring",
  },
  {
    id: 21,
    name: "SmartBuild Innovations",
    description:
      "Smart building solutions for efficient and sustainable urban development",
    jobTitles: ["Building Automation Engineer", "Urban Planner"],
    hiringStatus: "Not Hiring",
  },
  {
    id: 22,
    name: "InnoHealth Solutions",
    description:
      "Innovative healthcare solutions for improved patient outcomes",
    jobTitles: ["Health Informatics Specialist", "Medical Research Scientist"],
    hiringStatus: "Hiring",
  },
  {
    id: 23,
    name: "FutureTech Dynamics",
    description:
      "Cutting-edge technology solutions shaping the future of digital innovation",
    jobTitles: ["Tech Evangelist", "Innovation Strategist"],
    hiringStatus: "Not Hiring",
  },
  {
    id: 24,
    name: "GreenLogistics Co.",
    description:
      "Environmentally friendly logistics solutions for sustainable transportation",
    jobTitles: ["Logistics Analyst", "Supply Chain Planner"],
    hiringStatus: "Hiring",
  },
  {
    id: 25,
    name: "DataDriven Insights",
    description:
      "Data analytics firm providing actionable insights for informed decision-making",
    jobTitles: ["Data Analyst", "Business Intelligence Consultant"],
    hiringStatus: "Hiring",
  },
];

interface Props {
  id: number;
  name: string;
  description: string;
  hiringStatus: boolean;
  jobTitles: string[];
}

const CompanyPortal = () => {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    setSearch(term);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <h1 className="mb-4"> Information related to Hiring Companies</h1>
      <div className="flex">
        <input
          type="text"
          className="border p-2 rounded-lg "
          placeholder="Search for companies"
          onChange={(event) => handleSearch(event.target.value)}
          defaultValue={searchParams.get("query"?.toString()) || ""}
        />
      </div>
      <div className="flex sapce-x-3">
        <div className="grid grid-cols-4 gap-5 ">
          {companies
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((company) => (
              <CompanyProfileCard
                key={company.id}
                name={company.name}
                description={company.description}
                hiringStatus={company.hiringStatus}
                jobTitles={company.jobTitles}
                id={company.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default CompanyPortal;
