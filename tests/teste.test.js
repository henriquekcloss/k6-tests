import http from "k6/http";
import { check } from "k6";

export const options = {
  vus: 1,
  duration: "60s",
};

export default function () {
  const getTest = http.get("https://test-api.k6.io");

  check(getTest, {
    "Expect HTTP Status 200": (response) => response.status === 200,
  });
}
