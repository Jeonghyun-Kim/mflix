export const searchMovie: (term: string) => Promise<Movie[]> = async (term) => {
  const data = await fetch(`/api/movie/search?term=${term}`);
  return await data.json();
};
