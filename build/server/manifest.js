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
		client: {"start":"_app/immutable/entry/start.5d3f91aa.js","app":"_app/immutable/entry/app.9768a1d8.js","imports":["_app/immutable/entry/start.5d3f91aa.js","_app/immutable/chunks/scheduler.45014ca4.js","_app/immutable/chunks/singletons.c67b7aa1.js","_app/immutable/chunks/index.b0656eab.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.9768a1d8.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.45014ca4.js","_app/immutable/chunks/index.f7d6e5c4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-a2f8b82f.js')),
			__memo(() => import('./chunks/1-ece53f82.js')),
			__memo(() => import('./chunks/2-27fbff9c.js')),
			__memo(() => import('./chunks/3-8100f2fc.js')),
			__memo(() => import('./chunks/4-ad60c568.js')),
			__memo(() => import('./chunks/5-1fda1a25.js')),
			__memo(() => import('./chunks/6-753df3e5.js')),
			__memo(() => import('./chunks/7-305f7396.js')),
			__memo(() => import('./chunks/8-56617b71.js')),
			__memo(() => import('./chunks/9-26ee95a6.js')),
			__memo(() => import('./chunks/10-a1a8ea56.js')),
			__memo(() => import('./chunks/11-7d50d387.js')),
			__memo(() => import('./chunks/12-6fbf0b2e.js')),
			__memo(() => import('./chunks/13-a4708d5c.js')),
			__memo(() => import('./chunks/14-74a0c271.js')),
			__memo(() => import('./chunks/15-db9c64b0.js')),
			__memo(() => import('./chunks/16-ac27cb32.js')),
			__memo(() => import('./chunks/17-8de4a4fe.js')),
			__memo(() => import('./chunks/18-885cad39.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(app)/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/menu-management",
				pattern: /^\/admin\/menu-management\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products",
				pattern: /^\/admin\/products\/?$/,
				params: [],
				page: { layouts: [0,5,6,], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/create",
				pattern: /^\/admin\/products\/create\/?$/,
				params: [],
				page: { layouts: [0,5,6,], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/[id]",
				pattern: /^\/admin\/products\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,5,6,], errors: [1,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/user-management",
				pattern: /^\/admin\/user-management\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,2,4,], errors: [1,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/upload",
				pattern: /^\/upload\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
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
