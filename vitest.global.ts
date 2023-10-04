import talkback from "talkback";
import Tape from "talkback/tape";

const TEST_SERVER_PORT = 9090;

export const setup = async () => {
  const opts = {
    host: "https://data.openupstate.org",
    record: talkback.Options.RecordMode.NEW,
    port: TEST_SERVER_PORT,
    path: "./tapes",
    http: true,
    tapeNameGenerator(tapeNumber: number, tape: Tape) {
      //TODO: Why are some of the tapes pretty much blank?
      return `${tape.req.method}-${tape.req.url || "/"}-${tapeNumber}`;
    },
  };

  const server = talkback(opts);
  server.start(() => console.log("Talkback Server Started"));

  return async () => {
    server.close(() => console.log("Talkback Server Closed"));
  };
};
