export function makeid(length) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const sortByTrending = (categoryList) => {
  const findTrending = categoryList.findIndex(
    (trend) => trend.type === "trending"
  );
  const trendCategory = categoryList[findTrending];
  const rest = categoryList.filter((cat) => cat.type !== "trending");

  const trendingFirst = [trendCategory, ...rest];

  return trendingFirst;
};
