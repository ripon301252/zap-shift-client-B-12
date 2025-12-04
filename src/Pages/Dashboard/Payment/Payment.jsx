import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcelId", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  const handlePayment = async () => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
    };
    const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }
  return (
    <div>
      <h2>
        Please Pay $ {parcel.cost} for: {parcel.parcelName}
      </h2>
      <Link
        to={`payment-success`}
        onClick={handlePayment}
        className="btn btn-sm btn-outline btn-primary text-black"
      >
        Pay
      </Link>
    </div>
  );
};

export default Payment;
