import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
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
                    className="input w-full"
                    placeholder="Sender Name"
                  />
                </div>

                <div>
                  <label className={labelClass}>Sender Pickup Wire house</label>
                  <select className="select w-full">
                    <option disabled>Select Wire house</option>
                    <option>Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
                  </select>
                </div>
              </div>

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

            <label className={labelClass}>Sender Region</label>
            <select className="select w-full mb-3">
              <option disabled>Select your region</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>

            <label className={labelClass}>Pickup Instruction</label>
            <textarea
              rows="5"
              placeholder="Pickup Instruction..."
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

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
                  <label className={labelClass}>Receiver Delivery Wire house</label>
                  <select className="select w-full">
                    <option disabled>Select Wire house</option>
                    <option>Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
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

            <label className={labelClass}>Receiver Region</label>
            <select className="select w-full mb-3">
              <option disabled>Select your region</option>
              <option>Crimson</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>

            <label className={labelClass}>Delivery Instruction</label>
            <textarea
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
