"use client";

import { IAlbum } from "@/lib/interface/album";
import { createContext, useContext, useEffect, useState } from "react";

const OrdersPage = () => {
  const [items, setItems] = useState<IAlbum[]>([]);
  const [allData, setData] = useState<any>([]);

  useEffect(() => {
    getOrder();
  }, []);

  const getOrder = async () => {
    const response = await fetch("http://localhost:4000/orders");
    const json = await response.json();
    setData(json);
  };

  console.log(allData, "allData");

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>

      <div className="divide-y divide-gray-700">
        {allData?.map((order) => {
          return (
            <div
              key={order.id}
              className="py-4 flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <img
                  src="https://via.placeholder.com/100"
                  alt="Album"
                  className="w-16 h-16"
                />
                <div>
                  <p className="text-md font-bold">{order.name}</p>
                </div>
              </div>
              <div>${order.grandTotal}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OrdersPage;
