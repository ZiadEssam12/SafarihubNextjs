import CheckoutFormWrappr from "@/components/UI/Forms/CheckoutForm/CheckoutFormWrapper";

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
    <div className="min-h-screen text-darkBlue dark:text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Billing Details Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-8">
                <div className="w-2 h-8 bg-gradient-to-b from-orange to-orange/70 rounded-full mr-4"></div>
                <h2 className="text-3xl font-bold text-darkBlue">
                  Billing Details
                </h2>
              </div>

              {/* Enhanced form container */}
              <div className="rounded-xl p-6 border">
                <CheckoutFormWrappr />
              </div>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="col-span-1">
            <div className="lg:sticky top-24 space-y-6">
              {/* Order Header */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange to-orange/70 rounded-full mr-4"></div>
                  <h2 className="text-2xl font-bold text-darkBlue">
                    Your Order
                  </h2>
                </div>

                {/* Order Items */}
                <div className="space-y-4">
                  {order.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-orange/5 to-orange/10 border-2 border-orange/20 rounded-xl p-6 transition-all duration-300 hover:shadow-md hover:border-orange/40"
                    >
                      {/* order title and total */}
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-darkBlue font-semibold text-lg leading-tight pr-4">
                          {item.title}
                        </h3>
                        <div className="bg-orange text-white px-3 py-1 rounded-full">
                          <p className="font-bold text-lg">{item.price}</p>
                        </div>
                      </div>

                      {/* order details */}
                      <div className="bg-white/60 rounded-lg p-4 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-darkBlue font-medium">
                            Date:
                          </span>
                          <span className="text-gray-700 font-semibold">
                            {item.date}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-darkBlue font-medium">
                            Adults:
                          </span>
                          <span className="text-gray-700">
                            {item.Adults} × (Free)
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-darkBlue font-medium">
                            Children:
                          </span>
                          <span className="text-gray-700">
                            {item.Children} × (Free)
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-darkBlue font-medium">
                            Infants:
                          </span>
                          <span className="text-gray-700">
                            {item.Infants} × (Free)
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Total Summary */}
                <div className="mt-6 bg-gray-50 rounded-xl p-4 border-2 border-dashed border-gray-300">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-darkBlue">Total:</span>
                    <span className="font-bold text-2xl text-orange">$100</span>
                  </div>
                </div>

                {/* Place Order Button */}
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-orange to-orange/90 hover:from-orange/90 hover:to-orange text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange/30 text-lg">
                    <span className="flex items-center justify-center">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      Place Order
                    </span>
                  </button>
                </div>

                {/* Security Badge */}
                <div className="mt-4 flex items-center justify-center text-sm text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1L5 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V4l-5-3zM8 8a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1zm0 4a1 1 0 011-1h6a1 1 0 110 2H9a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Secure Checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
