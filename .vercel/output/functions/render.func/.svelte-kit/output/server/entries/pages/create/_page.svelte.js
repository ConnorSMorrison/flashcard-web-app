import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{margin:0;font-family:Helvetica, sans-serif;color:#222;background-color:#DDD}.header.svelte-1kppmr0.svelte-1kppmr0{text-align:center;margin-bottom:20px;height:20vh}.header.svelte-1kppmr0 .header-input.svelte-1kppmr0{margin-bottom:15px}.header.svelte-1kppmr0 hr.svelte-1kppmr0{color:#999;max-width:200vh}.svelte-1kppmr0.svelte-1kppmr0::placeholder{color:#999}.inputs.svelte-1kppmr0 .input-row.svelte-1kppmr0{display:flex;flex-direction:row;flex-wrap:wrap;margin-top:20px;margin-bottom:20px}.inputs.svelte-1kppmr0 .input-row input.svelte-1kppmr0,.header-input.svelte-1kppmr0.svelte-1kppmr0{box-sizing:border-box;font-size:16px;font-size:max(16px, 1em);padding:0.25em 0.5em;margin:0.25em;background-color:transparent;border:2px solid #999;border-radius:4px;line-height:1;height:2.25rem;width:45vh}.form.svelte-1kppmr0.svelte-1kppmr0{display:flex;flex-direction:column;align-items:center}.form.svelte-1kppmr0 button.svelte-1kppmr0{min-width:25vh;min-height:5vh;color:#DDD;background-color:#32A3DD;border-radius:2em;border-color:transparent;box-sizing:border-box;font-weight:300;transition:background-color 0.2s;margin-top:15px;font-weight:600}.form.svelte-1kppmr0 button.svelte-1kppmr0:hover{background-color:#627BBF;cursor:pointer}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputs;
  let deckName;
  let firstInputRow;
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1orwfkf_START -->${$$result.title = `<title>Create</title>`, ""}<link rel="${"icon"}" type="${"image/x-icon"}" href="${"/favicon.ico"}" class="${"svelte-1kppmr0"}"><!-- HEAD_svelte-1orwfkf_END -->`, ""}

<div class="${"header svelte-1kppmr0"}"><h1 class="${"svelte-1kppmr0"}">Create Deck</h1>
    <input class="${"header-input svelte-1kppmr0"}" name="${"deck-name"}" placeholder="${"Deck Name"}"${add_attribute("this", deckName, 0)}>
    <hr class="${"svelte-1kppmr0"}"></div>

<div class="${"form svelte-1kppmr0"}"><div class="${"inputs svelte-1kppmr0"}"${add_attribute("this", inputs, 0)}><div class="${"input-row svelte-1kppmr0"}"${add_attribute("this", firstInputRow, 0)}><input name="${"flashcard-question"}" value="${""}" placeholder="${"Question"}" class="${"svelte-1kppmr0"}">
            <input name="${"flashcard-answer"}" value="${""}" placeholder="${"Answer"}" class="${"svelte-1kppmr0"}">
            <button class="${"svelte-1kppmr0"}">Delete</button></div></div>

    <button class="${"svelte-1kppmr0"}">Add Card</button>
    <button class="${"svelte-1kppmr0"}">Save Deck</button>
</div>`;
});
export {
  Page as default
};
