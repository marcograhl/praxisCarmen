import { c as create_ssr_component, v as validate_component, e as escape, a as add_attribute, b as subscribe, n as noop } from "../../../chunks/index3.js";
import { g as getRuntimeFromContext } from "../../../chunks/index4.js";
import { H as Hero_wrapper } from "../../../chunks/hero_wrapper.js";
const beratungImg = "/_app/immutable/assets/beratung-img.a9e7dcd6.jpg";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.grid.svelte-1nbthj3.svelte-1nbthj3{--gutter:var(--space-2xs)}ul.svelte-1nbthj3.svelte-1nbthj3{--flow-space:0.25em}ul.svelte-1nbthj3 li.svelte-1nbthj3{list-style-type:"✓ ";list-style-position:outside}@media(min-width: 40.001em){ul.svelte-1nbthj3 li.svelte-1nbthj3{list-style-type:"✓";-webkit-padding-start:var(--space-2xs-xs);padding-left:var(--space-2xs-xs);-webkit-margin-start:calc(-1* var(--space-2xs-xs));margin-left:calc(-1* var(--space-2xs-xs))}}img.svelte-1nbthj3.svelte-1nbthj3{border-radius:max(8px, min(6vw, 10px))}',
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
      return `<h1 class="title">${escape($i("beratungsangebot.title"))}</h1>
  <div class="mt-m-l content grid text-step-1 svelte-1nbthj3" data-layout="50-50"><ul class="flow svelte-1nbthj3" role="presentation"><li role="presentation" class="svelte-1nbthj3">${escape($i("beratungsangebot.liste.0"))}</li>
      <li role="presentation" class="svelte-1nbthj3">${escape($i("beratungsangebot.liste.1"))}</li>
      <li role="presentation" class="svelte-1nbthj3">${escape($i("beratungsangebot.liste.2"))}</li></ul>

    <div class="flow"><p><!-- HTML_TAG_START -->${$i("beratungsangebot.behandlungsangebot")}<!-- HTML_TAG_END --></p>
      <p></p></div></div>`;
    }
  })}
<div class="region bg-light-glare center-xy"><div class="wrapper offset"><img${add_attribute("src", beratungImg, 0)} alt="" width="960" height="640" class="svelte-1nbthj3"></div>
</div>`;
});
export {
  Page as default
};
