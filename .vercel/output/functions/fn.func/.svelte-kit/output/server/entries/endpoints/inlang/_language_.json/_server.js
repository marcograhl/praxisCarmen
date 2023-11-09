import { j as json } from "../../../../chunks/index.js";
import { r as reloadResources, i as initState, g as getResource } from "../../../../chunks/state.js";
const GET = async ({ params: { language } }) => {
  await reloadResources();
  return json(getResource(language) || null);
};
const entries = async () => {
  const { languages } = await initState(await import("../../../../chunks/inlang.config.js"));
  return languages.map((language) => ({ language }));
};
export {
  GET,
  entries
};
