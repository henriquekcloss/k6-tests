const environment = __ENV;

const environmentBaseUrls = {
  dev: {
    k6: "http://test.k6.io",
  },
  production: {
    k6: "https://prod-api.k6.io",
  },
};

const baseUrls =
  environmentBaseUrls[
    Object.keys(environmentBaseUrls).includes(environment.ENVIRONMENT)
      ? environment.ENVIRONMENT
      : "dev"
  ];

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

module.exports = { baseUrls, header };
