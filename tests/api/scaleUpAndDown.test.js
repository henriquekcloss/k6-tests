import http from "k6/http";
import { check } from "k6";
const { baseUrls } = require("../support/requestConfig.js");

export const options = {
  scenarios: {
    ramp_up_and_down: {
      executor: "ramping-arrival-rate",
      startRate: 1,
      timeUnit: "1s",
      preAllocatedVUs: 20,
      maxVUs: 100,
      stages: [
        { target: 1, duration: "30s" },
        { target: 20, duration: "2m" },
        { target: 0, duration: "1m" },
      ],
    },
  },
};

export default function () {
  const getTest = http.get(baseUrls.k6);

  check(getTest, {
    "Expect HTTP Status 200": (response) => response.status === 200,
  });
}
