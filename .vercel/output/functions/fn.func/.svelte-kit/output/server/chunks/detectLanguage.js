const createInlangFunction = (resource) => (key, args) => {
  const message = resource.body.find((message2) => message2.id.name === key);
  if (!message)
    return "";
  return message.pattern.elements.map((element) => serializeElement(element, args || {})).join("");
};
const serializeElement = (element, args) => {
  switch (element.type) {
    case "Text":
      return element.value;
    case "Placeholder": {
      return serializePlaceholder(element, args);
    }
  }
};
const serializePlaceholder = (placeholder, args) => {
  switch (placeholder.body.type) {
    case "VariableReference":
      return args[placeholder.body.name] || "";
  }
};
const isAsync = (p) => !!p && typeof p === "object" && typeof p.then === "function";
const fallbackInlangFunction = () => "";
const initBaseRuntime = ({ readResource }, state = {
  resources: /* @__PURE__ */ new Map(),
  language: void 0,
  i: void 0
}) => {
  let loadResourcePromise;
  const loadResource = (language) => {
    if (state.resources.has(language))
      return void 0;
    if (loadResourcePromise)
      return loadResourcePromise;
    const setResource = (resource) => resource && state.resources.set(language, resource);
    const resourceMaybePromise = readResource(language);
    if (!isAsync(resourceMaybePromise)) {
      setResource(resourceMaybePromise);
      return void 0;
    }
    loadResourcePromise = new Promise(async (resolve) => {
      const resource = await resourceMaybePromise;
      setResource(resource);
      loadResourcePromise = void 0;
      resolve();
    });
    return loadResourcePromise;
  };
  const switchLanguage = (language) => {
    state.language = language;
    state.i = void 0;
  };
  const getLanguage = () => state.language;
  const getInlangFunction = () => {
    if (state.i)
      return state.i;
    const resource = state.resources.get(state.language);
    if (!resource)
      return fallbackInlangFunction;
    return state.i = createInlangFunction(resource);
  };
  return {
    loadResource,
    switchLanguage,
    get language() {
      return getLanguage();
    },
    get i() {
      return getInlangFunction();
    }
  };
};
const initRuntimeWithLanguageInformation = (context) => {
  const runtime = initBaseRuntime(context);
  return {
    ...runtime,
    get language() {
      return runtime.language;
    },
    get i() {
      return runtime.i;
    },
    get referenceLanguage() {
      return context.referenceLanguage;
    },
    get languages() {
      return context.languages;
    }
  };
};
const matchLanguage = (detectedLanguages, languages, allowRelated = true) => {
  for (const detectedLanguage of detectedLanguages) {
    for (const language of languages) {
      if (language === detectedLanguage)
        return language;
    }
  }
  for (const detectedLanguage of detectedLanguages) {
    if (allowRelated) {
      const relatedLanguages = languages.map((language) => (language.startsWith(detectedLanguage + "-") || detectedLanguage.startsWith(language + "-")) && language).filter(Boolean).sort().sort((a, b) => a.split("-").length - b.split("-").length);
      if (relatedLanguages.length)
        return relatedLanguages[0];
    }
  }
  return void 0;
};
const detectLanguage = async ({ referenceLanguage, languages, allowRelated = true }, ...detectors) => {
  const allDetectedLanguages = [];
  for (const detector of detectors) {
    const detectedLanguages = await detector();
    const matchedLanguage = matchLanguage(detectedLanguages, languages, false);
    if (matchedLanguage)
      return matchedLanguage;
    allDetectedLanguages.push(...detectedLanguages);
  }
  return allowRelated && matchLanguage(allDetectedLanguages, languages) || referenceLanguage;
};
export {
  detectLanguage as d,
  initRuntimeWithLanguageInformation as i
};
