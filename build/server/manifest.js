const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/avt.png","images/home-panner/1.jpg","images/home-panner/2.jpg","images/home-panner/3.jpg","images/home-panner/4.jpg","images/home-panner/5.jpg","images/home-panner/6.jpg","images/homepage/benefit.jpg","images/homepage/benefit2.jpg","images/homepage/lientsaybg.jpg","images/homepage/ourteam.jpg","images/loginbg.jpg","images/logo.png","images/signupbg.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.e4db1c1e.js","app":"_app/immutable/entry/app.13d4e797.js","imports":["_app/immutable/entry/start.e4db1c1e.js","_app/immutable/chunks/scheduler.45014ca4.js","_app/immutable/chunks/singletons.c19a0933.js","_app/immutable/chunks/index.b0656eab.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.13d4e797.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.45014ca4.js","_app/immutable/chunks/index.f7d6e5c4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-ecaa72e0.js')),
			__memo(() => import('./chunks/1-5c6e2529.js')),
			__memo(() => import('./chunks/2-624ca392.js')),
			__memo(() => import('./chunks/3-9e60a398.js')),
			__memo(() => import('./chunks/4-90af5ed9.js')),
			__memo(() => import('./chunks/5-e66c128f.js')),
			__memo(() => import('./chunks/6-37731190.js')),
			__memo(() => import('./chunks/7-aa72b4ae.js')),
			__memo(() => import('./chunks/8-05d41887.js')),
			__memo(() => import('./chunks/9-e3b2d107.js')),
			__memo(() => import('./chunks/10-3b8857e2.js')),
			__memo(() => import('./chunks/11-aefce127.js')),
			__memo(() => import('./chunks/12-201e987c.js')),
			__memo(() => import('./chunks/13-c122ed52.js')),
			__memo(() => import('./chunks/14-a04aabab.js')),
			__memo(() => import('./chunks/15-a6606f47.js'))
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
				id: "/(dasboard)/admin/products",
				pattern: /^\/admin\/products\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/create",
				pattern: /^\/admin\/products\/create\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/user-management",
				pattern: /^\/admin\/user-management\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 12 },
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
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/upload",
				pattern: /^\/upload\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
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
