import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaRegEdit } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            // refresh the data
            refetch()

            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };


  const handlePayment = async(parcel) => {
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
      trackingId: parcel.trackingId
    }
    const res = await axiosSecure.post('/payment-checkout-session', paymentInfo)
    // console.log(res.data.url) ;
    // window.location.href = res.data.url;
    window.location.assign(res.data.url);
  }

  return (
    <div>
      <h2>All of my parcels : {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th># No.</th>
              <th>Name</th>
              <th>cost</th>
              <th>Payment</th>
              <th>Tracking Id</th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <td>{index + 1}</td>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                    {/* {
                        parcel.paymentStatus === 'paid' 
                        ? 
                        <span className="text-green-500">Paid</span> 
                        : 
                        <Link to={`/dashboard/payment/${parcel._id}`}><button className="btn btn-sm btn-outline btn-primary text-black">Pay</button></Link>
                    } */}
                    {
                        parcel.paymentStatus === 'paid' 
                        ? 
                        <span className="text-green-500">Paid</span> 
                        : 
                        <button onClick={()=>handlePayment(parcel)} className="btn btn-sm btn-outline btn-primary text-black">Pay</button>
                    }
                </td>
                <td>
                  <Link to={`/parcelTrack/${parcel.trackingId}`}>{parcel.trackingId}</Link>
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td>
                  <div
                    className="relative overflow-visible tooltip tooltip-bottom"
                    data-tip="View"
                  >
                    <button className="btn btn-outline btn-square text-[#60a5fa] hover:bg-[#60a5fa] hover:text-black">
                      <FaMagnifyingGlass className="text-lg" />
                    </button>
                  </div>

                  <div
                    className="relative overflow-visible tooltip tooltip-bottom mx-3"
                    data-tip="Edit"
                  >
                    <button className="btn btn-outline btn-square text-[#fbbf24] hover:bg-[#fbbf24] hover:text-black">
                      <FaRegEdit className="text-lg" />
                    </button>
                  </div>

                  <div
                    className="relative overflow-visible tooltip tooltip-bottom"
                    data-tip="Delete"
                  >
                    <button
                      onClick={() => handleParcelDelete(parcel._id)}
                      className="btn btn-outline btn-square text-[#f87171] hover:bg-[#f87171] hover:text-black"
                    >
                      <IoTrashOutline className="text-lg" />
                    </button>
                  </div>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
