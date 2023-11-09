import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, b as subscribe, n as noop } from "../../../chunks/index3.js";
import { g as getRuntimeFromContext } from "../../../chunks/index4.js";
import { H as Hero_wrapper } from "../../../chunks/hero_wrapper.js";
import "postcss";
const praxisImg = "/_app/immutable/assets/praxis-img.a86fddb5.jpeg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".praxis.svelte-1l7ykbh{--gutter:var(--space-s-m)}img.svelte-1l7ykbh{border-radius:max(8px, min(6vw, 10px))}",
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
      return `<h1 class="title">${escape($i("Kontakt.title"))}</h1>
  <article class="flow content text-step-1"><p><!-- HTML_TAG_START -->${$i("Kontakt.p_1")}<!-- HTML_TAG_END --></p>
    <h2>${escape($i("Kontakt.h2_1"))}</h2>
    <div class="praxis grid svelte-1l7ykbh" data-layout="50-50"><div class="flow"><p><!-- HTML_TAG_START -->${$i("Kontakt.p_2")}<!-- HTML_TAG_END --></p>
        <div class="indent"><div></div>
          <div class="flow"><p class="text-step-01"><!-- HTML_TAG_START -->${$i("Kontakt.p_4")}<!-- HTML_TAG_END --></p>
            <p class="text-step-01"><!-- HTML_TAG_START -->${$i("Kontakt.p_3")}<!-- HTML_TAG_END --></p></div></div></div>
      <div><img${add_attribute("src", praxisImg, 0)} alt="" width="512" height="384" class="svelte-1l7ykbh"></div></div>
    <p></p></article>`;
    }
  })}`;
});
export {
  Page as default
};
