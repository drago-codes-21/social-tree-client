import { Link } from "react-router-dom";

export const UserPopOver = () => {
  return (
    <>
      <button
        data-popover-target="popover-user-profile"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        User profile
      </button>
      <div
        data-popover
        id="popover-user-profile"
        role="tooltip"
        class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600"
      >
        <div class="p-3">
          <div class="flex items-center justify-between mb-2">
            <Link to="#">
              <img
                class="w-10 h-10 rounded-full"
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Jese Leos"
              />
            </Link>
            <div>
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </div>
          <p class="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <Link to="#">Jese Leos</Link>
          </p>
          <p class="mb-3 text-sm font-normal">
            <Link href="#" class="hover:underline">
              @jeseleos
            </Link>
          </p>
          <p class="mb-4 text-sm">
            Open-source contributor. Building
            <Link
              to="#"
              class="text-blue-600 dark:text-blue-500 hover:underline"
            >
              flowbite.com
            </Link>
            .
          </p>

          <ul class="flex text-sm">
            <li class="mr-2">
              <Link to="#" class="hover:underline">
                <span class="font-semibold text-gray-900 dark:text-white">
                  799
                </span>
                <span>Following</span>
              </Link>
            </li>
            <li>
              <Link to="#" class="hover:underline">
                <span class="font-semibold text-gray-900 dark:text-white">
                  3,758
                </span>
                <span>Followers</span>
              </Link>
            </li>
          </ul>
        </div>
        <div data-popper-arrow></div>
      </div>
    </>
  );
};

export const LikeIcon = () => {
  return (
    <div>
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
      </svg>
    </div>
  );
};

export const StarIcon = () => {
  return (
    <div className="h-8 w-8 text-yellow-300">
      <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        ></path>
      </svg>
    </div>
  );
};
