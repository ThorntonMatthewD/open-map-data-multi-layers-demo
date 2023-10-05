import { afterAll, beforeAll } from "vitest";
import {
  replace_global_fetch,
  reset_global_fetch,
} from "@/tests/support/override-fetch";

beforeAll(() => replace_global_fetch());

afterAll(() => reset_global_fetch());
