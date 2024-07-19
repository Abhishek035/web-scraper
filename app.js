const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Serve static files (like HTML, CSS, JS) from a directory
app.use(express.static('public'));

// Handle search requests
app.get('/search', async (req, res) => {
  try {
    // Extract query from request
    const query = req.query.q;

    // Make request to external API
    const response = await axios.post('https://vd92pust8chg7wv2nbxlxiqp-fast.searchtap.net/v2', {
      query,
      fields: ['*'],
      textFacets: [],
      highlightFields: [],
      searchFields: ['*'],
      filter: 'isSearchable = 1',
      sort: ['-isActive', '-popularityScore', '-_rank'],
      skip: 0,
      count: 30,
      collection: 'BDDL4C2HPJY6N6XMSEPYZX28',
      facetCount: 99,
      groupCount: -1,
      typoTolerance: 1,
      textFacetFilters: {},
      numericFacets: {},
      numericFacetFilters: {},
      textFacetQuery: null,
      geo: {}
    }, {
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer JSFJFRQFZK7Y42VAKAS2TABZ'
      }
    });

    // Process response data
    const results = response.data.results;
    const array = results.map(object => {
      const { discount, image, price, discounted_price, handle, st_title_tag, reviews_count, title, st_original_title, reviews_average } = object;
      const src = image && image.src ? image.src : '';
      const alt = image && image.alt ? image.alt : '';
      return { discount, src, alt, price, discounted_price, handle, st_title_tag, reviews_count, title, st_original_title, reviews_average };
    });

    // Send response
    res.json(array);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
