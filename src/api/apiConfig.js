const apiConfig = {
  baseUrl: "https://www.themoviedb.org/",
  apiKey: "089ebbf783aa111ad5ceaa2abae369b1",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/orginal/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
