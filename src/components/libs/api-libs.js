export const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = response.json();
  return anime;
};

export const getNextedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  return shuffle(response.data?.flatMap((item) => item[objectProperty]));
};

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.leght - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };
  return response;
};
