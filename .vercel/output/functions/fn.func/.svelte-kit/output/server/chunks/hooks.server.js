import { a as initHandleWrapper } from "./wrappers.js";
import "@inlang/core/config";
import "@inlang/core/environment";
import "ts-dedent";
const handle = initHandleWrapper({
  inlangConfigModule: import("./inlang.config.js"),
  getLanguage: () => void 0
}).wrap(function handle2({
  event,
  resolve
}) {
  return resolve(event);
});
export {
  handle
};
