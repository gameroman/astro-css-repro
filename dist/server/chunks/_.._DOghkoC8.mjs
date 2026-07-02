globalThis.process ??= {};
globalThis.process.env ??= {};
import { S as createComponent, h as renderHead, i as renderComponent, m as maybeRenderHead, s as renderSlot, u as renderTemplate, x as createAstro, z as __exportAll } from "./server_DA01noJy.mjs";
import "./compiler_C0eth4BQ.mjs";
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const { title } = Astro.props;
	return renderTemplate`<html lang="en"><head><title>${title}</title>${renderHead($$result)}</head><body>${renderSlot($$result, $$slots["default"])}</body></html>`;
}, "C:/Users/roman/Documents/dev/personal/trash/astro-css-repro/src/layouts/Layout.astro", void 0);
//#endregion
//#region src/pages/dynamic/[...id].astro
var ____id__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Component = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const id = Astro.params.id;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": id }, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<main class="flex-1 container mx-auto px-4 py-8"><h1 class="text-3xl font-bold mb-8 truncate">${id}</h1></main>` })}`;
}, "C:/Users/roman/Documents/dev/personal/trash/astro-css-repro/src/pages/dynamic/[...id].astro", void 0);
var $$file = "C:/Users/roman/Documents/dev/personal/trash/astro-css-repro/src/pages/dynamic/[...id].astro";
var $$url = "/dynamic/[...id]";
//#endregion
//#region \0virtual:astro:page:src/pages/dynamic/[...id]@_@astro
var page = () => ____id__exports;
//#endregion
export { page };
