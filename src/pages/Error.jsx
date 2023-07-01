import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <section class="flex items-center justify-center h-screen text-center px-5 ">
        <div class="max-w-3xl mx-auto">
          <div>
            <h1 class="text-4xl lg:text-5xl mb-8">We can’t find that page</h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist or has been moved.</p>
            <div class="flex items-center mt-6 gap-x-3">

              <Link to="/" class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-indigo-800 rounded-lg shrink-0 sm:w-auto hover:bg-indigo-500 dark:hover:bg-blue-500 dark:bg-blue-600">
                Take me home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}