import CheckoutForm from "@/components/UI/Forms/CheckoutForm/CheckoutForm";

let order = [
  {
    title: "3 Nights at Semiramis Nile Cruise From Aswan",
    price: "$100",
    date: "2025-02-07",
    Adults: 1,
    Children: 0,
    Infants: 0,
  },
];

export default function Checkout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-12 text-darkBlue">
      <div className="col-span-1 lg:col-span-2 ">
        <h2 className="text-2xl mb-4 font-semibold text-orange">
          Billing Details
        </h2>
        {/* form */}

        <CheckoutForm />
        {/* end form */}
      </div>

      <div className="col-span-1 flex flex-col gap-y-4 lg:sticky top-24 h-fit">
        <h2 className="text-2xl mb-4 font-semibold text-orange">Your Order</h2>

        <div className="flex flex-col gap-y-4  text-sm">
          {order.map((item, index) => (
            <div
              key={index}
              className="border-[1px] border-orange rounded-md p-4"
            >
              {/* order title and total */}
              <div className="flex justify-between items-center">
                <h3 className="text-darkBlue font-semibold">{item.title}</h3>
                <p className="text-orange text-xl font-bold">{item.price}</p>
              </div>

              {/* order details */}
              <div className="flex flex-col pt-4">
                <p className="text-darkBlue font-bold">
                  Date: <span className="text-gray-700">{item.date}</span>
                </p>
                <p className="text-darkBlue font-bold">
                  Adults:
                  <span className="text-gray-700">{item.Adults} x (0$)</span>
                </p>
                <p className="text-darkBlue font-bold">
                  Children:
                  <span className="text-gray-700">{item.Children} x (0$)</span>
                </p>
                <p className="text-darkBlue font-bold">
                  Infants:
                  <span className="text-gray-700">{item.Infants} x (0$)</span>
                </p>
              </div>
              {/* end order details */}

              {/* order total */}
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button className="bg-orange text-white px-4 py-2 rounded-md w-full capitalize">
            place order
          </button>
        </div>
      </div>
    </div>
  );
}
