import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
const Deck_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body{margin:0;font-family:Helvetica, sans-serif;background-color:#DDD;color:#222}input[type="file"].svelte-1hrshh0{display:none}.file-wrapper.svelte-1hrshh0{display:grid;width:100%;min-height:100vh;place-items:center}.custom-file-upload.svelte-1hrshh0{border:1px solid #AAA;border-radius:10px;padding:6px 12px;cursor:pointer;width:300px;line-height:2;font-size:3em;text-align:center;transition:background-color 1s}.custom-file-upload.svelte-1hrshh0:hover{background-color:#AAA;color:#000}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fileUploadButton;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-b7za2c_START -->${`${$$result.title = `<title>Edit</title>`, ""}`}<link rel="${"icon"}" type="${"image/x-icon"}" href="${"/favicon.ico"}"><!-- HEAD_svelte-b7za2c_END -->`, ""}

<div class="${"file-wrapper svelte-1hrshh0"}"${add_attribute("this", fileUploadButton, 0)}><label class="${"custom-file-upload svelte-1hrshh0"}"><input type="${"file"}" accept="${".json"}" class="${"svelte-1hrshh0"}">
        Upload Deck
    </label></div>

${``}`;
});
export {
  Page as default
};
