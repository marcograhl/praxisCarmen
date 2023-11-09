import { i as initRuntimeWithLanguageInformation, d as detectLanguage } from "../../chunks/detectLanguage.js";
import { b as base } from "../../chunks/paths.js";
import { a as addRuntimeToData, b as getRuntimePromiseFromEvent, w as wait, c as addRuntimePromiseToEvent } from "../../chunks/utils.js";
const initSvelteKitClientRuntime = async ({ fetch, language, referenceLanguage, languages }) => {
  const runtime = initRuntimeWithLanguageInformation({
    readResource: async (language2) => fetch(`${base}/inlang/${language2}.json`).then((response) => response.ok ? response.json() : void 0),
    referenceLanguage,
    languages
  });
  if (language) {
    await runtime.loadResource(language);
    runtime.switchLanguage(language);
  }
  return runtime;
};
let initializedRuntime = {};
const initRuntimeForWrappers = async (event, options) => {
  const existingPromise = getRuntimePromiseFromEvent(event);
  if (existingPromise)
    return existingPromise;
  if (!options) {
    await wait(0);
    return initRuntimeForWrappers(event, options);
  }
  let resolveRuntimePromise = void 0;
  addRuntimePromiseToEvent(event, new Promise((resolve) => resolveRuntimePromise = resolve));
  const data = event.data;
  const { referenceLanguage = void 0, languages = [] } = data;
  const language = data.language || !options.initDetectors ? data.language : await detectLanguage({ referenceLanguage, languages }, ...options.initDetectors(event));
  const runtime = initializedRuntime[language] || await initSvelteKitClientRuntime({
    fetch: event.fetch,
    language,
    referenceLanguage,
    languages
  });
  resolveRuntimePromise(runtime);
  return runtime;
};
const initRootLayoutLoadWrapper = (options) => ({
  wrap: (load2) => async (event) => {
    const runtime = await initRuntimeForWrappers(event, options);
    const payload = await load2(event, runtime);
    return addRuntimeToData({
      ...payload || event.data,
      referenceLanguage: runtime.referenceLanguage,
      languages: runtime.languages,
      language: runtime.language
      // TODO: only pass this if `language` gets detected on server
    }, runtime);
  }
});
const load = initRootLayoutLoadWrapper({
  initDetectors: void 0
}).wrap(() => {
});
export {
  load
};
