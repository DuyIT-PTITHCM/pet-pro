const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7d09588a.js","app":"_app/immutable/entry/app.758d9f9c.js","imports":["_app/immutable/entry/start.7d09588a.js","_app/immutable/chunks/scheduler.5fdedf92.js","_app/immutable/chunks/singletons.1730eaea.js","_app/immutable/chunks/index.ae487e55.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.758d9f9c.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.5fdedf92.js","_app/immutable/chunks/index.75554cec.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-61c69b80.js')),
			__memo(() => import('./chunks/1-7125be32.js')),
			__memo(() => import('./chunks/2-ccd7f82e.js')),
			__memo(() => import('./chunks/3-37671887.js')),
			__memo(() => import('./chunks/4-4cb43935.js')),
			__memo(() => import('./chunks/5-a5b86aba.js')),
			__memo(() => import('./chunks/6-aad9ca6c.js')),
			__memo(() => import('./chunks/7-cefcd650.js')),
			__memo(() => import('./chunks/8-d4c90b15.js')),
			__memo(() => import('./chunks/9-2ef0a6a0.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(app)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 8 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
