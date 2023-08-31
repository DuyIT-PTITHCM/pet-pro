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
		client: {"start":"_app/immutable/entry/start.2fb91614.js","app":"_app/immutable/entry/app.9c197d37.js","imports":["_app/immutable/entry/start.2fb91614.js","_app/immutable/chunks/scheduler.afe1bd6b.js","_app/immutable/chunks/singletons.f2524a91.js","_app/immutable/chunks/index.a0fdc783.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.9c197d37.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.afe1bd6b.js","_app/immutable/chunks/index.c182d738.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-dd4130aa.js')),
			__memo(() => import('./chunks/1-35e41852.js')),
			__memo(() => import('./chunks/2-29831b5e.js')),
			__memo(() => import('./chunks/3-03525a78.js')),
			__memo(() => import('./chunks/4-aa89a07a.js')),
			__memo(() => import('./chunks/5-e0325141.js')),
			__memo(() => import('./chunks/6-db4c0a86.js')),
			__memo(() => import('./chunks/7-dfd1f9fd.js')),
			__memo(() => import('./chunks/8-9055a8e7.js')),
			__memo(() => import('./chunks/9-e821b55d.js')),
			__memo(() => import('./chunks/10-3e20fbd2.js')),
			__memo(() => import('./chunks/11-4eb0de73.js')),
			__memo(() => import('./chunks/12-132f2437.js')),
			__memo(() => import('./chunks/13-b71f3a0f.js')),
			__memo(() => import('./chunks/14-9e9c06c6.js')),
			__memo(() => import('./chunks/15-b5a21447.js')),
			__memo(() => import('./chunks/16-1fcdffbc.js')),
			__memo(() => import('./chunks/17-5eb86c53.js')),
			__memo(() => import('./chunks/18-73db1e7c.js'))
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
