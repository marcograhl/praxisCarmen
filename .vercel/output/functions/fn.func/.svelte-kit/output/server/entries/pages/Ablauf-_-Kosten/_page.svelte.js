import { c as create_ssr_component, v as validate_component, e as escape, b as subscribe, n as noop } from "../../../chunks/index3.js";
import { g as getRuntimeFromContext } from "../../../chunks/index4.js";
import { H as Hero_wrapper } from "../../../chunks/hero_wrapper.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".q-content.svelte-irx18d{display:block;max-width:40ch;quotes:none;font-family:var(--font-serif-text);font-style:italic}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $i, $$unsubscribe_i = noop, $$subscribe_i = () => ($$unsubscribe_i(), $$unsubscribe_i = subscribe(i, ($$value) => $i = $$value), i);
  let i;
  $$subscribe_i({ i } = getRuntimeFromContext());
  $$result.css.add(css);
  $$unsubscribe_i();
  return `${validate_component(Hero_wrapper, "HeroWrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="title">${escape($i("Ablauf.title"))}</h1>
  <article class="flow content text-step-1"><p><!-- HTML_TAG_START -->${$i("Ablauf.p_1")}<!-- HTML_TAG_END --></p>
    <div class="q indent"><div></div>
      <q class="q-content svelte-irx18d">${escape($i("Ablauf.q_1"))}</q></div>
    <h2>${escape($i("Ablauf.h2_1"))}</h2>
    <p>${escape($i("Ablauf.p_2"))}</p>
    <h2>${escape($i("Ablauf.h2_2"))}</h2>
    <p>${escape($i("Ablauf.p_3"))}</p>
    <p></p></article>`;
    }
  })}`;
});
export {
  Page as default
};
