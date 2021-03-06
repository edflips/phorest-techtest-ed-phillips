# Phorest tech test - Ed Phillips

> ~~https://phorest-techtest-ed-phillips.netlify.com/~~

## Requirements

You'll need an `.env` file in the root of this project for it to work, containing the following variables:

```text
NUXT_ENV_BASIC_AUTH_USER=
NUXT_ENV_BASIC_AUTH_PASS=
NUXT_ENV_BUSINESS_ID=
NUXT_ENV_BRANCH_ID=
NUXT_ENV_API_BASE=https://api-gateway-dev.phorest.com/third-party-api-server/api
```

Please use the details provided in the tech test description.

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# test
$ npm run test
```

## About

This is a Nuxt Vue.js SPA. The parts you will most likely be interested in are located in the `pages` and `components` directories. Nuxt automatically generates the router, so 'page' components which contain most of the functionality are inside `pages`.

> Show us examples of 2-3 patterns you feel important to building an application like this and we will use them to drive the discussion while reviewing the test with you.

For a simpler UI, I decided to create a multifaceted search which queries the client API endpoint by `email`, `phone`, `firstName` and `lastName` simultaneously, then reducing the results to remove duplicates.

```javascript
removeDuplicateResults(clientArray) {
  const clientList = clientArray.reduce(
    (accumulator, searchTerm) => {
      if (!searchTerm.data.page.size) {
        return accumulator
      }
      searchTerm.data._embedded.clients.forEach(
        customer => (accumulator.list[customer.clientId] = customer)
      )
      return accumulator
    },
    { list: {} }
  )

  clientList.results = Object.keys(clientList.list).length

  return clientList
}
```

Validating user input is another important part of this. I went with a whitelist function which only allows alphanumeric and common email characters. This goes for manually entered uri parameters too, which are validated before triggering a query to the API.

Finally, having the app watch the query parameters allows for deep linking, and for the back button to work properly; this means that the user can choose a customer from the search results, look at them, and then go back to the search results to select another result.
