import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { LuPackageCheck } from "react-icons/lu";
import { MdDoneAll } from "react-icons/md";

const AssignedDeliveries = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "driver_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user.email}&deliveryStatus=driver_assigned`
      );
      return res.data;
    },
  });

  const handleDeliveryStatusUpdate = (parcel, status) => {
    const statusInfo = {
      deliveryStatus: status,
      riderId: parcel.riderId,
      trackingId: parcel.trackingId,
    };
    let message = `Parcel Status is update with ${status.split("_").join(" ")}`;
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div>
      <h2>Parcels Pending Pickup: {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Confirm</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>
                  {parcel.deliveryStatus === "driver_assigned" ? (
                    <>
                      <div
                        className="relative overflow-visible tooltip tooltip-bottom"
                        data-tip="Accept"
                      >
                        <button
                          onClick={() =>
                            handleDeliveryStatusUpdate(parcel, "rider_arriving")
                          }
                          className="btn btn-outline btn-square text-[#0fac5d] hover:bg-[#0fac5d] hover:text-black"
                        >
                          <FaUserCheck className="text-lg" />
                        </button>
                      </div>
                      <div
                        className="relative overflow-visible tooltip tooltip-bottom mx-3"
                        data-tip="Reject"
                      >
                        <button
                          // onClick={() => handleRemove(rider)}
                          className="btn btn-outline btn-square text-[#fbbf24] hover:bg-[#fbbf24] hover:text-black"
                        >
                          <IoPersonRemoveSharp className="text-lg" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <span>Accepted</span>
                  )}
                </td>
                <td>
                  <div
                    className="relative overflow-visible tooltip tooltip-bottom mr-3"
                    data-tip="Mark as Picked Up"
                  >
                    <button
                      onClick={() =>
                        handleDeliveryStatusUpdate(parcel, "parcel_picked_up")
                      }
                      className="btn btn-outline btn-square text-[#0fac5d] hover:bg-[#0fac5d] hover:text-black"
                    >
                      <LuPackageCheck className="text-lg" />
                    </button>
                  </div>
                  <div
                    className="relative overflow-visible tooltip tooltip-bottom"
                    data-tip="Mark as Delivery"
                  >
                    <button
                      onClick={() =>
                        handleDeliveryStatusUpdate(parcel, "parcel_delivered")
                      }
                      className="btn btn-outline btn-square text-[#0fac5d] hover:bg-[#0fac5d] hover:text-black"
                    >
                      <MdDoneAll className="text-lg" />
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

export default AssignedDeliveries;
