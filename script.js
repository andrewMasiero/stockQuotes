console.log("printing test");
const myStocks = ["SPY", "QQQ", "SPGP", "VTV", "SMH", "IYW", "VTI"];
for (stock of myStocks) {
  document.body.insertAdjacentHTML("beforeend", `<p>${stock}</p>`);
}
// const url =
//   "https://twelve-data1.p.rapidapi.com/stocks?exchange=NASDAQ&symbol=QQQ&format=json";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "fb9142c424msha2a62eb43daed8bp1e6549jsn58f2988cea6a",
//     "X-RapidAPI-Host": "twelve-data1.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
