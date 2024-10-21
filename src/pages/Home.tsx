import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { IUsers } from "../types/users/Users.Type";
import UserCard from "../components/UserCard";
import { fetchUsers } from "../api/services/listUser";
import { IsLoadingPage } from "../components/isLoading";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  const { isLoading, error, data } = useQuery<IUsers[]>({
    queryKey: ["repoData", page],
    queryFn: async () => fetchUsers(page, limit),
  });

  if (isLoading) return <IsLoadingPage />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <main className="mt-5 mb-5">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-3 overflow-hidden">
          {data?.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              image={user.image}
              crypto={user.crypto ? {
                coin: user.crypto.coin,
                network: user.crypto.network,
                wallet: user.crypto.wallet,
              } : { coin: "N/A", network: "N/A", wallet: "N/A" }}
            />
          ))}
        </div>

        <div className="container mx-auto flex justify-center items-center py-5">
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <svg
              className="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Previous
          </button>
          <p className="px-3 border-b border-b-gray-500">{page}</p>
          <button
            onClick={() => setPage((old) => old + 1)}
            disabled={data && data.length < limit}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </main>
    </>
  );
};

export default HomePage;
