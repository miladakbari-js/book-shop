const setCookie = (tokens) => {
  document.cookie = `token=${tokens}; max-age=${1 * 24 * 60 * 60}`;
  //   document.cookie = `refreshToken=${tokens}; max-age=${
  //     30 * 24 * 60 * 60
  //   }`;
};

const getCooKie = (cookieName) => {
  return document.cookie.split("=")[1]
};

export { setCookie, getCooKie };
