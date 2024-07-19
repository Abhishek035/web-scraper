const axios = require('axios');
let data = JSON.stringify({
  "query": "speakers",
  "fields": [
    "*"
  ],
  "textFacets": [],
  "highlightFields": [],
  "searchFields": [
    "*"
  ],
  "filter": "isSearchable = 1",
  "sort": [
    "-isActive",
    "-popularityScore",
    "-_rank"
  ],
  "skip": 30,
  "count": 30,
  "collection": "BDDL4C2HPJY6N6XMSEPYZX28",
  "facetCount": 99,
  "groupCount": -1,
  "typoTolerance": 1,
  "textFacetFilters": {},
  "numericFacets": {},
  "numericFacetFilters": {},
  "textFacetQuery": null,
  "geo": {}
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://vd92pust8chg7wv2nbxlxiqp-fast.searchtap.net/v2',
  headers: { 
    'Accept': 'application/json, text/plain, */*', 
    'Accept-Language': 'en-US,en;q=0.9', 
    'Connection': 'keep-alive', 
    'Content-Type': 'application/json', 
    'Origin': 'https://www.boat-lifestyle.com', 
    'Referer': 'https://www.boat-lifestyle.com/', 
    'Sec-Fetch-Dest': 'empty', 
    'Sec-Fetch-Mode': 'cors', 
    'Sec-Fetch-Site': 'cross-site', 
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36', 
    'authorization': 'Bearer JSFJFRQFZK7Y42VAKAS2TABZ', 
    'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"Windows"'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

module.exports = data
