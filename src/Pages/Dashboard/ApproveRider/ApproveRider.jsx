import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp, IoTrashOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { FaMagnifyingGlass } from "react-icons/fa6";

const ApproveRider = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "Pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const updateRidersStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.riderEmail }; // FIXED
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Rider status is set to ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

   const handleApproveRiderDelete = (id) => {
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
          axiosSecure.delete(`/riders/${id}`).then((res) => {
            console.log(res.data);
            if (res.data.deletedCount) {
              // refresh the data
              refetch()
  
              Swal.fire({
                title: "Deleted!",
                text: "Rider has been deleted.",
                icon: "success",
              });
            }
          });
        }
      });
    };

  const handleApproval = (rider) => {
    updateRidersStatus(rider, "approved");
  };

  const handleRemove = (rider) => {
    updateRidersStatus(rider, "removed");
  };

  return (
    <div>
      <h2 className="text-5xl">Rider Pending Approval : {riders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th># No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Districts</th>
              <th>Application Status</th>
              <th>Work Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, i) => (
              <tr key={rider._id}>
                <th>{i + 1}</th>
                <td>{rider.riderName}</td>
                <td>{rider.riderEmail}</td>
                <td>{rider.role}</td>
                <td>{rider.riderDistrict}</td>
                
                <td>
                  <p
                    className={`${
                      rider.status === "approved"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {rider.status}
                  </p>
                </td>
                <td>{rider.workStatus}</td>
                <td>
                  <div
                    className="relative overflow-visible tooltip tooltip-bottom mr-3"
                    data-tip="View"
                  >
                    <button className="btn btn-outline btn-square text-[#60a5fa] hover:bg-[#60a5fa] hover:text-black">
                      <FaMagnifyingGlass className="text-lg" />
                    </button>
                  </div>
                  <div
                    className="relative overflow-visible tooltip tooltip-bottom"
                    data-tip="Accept"
                  >
                    <button
                      onClick={() => handleApproval(rider)}
                      className="btn btn-outline btn-square text-[#0fac5d] hover:bg-[#0fac5d] hover:text-black"
                    >
                      <FaUserCheck className="text-lg" />
                    </button>
                  </div>
                  <div
                    className="relative overflow-visible tooltip tooltip-bottom mx-3"
                    data-tip="Remove"
                  >
                    <button
                      onClick={() => handleRemove(rider)}
                      className="btn btn-outline btn-square text-[#fbbf24] hover:bg-[#fbbf24] hover:text-black"
                    >
                      <IoPersonRemoveSharp className="text-lg" />
                    </button>
                  </div>

                  <div
                    className="relative overflow-visible tooltip tooltip-bottom"
                    data-tip="Delete"
                  >
                    <button onClick={() =>  handleApproveRiderDelete(rider._id)}
                     className="btn btn-outline btn-square text-[#f87171] hover:bg-[#f87171] hover:text-black">
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

export default ApproveRider;
