import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.173de57c.js","_app/immutable/chunks/index.9a82d513.js","_app/immutable/chunks/index.495f819a.js","_app/immutable/chunks/index.1321badd.js","_app/immutable/chunks/paths.8051f272.js"];
export const stylesheets = ["_app/immutable/assets/0.a7c743fb.css"];
export const fonts = ["_app/immutable/assets/DM-Serif_Display.a3c1ddc7.woff2","_app/immutable/assets/DM-Serif_Text.954dde01.woff2","_app/immutable/assets/DM-Sans_regular.ef21d04d.woff2","_app/immutable/assets/DM-Sans_nitalic.e817d2e7.woff2"];
