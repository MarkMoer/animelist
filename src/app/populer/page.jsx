"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "../../components/libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
