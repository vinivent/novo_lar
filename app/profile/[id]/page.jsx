"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };
    if (params?.id) fetchPosts();
  }, [params.id]);
  {console.log(userPosts)}
  return (
    <Profile
      name={userName}
      desc={`Bem-vindo ao perfil de ${userName}. Explore o mundo culinário de ${userName} e se inspire com suas receitas!`}
      data={userPosts}
    />
  );
};

export default UserProfile;
