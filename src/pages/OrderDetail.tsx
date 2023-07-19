import React from "react";
import { useParams } from "react-router-dom";

const OrderDetail = () => {
  const params = useParams();

  return <div>OrderDetail{params.id}</div>;
};

export default OrderDetail;
