import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const SendParcel = () => {

  const {user} = useAuth()

  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const axiosSecure = useAxiosSecure();

  const serviceCenter = useLoaderData();
  const regionsDuplicate = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });
  // console.log(regions)

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenter.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }
    console.log("cost", cost);
    Swal.fire({
      title: "Agree with the Cost ?",
      text: `You will be charged ${cost} taka!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes I agree!",
    }).then((result) => {
      if (result.isConfirmed) {

        // save the parcel info to the database
        axiosSecure.post('/parcels', data)
        .then(res =>{
          console.log('after saving parcel', res.data)
        })

        // Swal.fire({
        //   title: "!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
  };

  const labelClass = "block text-base font-semibold text-gray-700 mb-2";

  return (
    <div className="max-w-7xl mx-auto bg-white border border-gray-300 my-8 md:my-16 p-6 md:p-16 rounded-2xl text-black">
      <h2 className="text-3xl md:text-5xl font-bold">Add Parcel</h2>
      <p className="text-gray-500 font-bold mt-4 md:mt-6 text-lg md:text-xl">
        Enter your parcel details
      </p>

      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-8 md:mt-12">
        {/* parcel type */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          <label className="flex items-center gap-2 text-gray-700 font-semibold">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>

          <label className="flex items-center gap-2 text-gray-700 font-semibold">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>

        {/* parcel info */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-12 mt-6">
          <div>
            <label className={labelClass}>Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </div>

          <div>
            <label className={labelClass}>Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </div>
        </div>

        {/* sender + receiver */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-12 mb-3">
          {/* sender */}
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mt-12 mb-4">
              Sender Details
            </h4>

            <div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div>
                  <label className={labelClass}>Sender Name</label>
                  <input
                    type="text"
                    {...register("senderName")}
                    defaultValue={user?.displayName}
                    className="input w-full"
                    placeholder="Sender Name"
                    readOnly
                  />
                </div>

                {/* Sender pickup */}
                <div>
                  <label className={labelClass}>Sender Pickup Wire house</label>
                  <select
                    {...register("senderDistrict")}
                    className="select w-full"
                  >
                    <option>Select Wire house</option>
                    {districtsByRegion(senderRegion).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* sender address */}
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 my-3">
                <div>
                  <label className={labelClass}>Sender Address</label>
                  <input
                    type="text"
                    {...register("senderAddress")}
                    className="input w-full"
                    placeholder="Sender Address"
                  />
                </div>

                {/* sender contact */}
                <div>
                  <label className={labelClass}>Sender Contact No</label>
                  <input
                    type="text"
                    {...register("senderContactNo")}
                    className="input w-full"
                    placeholder="Sender Contact No"
                  />
                </div>
              </div>
            </div>

            {/* sender email */}
            <div>
              <label className={labelClass}>Sender Email</label>
              <input
                type="text"
                {...register("senderEmail")}
                defaultValue={user?.email}
                className="input w-full mb-3"
                placeholder="Sender Email"
                readOnly
              />
            </div>

            {/* sender region */}
            <label className={labelClass}>Sender Region</label>
            <select
              {...register("senderRegion")}
              className="select w-full mb-3"
            >
              <option>Select your region</option>
              {regions.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>

            {/* sender instruction */}
            <label className={labelClass}>Pickup Instruction</label>
            <textarea
              {...register("senderPickupInstruction")}
              rows="5"
              placeholder="Pickup Instruction..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* ----------------------------------------------------------------------------------------------------------------- */}

          {/* receiver */}
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mt-12 mb-4">
              Receiver Details
            </h4>

            <div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div>
                  <label className={labelClass}>Receiver Name</label>
                  <input
                    type="text"
                    {...register("receiverName")}
                    className="input w-full"
                    placeholder="Receiver Name"
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    Receiver Delivery Wire house
                  </label>
                  <select
                    {...register("receiverDistrict")}
                    className="select w-full"
                  >
                    <option>Select Wire house</option>
                    {districtsByRegion(receiverRegion).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 my-3">
                <div>
                  <label className={labelClass}>Receiver Address</label>
                  <input
                    type="text"
                    {...register("receiverAddress")}
                    className="input w-full"
                    placeholder="Receiver Address"
                  />
                </div>

                <div>
                  <label className={labelClass}>Receiver Contact No</label>
                  <input
                    type="text"
                    {...register("receiverContactNo")}
                    className="input w-full"
                    placeholder="Receiver Contact No"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className={labelClass}>Receiver Email</label>
              <input
                type="text"
                {...register("receiverEmail")}
                className="input w-full mb-3"
                placeholder="Receiver Email"
              />
            </div>

            <label className={labelClass}>Receiver Region</label>
            <select
              {...register("receiverRegion")}
              className="select w-full mb-3"
            >
              <option>Select your region</option>
              {regions.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>

            {/* sender instruction */}
            <label className={labelClass}>Delivery Instruction</label>
            <textarea
              {...register("deliveryInstruction")}
              rows="5"
              placeholder="Delivery Instruction..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        <input
          type="submit"
          className="btn bg-[#caeb66] text-black mt-4 w-full md:w-auto"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
