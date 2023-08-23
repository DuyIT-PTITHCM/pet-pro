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
		client: {"start":"_app/immutable/entry/start.9c95edcf.js","app":"_app/immutable/entry/app.a7e9b67d.js","imports":["_app/immutable/entry/start.9c95edcf.js","_app/immutable/chunks/scheduler.f626ec4f.js","_app/immutable/chunks/singletons.8ff743ce.js","_app/immutable/chunks/index.282e122a.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.a7e9b67d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.f626ec4f.js","_app/immutable/chunks/index.5f55e5c3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-3835d2ba.js')),
			__memo(() => import('./chunks/1-4c6a7ad9.js')),
			__memo(() => import('./chunks/2-84d18db6.js')),
			__memo(() => import('./chunks/3-214dddc7.js')),
			__memo(() => import('./chunks/4-a460c70d.js')),
			__memo(() => import('./chunks/5-670f09c8.js')),
			__memo(() => import('./chunks/6-6af5f08f.js')),
			__memo(() => import('./chunks/7-9446831d.js')),
			__memo(() => import('./chunks/8-d00aac2f.js')),
			__memo(() => import('./chunks/9-e3f86c98.js')),
			__memo(() => import('./chunks/10-18bc2276.js')),
			__memo(() => import('./chunks/11-1e46a263.js')),
			__memo(() => import('./chunks/12-13a44caf.js'))
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
				id: "/(dasboard)/admin/user-managerment",
				pattern: /^\/admin\/user-managerment\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(app)/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
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
