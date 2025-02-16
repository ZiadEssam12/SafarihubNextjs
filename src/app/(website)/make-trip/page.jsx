import MakeYourTrip from "@/components/UI/MakeYourTrip/MakeYourTrip";

export default function page() {
  return (
    <div
      id="makeATrip"
      className="min-h-screen flex flex-col justify-between gap-y-12 py-12 scroll-m-12 text-darkBlue"
    >
      {/* head */}
      <div>
        <h1 className="font-bold text-3xl text-orange text-center ">
          Customize Your Trip
        </h1>
      </div>
      {/* end head */}

      {/* body */}
      <div className=" flex-1 grid gap-3 grid-cols-6 bg-white rounded-lg p-3">
        <MakeYourTrip />
      </div>
      {/* end body */}
    </div>
  );
}
