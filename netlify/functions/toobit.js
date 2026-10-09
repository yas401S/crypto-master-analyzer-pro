const TOOBIT_API = "https://api.toobit.com";

exports.handler = async function () {
const endpoints = [
"/quote/v1/contract/ticker/24hr",
"/quote/v1/contract/ticker/price"
];

for (const endpoint of endpoints) {
try {
const response = await fetch(TOOBIT_API + endpoint, {
headers: { "Accept": "application/json" }
});

  const body = await response.text();

  if (!response.ok) continue;

  let data;
  try {
    data = JSON.parse(body);
  } catch {
    continue;
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store"
    },
    body: JSON.stringify({
      success: true,
      source: "Toobit",
      endpoint,
      data
    })
  };
} catch (error) {
  // Try the next endpoint.
}

}

return {
statusCode: 502,
headers: {
"Content-Type": "application/json; charset=utf-8",
"Access-Control-Allow-Origin": "*"
},
body: JSON.stringify({
success: false,
source: "Toobit",
error: "دریافت اطلاعات از API توبیت ناموفق بود."
})
};
};
