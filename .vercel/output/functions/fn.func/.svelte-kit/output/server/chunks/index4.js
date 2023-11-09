import { g as getContext, s as setContext } from "./index3.js";
import { w as writable } from "./index2.js";
import { i as inlangSymbol } from "./utils.js";
const getRuntimeFromContext$1 = () => {
  try {
    return getContext(inlangSymbol);
  } catch (e) {
    throw Error(`
You cannot directly access any '@inlang/sdk-js' imports in this scop. You need to pass them from 'handle' or 'load' to the function you want to call e.g.

// -- Change this -------------------------------------------------------------

import { i } from '@inlang/sdk-js'

export const load = async () => {
   return { title: getPageTitle() }
}

const getPageTitle = () => {
   console.log(i('hello.inlang'))
}

// -- To this -----------------------------------------------------------------

import { i } from '@inlang/sdk-js'

export const load = async () => {
   return { title: getPageTitle(i) }
}

const getPageTitle = (/** @type { import('@inlang/sdk-js/runtime').InlangFunction } */ i) => {
   console.log(i('hello.inlang'))
}

// ----------------------------------------------------------------------------
`, { cause: e });
  }
};
const getRuntimeFromContext = () => getRuntimeFromContext$1();
const addRuntimeToContext = (runtime) => {
  const _language = writable(runtime.language);
  const _i = writable(runtime.i);
  const switchLanguage = async (language) => {
    if (runtime.language === language)
      return;
    await runtime.loadResource(language);
    runtime.switchLanguage(language);
    _i.set(runtime.i);
    _language.set(language);
  };
  setContext(inlangSymbol, {
    language: readonly(_language),
    referenceLanguage: runtime.referenceLanguage,
    languages: runtime.languages,
    i: readonly(_i),
    loadResource: runtime.loadResource,
    switchLanguage,
    route
  });
};
const route = (href) => href;
function readonly(store) {
  return {
    // @ts-ignore
    subscribe: store.subscribe.bind(store)
  };
}
export {
  addRuntimeToContext as a,
  getRuntimeFromContext as g
};
