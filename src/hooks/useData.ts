import { IProduct } from "../constants/models";
import { ColumnTypes } from "../constants/enums";
// import { ColumnTypes } from "./enums";
// import { IProduct } from "components/constants/models";
// import { useList } from "@refinedev/core";

function useData() {
  const data = [
    {
      id: 1,
      name: "Cotopaxi Allpa 35L Travel Pack",
      description:
        "Durable and stylish backpack made from recycled materials. Versatile design, organization compartments.",
      price: 179,
      material: "Recycled nylon, polyester",
      category: {
        id: "12",
      },
    },
    {
      id: 2,
      name: "Hydro Flask Wide Mouth Water Bottle",
      description:
        "Stay hydrated throughout your day with this durable and stylish water bottle. Keeps drinks cold for hours and hot for even longer, perfect for workouts, hikes, or everyday use.",
      price: 34.99,
      material: "Stainless steel",
      category: {
        id: 9,
      },
    },
    {
      id: 3,
      name: "Kärcher K5 Premium Pressure Washer",
      description:
        "Blast away dirt, grime, and mildew with this powerful pressure washer. Featuring a 1,800 PSI motor, multiple spray nozzles, and a detergent injector, it's perfect for cleaning cars, decks, patios, and more.",
      price: 299.99,
      material: "Plastic, metal",
      category: {
        id: 15,
      },
    },
    {
      id: 4,
      name: "Rode NT-USB Mini Condenser Microphone",
      description:
        "Capture studio-quality audio for podcasts, streaming, and music creation. Sleek and compact design with easy USB connectivity makes it perfect for any setup.",
      price: 99.99,
      material: "Metal, plastic",
      category: {
        id: 3,
      },
    },
    {
      id: 5,
      name: "Monocle magazine",
      description:
        "Explore global cities, discover emerging trends, and embrace a refined lifestyle with Monocle. This beautifully designed magazine delves into design, architecture, travel, and business, offering a curated perspective on the world's most innovative places and ideas.",
      price: 18,
      material: "Magazine",
      category: {
        id: 7,
      },
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
