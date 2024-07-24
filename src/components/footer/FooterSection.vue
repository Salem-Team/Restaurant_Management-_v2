<template>
  <!-- <form class="flex items-center max-w-sm mx-auto">
    <label for="simple-search" class="sr-only">Subscribe</label>
    <div class="relative w-full">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      ></div>
      <input
        type="text"
        id="simple-search"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search branch name..."
        required
      />
    </div>
    <button
      type="submit"
      class="p-2.5 ms-2 text-sm text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Subscribe Now
      <span class="sr-only">Search</span>
    </button>
  </form> -->

  <footer class="bg-white m-5 border-t dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div
          class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 m-5 p-5 border-r"
        >
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Company
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">About</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Blog </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Properties</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Agents</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Services</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Contact us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Services
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Rend A Home</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Sell A Home</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Buy A Home</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Property Insurance</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Member Support</a>
              </li>
              <li>
                <a href="#" class="hover:underline">Experience Agent</a>
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
            >
              Uitility pages
            </h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
              <li class="mb-4">
                <a href="#" class="hover:underline">Style Guide</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Licenses</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Changelog</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Password</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">Not found</a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">More Template</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mb-6 md:mb-0 box">
          <a href="#" class="flex items-center">
            <span
              class="self-center text-primary text-2xl font-bold whitespace-nowrap dark:text-white"
              >Contact Us</span
            >
          </a>
          <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
          <p>123 456 7890</p>
          <p>support@example.com</p>
        </div>
      </div>
      <hr
        class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
      />
      <div class="flex justify-center items-center">
        <span
          class="text-sm text-gray-500 text-center mx-auto dark:text-gray-400"
        >
          Copyright © Properland | Designed by VictorFlow - Powered by Webflow.
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.box {
  /* Contact Us */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 39px;
  gap: 10px;
  margin: 10px;
  left: 905px;
  top: 46px;

  background: #ffbb50;
  border-radius: 5px;
  font-size: 12px;
}
h2 {
  color: var(--primary-color);
}
li {
  font-size: 12px;
}

a {
  color: var(--secondary-color);
}
</style>
