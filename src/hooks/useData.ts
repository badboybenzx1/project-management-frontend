import { IProduct } from "../constants/models";
import { ColumnTypes } from "../constants/enums";
// import { ColumnTypes } from "./enums";
// import { IProduct } from "components/constants/models";
// import { useList } from "@refinedev/core";

const currentDate = new Date();

function useData() {
  const data = [
    {
      id: 1,
      name: "Market Analysis and Project Planning",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 7),
      subtasks: [
        "Analyze market demand and consumer needs",
        "Plan layout and infrastructure development",
        "Set project budget and timeline",
      ],
    },
    {
      id: 2,
      name: "Land Acquisition",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 14),
      subtasks: [
        "Search and select suitable land",
        "Survey and assess land quality",
      ],
    },
    {
      id: 3,
      name: "Project Design and Development",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 28),
      subtasks: [
        "Design house plans and infrastructure",
        "Develop construction plans",
      ],
    },
    {
      id: 4,
      name: "Permitting and Approval",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 29),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 4),
      subtasks: ["Apply for permits and approvals", "Wait for approvals"],
    },
    {
      id: 5,
      name: "Construction",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 20),
      subtasks: ["Construct infrastructure", "Build houses and structures"],
    },
    {
      id: 6,
      name: "Sales or Leasing",
      
      start: new Date(currentDate.getFullYear(), currentDate.getMonth()+ 2, 21),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, 4),
      subtasks: ["Conduct market research", "Develop sales or leasing plans"],
    },
    {
      id: 7,
      name: "Post-Construction Management",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth()+ 3, 5),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, 15),
      subtasks: ["Manage project completion", "Build community within complex"],
    },
    {
      id: 8,
      name: "Legal Compliance and Protection",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth()+ 3, 16),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 3, 25),
      subtasks: [
        "Coordinate with senior management and legal authorities",
        "Protect property and residents",
      ],
    },
    {
      id: 9,
      name: "Review and Evaluation",
      start: new Date(currentDate.getFullYear(), currentDate.getMonth()+ 3, 26),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth() + 4, 2),
      subtasks: ["Review project completeness", "Evaluate outcomes and report"],
    },
  ];

  //modifying fecthed data and adding column property
  const newArr: IProduct[] | undefined = data.map((i: IProduct) => {
    return {
      ...i,
      column: ColumnTypes.ORDERS,
    };
  });

  return [newArr, data];
}

export default useData;
