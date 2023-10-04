import { afterAll, beforeAll } from "vitest";

const original_fetch = global.fetch;

// Using any here for now
const get_proxied_url = (url: any) => {
  const newURL = typeof url === "object" ? url : new URL(url);
  newURL.host = "localhost";
  newURL.port = "9090";
  newURL.protocol = "http:";

  return newURL.href;
}

beforeAll(() => {
  global.fetch = async (url) => {
    return original_fetch(get_proxied_url(url));
  };
});

afterAll(() => {
  global.fetch = original_fetch;
});
