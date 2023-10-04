import { afterAll, beforeAll } from "vitest";

const original_fetch = global.fetch;

const get_proxied_url = (url: RequestInfo | URL) => {
  let href = "";

  if (typeof url === "string") {
    href = url;
  } else {
    href = "href" in url ? url.href : get_link_from_request_info(url);
  }

  const newURL = new URL(href);
  newURL.host = "localhost";
  newURL.port = "9090";
  newURL.protocol = "http:";

  return newURL.href;
};

const get_link_from_request_info = (reqInfo: Request) => reqInfo.url;

beforeAll(() => {
  global.fetch = async (url) => {
    return original_fetch(get_proxied_url(url));
  };
});

afterAll(() => {
  global.fetch = original_fetch;
});
