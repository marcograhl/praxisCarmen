import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, b as subscribe, n as noop } from "../../../chunks/index3.js";
import { g as getRuntimeFromContext } from "../../../chunks/index4.js";
import { H as Hero_wrapper } from "../../../chunks/hero_wrapper.js";
const ansatzImg = "/_app/immutable/assets/ansatz-img.519a33ff.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.img-wrapper.svelte-11ieh58{display:grid;grid-template-areas:"container";align-items:start;justify-items:start;place-items:start;margin-left:auto;margin-right:auto}@media(min-width: 60.001em){.img-wrapper.svelte-11ieh58{--photo-margin:1em;clear:both;float:right;float:var(--float, right);-webkit-margin-start:1em;margin-left:1em;-webkit-margin-start:var(--photo-margin);margin-inline-start:1em;margin-left:var(--photo-margin);margin-top:3.5ex;margin-bottom:1em;margin-block:3.5ex  1em;margin-bottom:var(--photo-margin)}}',
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
      return `<h1 class="title">${escape($i("meinAnsatz.title"))}</h1>
  <article class="flow content text-w text-step-1"><p>${escape($i("meinAnsatz.p_1"))}</p>
    <p><!-- HTML_TAG_START -->${$i("meinAnsatz.p_2")}<!-- HTML_TAG_END --></p>
    <p><!-- HTML_TAG_START -->${$i("meinAnsatz.p_3")}<!-- HTML_TAG_END --></p>
    <div class="img-wrapper svelte-11ieh58"><img class=""${add_attribute("src", ansatzImg, 0)}${add_attribute("alt", $i("meinAnsatz.img_alt"), 0)} title="Carmen Alvarez" width="200" height="300"></div>
    <p><!-- HTML_TAG_START -->${$i("meinAnsatz.p_4")}<!-- HTML_TAG_END --></p>
    <p><!-- HTML_TAG_START -->${$i("meinAnsatz.p_5")}<!-- HTML_TAG_END --></p>
    <p>${escape($i("meinAnsatz.p_6"))}</p>
    <p><!-- HTML_TAG_START -->${$i("meinAnsatz.p_7")}<!-- HTML_TAG_END --></p>
    <p><!-- HTML_TAG_START -->${$i("meinAnsatz.p_8")}<!-- HTML_TAG_END --></p>
    <p></p></article>`;
    }
  })}`;
});
export {
  Page as default
};
