import { afterAll, beforeAll } from "vitest";
import { replace_global_fetch, reset_global_fetch } from "./override-fetch";

beforeAll(() => replace_global_fetch());

afterAll(() => reset_global_fetch());
