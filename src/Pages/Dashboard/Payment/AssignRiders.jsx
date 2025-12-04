import { useQuery } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoTrashOutline } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Swal from "sweetalert2";

const AssignRiders = () => {
  const [selectedParcel, setSelectedParcel] = useState(null);

  const axiosSecure = useAxiosSecure();

  const riderModalRef = useRef();

  const { data: parcels = [], refetch: parcelsRefetch } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels?deliveryStatus=pending-pickup`
      );
      return res.data;
    },
  });

  // todo: invalidate query after assigning a rider
  const { data: riders = [] } = useQuery({
    queryKey: ["riders", selectedParcel?.senderDistrict, "available"],
    enabled: !!selectedParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/riders?status=approved&riderDistrict=${selectedParcel?.senderDistrict}&workStatus=available`
      );
      console.log(res.data);
      console.log(selectedParcel);
      return res.data;
    },
  });

  const openAssignRiderModal = (parcel) => {
    setSelectedParcel(parcel);
    riderModalRef.current.showModal();
  };

  const handleAssignRider = (rider) => {
    const riderAssignInfo = {
      riderId: rider._id,
      riderEmail: rider.riderEmail,
      riderName: rider.riderName,
      parcelId: selectedParcel._id,
      trackingId: selectedParcel.trackingId
    };
    axiosSecure
      .patch(`/parcels/${selectedParcel._id}`, riderAssignInfo)
      .then((res) => {
        console.log(res?.data?.modifiedCount)
        if (res?.data?.parcelUpdate?.modifiedCount) {
          riderModalRef.current.close();
          parcelsRefetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Rider has been assigned.`,
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-5xl">Assign Riders : {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th># No.</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Created At</th>
              <th>Pickup District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>{parcel.createdAt}</td>
                <td>{parcel.senderDistrict}</td>
                <td>
                  <div
                    className="relative overflow-visible tooltip tooltip-bottom mr-3"
                    data-tip="Find Rider"
                  >
                    <button
                      onClick={() => openAssignRiderModal(parcel)}
                      className="btn btn-outline btn-square text-[#60a5fa] hover:bg-[#60a5fa] hover:text-black"
                    >
                      <FaMagnifyingGlass className="text-lg" />
                    </button>
                  </div>
                  <div
                    className="relative overflow-visible tooltip tooltip-bottom"
                    data-tip="Delete"
                  >
                    <button
                      // onClick={() => handleParcelDelete(parcel._id)}
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

      <dialog
        ref={riderModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Riders: {riders.length}</h3>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>district</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {riders.map((rider, i) => (
                  <tr key={rider._id}>
                    <th>{i + 1}</th>
                    <td>{rider.riderName}</td>
                    <td>{rider.riderEmail}</td>
                    <td>{rider.riderDistrict}</td>
                    <td>
                      <div
                        className="relative overflow-visible tooltip tooltip-bottom mr-3"
                        data-tip="Assign Rider"
                      >
                        <button
                          onClick={() => handleAssignRider(rider)}
                          className="btn btn-outline btn-square text-[#0fac5d] hover:bg-[#0fac5d] hover:text-black"
                        >
                          <FaUserCheck className="text-lg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRiders;
