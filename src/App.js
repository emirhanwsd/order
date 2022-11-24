const App = () => (
  <div className="bg-gray-50 dark:bg-zinc-900 dark:text-zinc-100 flex items-center justify-center py-16">
    <div className="w-full max-w-screen-xl space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-end gap-x-4">
          <h1 className="text-3xl font-semibold">Order #00001</h1>

          <a href="#" className="text-indigo-600 font-medium hover:underline">
            View invoice
          </a>
        </div>

        <p className="text-gray-500 dark:text-zinc-500">
          Order placed{" "}
          <span className="text-gray-900 dark:text-zinc-200 font-semibold">
            November 04, 2022
          </span>
        </p>
      </div>

      <div className="flex flex-col shadow-sm rounded-lg">
        <div className="p-8 border dark:border-zinc-800 border-b-none rounded-t-lg flex gap-x-8">
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4e9b9d43-0379-4b0f-8798-5ad5cccfbf13/air-jordan-1-mid-se-mens-shoes-6Dvgl8.png"
            alt="Air Jordan 1 Mid SE"
            className="h-48 w-48 object-cover rounded-lg shadow-sm"
          />

          <div className="flex flex-col gap-y-2 max-w-md">
            <h5 className="font-medium">Air Jordan 1 Mid SE</h5>

            <span className="font-medium">$130.00</span>

            <p className="text-gray-500 dark:text-zinc-500">
              Stand out with timeless hoops style. Premium leather gets
              polished, shined and textured to deliver a fresh take on the shoe
              that started it all.
            </p>
          </div>

          <div className="flex flex-col gap-y-2 max-w-md">
            <h5 className="font-medium">Delivery adress</h5>

            <div className="flex flex-col text-gray-500 dark:text-zinc-500">
              <span>Floyd Miles</span>

              <span>7363 Cynthia Pass</span>

              <span>Toronto, ON N3Y 4H8</span>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 max-w-md ml-16">
            <h5 className="font-medium">Shipping updates</h5>

            <div className="flex flex-col gap-y-2 text-gray-500 dark:text-zinc-500">
              <span>a***@example.com</span>

              <span>1*********40</span>

              <a
                href="#"
                className="text-indigo-600 hover:underline font-medium"
              >
                Edit
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 border dark:border-zinc-800 border-t-0 rounded-b-lg flex flex-col gap-y-4">
          <p className="font-medium">Preparing to ship on November 04, 2022</p>

          <div className="relative">
            <div className="h-2.5 bg-gray-200 dark:bg-indigo-900/60 rounded-full" />

            <div className="absolute inset-0 h-2.5 w-[36%] bg-indigo-600 dark:bg-indigo-900 rounded-full z-10" />
          </div>

          <div className="flex items-center justify-between font-medium text-gray-500 dark:text-zinc-500">
            <span className="text-indigo-600">Order placed</span>

            <span className="text-indigo-600">Processing</span>

            <span>Shipped</span>

            <span>Delivered</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col shadow-sm rounded-lg">
        <div className="p-8 border dark:border-zinc-800 border-b-none rounded-t-lg flex gap-x-8">
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3e7dead-1ad2-4c40-996d-93ebc9df0fca/dunk-low-retro-mens-shoes-8t3K7k.png"
            alt="Nike Dunk Low Retro"
            className="h-48 w-48 object-cover rounded-lg shadow-sm"
          />

          <div className="flex flex-col gap-y-2 max-w-md">
            <h5 className="font-medium">Nike Dunk Low Retro</h5>

            <span className="font-medium">$110.00</span>

            <p className="text-gray-500 dark:text-zinc-500">
              Created for the hardwood but taken to the streets, the Nike Dunk
              Low Retro returns with crisp overlays and original team colors.
            </p>
          </div>

          <div className="flex flex-col gap-y-2 max-w-md">
            <h5 className="font-medium">Delivery adress</h5>

            <div className="flex flex-col text-gray-500 dark:text-zinc-500">
              <span>Floyd Miles</span>

              <span>7363 Cynthia Pass</span>

              <span>Toronto, ON N3Y 4H8</span>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 max-w-md ml-16">
            <h5 className="font-medium">Shipping updates</h5>

            <div className="flex flex-col gap-y-2 text-gray-500 dark:text-zinc-500">
              <span>a***@example.com</span>

              <span>1*********40</span>

              <a
                href="#"
                className="text-indigo-600 hover:underline font-medium"
              >
                Edit
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 border dark:border-zinc-800 border-t-0 rounded-b-lg flex flex-col gap-y-4">
          <p className="font-medium">Preparing to ship on November 05, 2022</p>

          <div className="relative">
            <div className="h-2.5 bg-gray-200 dark:bg-indigo-900/60 rounded-full" />

            <div className="absolute inset-0 h-2.5 w-1/6 bg-indigo-600 dark:bg-indigo-900 rounded-full z-10" />
          </div>

          <div className="flex items-center justify-between font-medium text-gray-500 dark:text-zinc-500">
            <span className="text-indigo-600">Order placed</span>

            <span>Processing</span>

            <span>Shipped</span>

            <span>Delivered</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
