<template>
  <div class="md:flex mt-12 md:mx-24 flex-row justify-between items-center p-4">
    <div class="md:w-1/2 md:mb-0 mb-5 text-center md:text-left">
      <a
        href="#"
        class="flex items-center justify-center md:justify-start space-x-3 rtl:space-x-reverse"
      >
        <img src="../../assets/media/Icon.png" class="h-8" alt="Logo" />
        <span
          class="self-center text-2xl text-primary font-semibold whitespace-nowrap"
        >
          ProperLand
        </span>
      </a>
      <br />

      <span
        class="flex items-center justify-center md:justify-start space-x-3 rtl:space-x-reverse"
      >
        <img src="../../assets/media/media.svg" alt="" />
      </span>
    </div>

    <div class="md:w-1/2 md:border-l text-center md:text-left">
      <h3 class="text-primary m-3 mb-3 text-2xl">Get a free estimate</h3>
      <p class="text-sm m-3 text-secondary">
        Leverage agile frameworks to provide a robust synopsis for high-level
        overviews. Approaches overall value proposition. Organically grow the
        holistic world view of disruptive.
      </p>
      <form
        class="flex m-3 items-center justify-center md:justify-start max-w-sm mx-auto mt-4"
      >
        <label for="simple-search" class="sr-only">Subscribe</label>
        <div class="relative w-full m-3">
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
            placeholder="your email address here"
            required
          />
        </div>
        <button
          type="submit"
          class="p-3 w-full ml-2 text-sm text-white bg-[#3B3A5D] rounded-lg border border-[#3B3A5D] hover:bg-[#3B3A5D] focus:ring-4 focus:outline-none focus:ring-[#3B3A5D]"
        >
          Subscribe Now
          <span class="sr-only">Search</span>
        </button>
      </form>
    </div>
  </div>

  <footer class="bg-white m-5 border-t">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div
          class="grid grid-cols-2 gap-8 md:1/2 w-full sm:gap-6 sm:grid-cols-3 m-5 p-5 border-r"
        >
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Company
            </h2>
            <ul class="text-gray-500 font-medium">
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
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Services
            </h2>
            <ul class="text-gray-500 font-medium">
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
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Uitility pages
            </h2>
            <ul class="text-gray-500 font-medium">
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
        <div class="mb-6 md:1/2 w-full md:mb-0 box">
          <a href="#" class="flex items-center">
            <span
              class="self-center text-primary text-2xl font-bold whitespace-nowrap"
              >Contact Us</span
            >
          </a>
          <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
          <p>123 456 7890</p>
          <p>support@example.com</p>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div class="flex justify-center items-center">
        <span class="text-sm text-gray-500 text-center mx-auto">
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
