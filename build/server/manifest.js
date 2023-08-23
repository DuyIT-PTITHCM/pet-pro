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
		client: {"start":"_app/immutable/entry/start.41a6bffe.js","app":"_app/immutable/entry/app.87c0b3c7.js","imports":["_app/immutable/entry/start.41a6bffe.js","_app/immutable/chunks/scheduler.f626ec4f.js","_app/immutable/chunks/singletons.d21021b5.js","_app/immutable/chunks/index.282e122a.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.87c0b3c7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.f626ec4f.js","_app/immutable/chunks/index.5f55e5c3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-3835d2ba.js')),
			__memo(() => import('./chunks/1-82308997.js')),
			__memo(() => import('./chunks/2-5d42d7e6.js')),
			__memo(() => import('./chunks/3-214dddc7.js')),
			__memo(() => import('./chunks/4-a460c70d.js')),
			__memo(() => import('./chunks/5-670f09c8.js')),
			__memo(() => import('./chunks/6-bb5607f7.js')),
			__memo(() => import('./chunks/7-9446831d.js')),
			__memo(() => import('./chunks/8-d00aac2f.js')),
			__memo(() => import('./chunks/9-e3f86c98.js')),
			__memo(() => import('./chunks/10-18bc2276.js')),
			__memo(() => import('./chunks/11-8c01ae28.js')),
			__memo(() => import('./chunks/12-3c7f5f24.js'))
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
