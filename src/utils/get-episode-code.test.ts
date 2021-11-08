//const getEpisodeCode = require("./get-episode-code");
import getEpisodeCode from "./get-episode-code";

test("getEpisodeCode returns the episode code", () => {
  expect(getEpisodeCode(3, 1)).toBe("S03E01");
  expect(getEpisodeCode(3, 11)).toBe("S03E11");
  expect(getEpisodeCode(10, 11)).toBe("S10E11");
});

export {};
