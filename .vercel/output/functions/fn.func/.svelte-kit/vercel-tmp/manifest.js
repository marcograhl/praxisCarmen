export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.438be19c.js","app":"_app/immutable/entry/app.db74e81d.js","imports":["_app/immutable/entry/start.438be19c.js","_app/immutable/chunks/index.495f819a.js","_app/immutable/chunks/singletons.d9b02e65.js","_app/immutable/chunks/index.1321badd.js","_app/immutable/chunks/paths.8051f272.js","_app/immutable/entry/app.db74e81d.js","_app/immutable/chunks/index.495f819a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js'),
			() => import('../output/server/nodes/5.js'),
			() => import('../output/server/nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Ablauf-&-Kosten",
				pattern: /^\/Ablauf-&-Kosten\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Beratungsangebot",
				pattern: /^\/Beratungsangebot\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Kontakt",
				pattern: /^\/Kontakt\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Mein-Ansatz",
				pattern: /^\/Mein-Ansatz\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/inlang/[language].json",
				pattern: /^\/inlang\/([^/]+?)\.json\/?$/,
				params: [{"name":"language","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/inlang/_language_.json/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
