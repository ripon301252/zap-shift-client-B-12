import React from "react";
import riderImg from "../../assets/agent-pending.png";
import { useForm, useWatch } from "react-hook-form";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const { register, handleSubmit, control } = useForm();
  
  const axiosSecure = useAxiosSecure();
  const serviceCenter = useLoaderData();

  const regionsDuplicate = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const riderRegion = useWatch({ control, name: "riderRegion" });

  const labelClass = "block text-base font-semibold text-gray-700 mb-1";

  const handleRiderApplication = (data) => {
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your application has been submitted. Please Wait",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenter.filter((c) => c.region === region);
    return regionDistricts.map((d) => d.district);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10 py-10">
      <h2 className="text-4xl font-bold pt-10 md:pt-14 text-gray-900 text-center md:text-left">
        Be a Rider
      </h2>

      <p className="mt-3 mb-8 text-gray-600 leading-relaxed text-center md:text-left ">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
        From personal <br /> packages to business shipments — we deliver on time, every time.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* FORM SECTION */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border">
          <h4 className="text-2xl font-semibold mb-6 text-gray-800">
            Tell us about yourself
          </h4>

          <form onSubmit={handleSubmit(handleRiderApplication)}>
            {/* Name + Pickup */}
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Your Name</label>
                <input
                  type="text"
                  {...register("riderName")}
                  className="input input-bordered w-full rounded-xl focus:outline-none focus:ring"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className={labelClass}>Rider Pickup Warehouse</label>
                <select
                  {...register("riderDistrict")}
                  className="select select-bordered w-full rounded-xl focus:outline-none focus:ring"
                >
                  <option>Select Warehouse</option>
                  {districtsByRegion(riderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Address + Contact */}
            <div className="grid md:grid-cols-2 gap-5 my-4">
              <div>
                <label className={labelClass}>Your Address</label>
                <input
                  type="text"
                  {...register("riderAddress")}
                  className="input input-bordered w-full rounded-xl focus:outline-none focus:ring"
                  placeholder="Your Address"
                />
              </div>

              <div>
                <label className={labelClass}>Your Contact No</label>
                <input
                  type="text"
                  {...register("riderContactNo")}
                  className="input input-bordered w-full rounded-xl focus:outline-none focus:ring"
                  placeholder="Your Contact No"
                />
              </div>
            </div>

            {/* License */}
            <div className="mb-3">
              <label className={labelClass}>Driving License Number</label>
              <input
                type="text"
                {...register("riderLicenseNumber")}
                className="input input-bordered w-full rounded-xl focus:outline-none focus:ring"
                placeholder="Driving License Number"
              />
            </div>

            {/* NID */}
            <div className="mb-3">
              <label className={labelClass}>Your NID Number</label>
              <input
                type="text"
                {...register("riderNIDNumber")}
                className="input input-bordered w-full rounded-xl focus:outline-none focus:ring"
                placeholder="Your NID Number"
              />
            </div>

            {/* Bike */}
            <div className="mb-3">
              <label className={labelClass}>Your Bike Number</label>
              <input
                type="text"
                {...register("riderBike")}
                className="input input-bordered w-full rounded-xl focus:outline-none focus:ring"
                placeholder="Your Bike Number"
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className={labelClass}>Your Email</label>
              <input
                type="text"
                {...register("riderEmail")}
                className="input input-bordered w-full rounded-xl focus:outline-none focus:ring"
                placeholder="Your Email"
              />
            </div>

            {/* Region */}
            <label className={labelClass}>Your Region</label>
            <select
              {...register("riderRegion")}
              className="select select-bordered w-full rounded-xl focus:outline-none focus:ring"
            >
              <option>Select your region</option>
              {regions.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>

            {/* Submit */}
            <button
              type="submit"
              className="btn bg-[#caeb66] border-none text-black w-full mt-6 rounded-xl hover:bg-[#b5d95c]"
            >
              Apply as a Rider
            </button>
          </form>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex justify-center">
          <img
            src={riderImg}
            alt="rider"
            className="w-full max-w-md drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Rider;
