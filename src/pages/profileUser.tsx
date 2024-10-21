import * as React from "react";
import UserProfileCard from "../components/UserProfile";
import { IsLoadingPage } from "../components/isLoading";
import { fetchProfileUsers } from "../api/services/profileUser";
import { useQuery } from "@tanstack/react-query";
import { IUsers } from "../types/users/Users.Type";
import { useParams } from "react-router-dom";

const ProfileUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, data } = useQuery<IUsers>({
    queryKey: ["repoProData", id],
    queryFn: async () => fetchProfileUsers(parseInt(id!)),
  });

  if (isLoading) return <IsLoadingPage />;

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <div className="mt-5 mb-5">
        <UserProfileCard
          id={data?.id ?? 0}
          firstName={data?.firstName ?? ""}
          lastName={data?.lastName ?? ""}
          maidenName={data?.maidenName ?? ""}
          age={data?.age ?? 0}
          gender={data?.gender ?? ""}
          email={data?.email ?? ""}
          phone={data?.phone ?? ""}
          username={data?.username ?? ""}
          password={data?.password ?? ""}
          birthDate={data?.birthDate ?? ""}
          image={data?.image ?? ""}
          bloodGroup={data?.bloodGroup ?? ""}
          height={data?.height ?? 0}
          weight={data?.weight ?? 0}
          eyeColor={data?.eyeColor ?? ""}
          ip={data?.ip ?? ""}
          role={data?.role ?? ""}
        />
      </div>
    </>
  );
};

export default ProfileUser;
