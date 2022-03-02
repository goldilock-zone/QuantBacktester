console.log("Hi");
var responsejson;

const output = fetch("https://yfapi.net/v8/finance/chart/AAPL?range=max&region=US&interval=1d&lang=en", {
  headers: {
    Accept: "application/json",
    "X-Api-Key": "lesB629pEe64hazEOLBPS1yCDuUd9XH13rhPUeIb"
  }
})
.then(res => res.json())
.then(data => {
    console.log(data.chart.result["0"].indicators.quote["0"])
    document.getElementById("chart").innerText += data.chart.result
})

// .then((response) => {
//     const responsejson = response.json()
//     return responsejson
// });

console.log()


