import { c as create_ssr_component } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;font-family:Helvetica, sans-serif}.links-wrapper.svelte-qr0zxi{display:flex;flex-direction:row;justify-content:space-around;min-height:100vh;align-items:center;margin:0}.link.svelte-qr0zxi{display:flex;text-align:center;align-items:center;justify-content:center;flex-basis:100vh;height:100vh;background-color:#DDD;color:#222;transition:color 1s ease;transition:background-color 1s ease;font-size:2em}.link.svelte-qr0zxi:hover{background-color:#111;color:#888;cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1xxwhoe_START --><link rel="${"icon"}" type="${"image/x-icon"}" href="${"/favicon.ico"}"><!-- HEAD_svelte-1xxwhoe_END -->`, ""}

<div class="${"links-wrapper svelte-qr0zxi"}"><div class="${"link svelte-qr0zxi"}" onclick="${"location.href='/create';"}">Create Cards
    </div>
    <div class="${"link svelte-qr0zxi"}" onclick="${"location.href='/edit';"}">Edit Cards
    </div>
    <div class="${"link svelte-qr0zxi"}" onclick="${"location.href='/study';"}">Study Cards
    </div>
</div>`;
});
export {
  Page as default
};
