import {
  replace_global_fetch,
  reset_global_fetch,
} from "../../support/override-fetch";

before(() => replace_global_fetch());

after(() => reset_global_fetch());
