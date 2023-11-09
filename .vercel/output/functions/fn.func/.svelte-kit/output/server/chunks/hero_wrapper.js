import { c as create_ssr_component } from "./index3.js";
const hero_wrapper_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--shadow-2:0 3px 5px -2px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 3%)),\n    0 7px 14px -5px hsl(var(--shadow-color) / calc(var(--shadow-strength) + 5%));--shadow-color:220 3% 15%;--shadow-strength:1%}@media(max-width: 69.999em){.hero.svelte-v9db0k{--content-max-width:55rem}}.hero-inner.svelte-v9db0k{min-height:23.25rem;border-radius:none;width:100vw;margin-left:50%;transform:translateX(-50%);padding:var(--space-l) var(--space-m)}@media(min-width: 40.001em){.hero-inner.svelte-v9db0k{padding:var(--space-l-xl) var(--space-m-3xl);border-radius:clamp(10px,8px + 2vw,30px);box-shadow:0 3px 5px -2px hsla(220, 3%, 15%, calc(1% + 3%)),\n    0 7px 14px -5px hsla(220, 3%, 15%, calc(1% + 5%));box-shadow:var(--shadow-2);border:1px solid var(--color-nebula-200);margin-left:auto;margin-right:auto;width:100%;transform:none;transform:initial}}@media(prefers-color-scheme: dark){:root{--shadow-color:220 40% 2%;--shadow-strength:25%}}",
  map: null
};
const Hero_wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="hero wrapper pb-2xl-5xl svelte-v9db0k"><div class="hero-inner flow bg-light-glare svelte-v9db0k">${slots.default ? slots.default({}) : ``}</div>
</section>`;
});
export {
  Hero_wrapper as H
};
