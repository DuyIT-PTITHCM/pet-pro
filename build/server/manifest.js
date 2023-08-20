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
		client: {"start":"_app/immutable/entry/start.1947c496.js","app":"_app/immutable/entry/app.2bba3b86.js","imports":["_app/immutable/entry/start.1947c496.js","_app/immutable/chunks/scheduler.87d5e925.js","_app/immutable/chunks/singletons.ecb5a991.js","_app/immutable/chunks/index.13e72455.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.2bba3b86.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.87d5e925.js","_app/immutable/chunks/index.426ab099.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-c3338d8d.js')),
			__memo(() => import('./chunks/1-8621dd24.js')),
			__memo(() => import('./chunks/2-a38b6f19.js')),
			__memo(() => import('./chunks/3-8d006723.js')),
			__memo(() => import('./chunks/4-d9f1ecde.js')),
			__memo(() => import('./chunks/5-92ac6692.js')),
			__memo(() => import('./chunks/6-0865cdbb.js')),
			__memo(() => import('./chunks/7-41d4c6c1.js')),
			__memo(() => import('./chunks/8-5831609e.js')),
			__memo(() => import('./chunks/9-4043a406.js')),
			__memo(() => import('./chunks/10-3ae93308.js')),
			__memo(() => import('./chunks/11-edfc5db3.js')),
			__memo(() => import('./chunks/12-0361e220.js')),
			__memo(() => import('./chunks/13-bb5f9834.js')),
			__memo(() => import('./chunks/14-8484225f.js')),
			__memo(() => import('./chunks/15-89ee11e5.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(app)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/user-managerment",
				pattern: /^\/admin\/user-managerment\/?$/,
				params: [],
				page: { layouts: [0,5,6,], errors: [1,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(app)/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,7,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,8,], errors: [1,,], leaf: 15 },
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
