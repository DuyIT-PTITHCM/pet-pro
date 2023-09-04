const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","images/avt.png","images/home-panner/1.jpg","images/home-panner/2.jpg","images/home-panner/3.jpg","images/home-panner/4.jpg","images/home-panner/5.jpg","images/home-panner/6.jpg","images/homepage/benefit.jpg","images/homepage/benefit2.jpg","images/homepage/lientsaybg.jpg","images/homepage/ourteam.jpg","images/loginbg.jpg","images/logo.png","images/signupbg.jpg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.16b4b4d7.js","app":"_app/immutable/entry/app.1f9300d8.js","imports":["_app/immutable/entry/start.16b4b4d7.js","_app/immutable/chunks/scheduler.aa61743c.js","_app/immutable/chunks/singletons.1baa4150.js","_app/immutable/chunks/index.138245f1.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.1f9300d8.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.aa61743c.js","_app/immutable/chunks/index.8779bb2d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-e8df7f7e.js')),
			__memo(() => import('./chunks/1-18e40eb8.js')),
			__memo(() => import('./chunks/2-62b06500.js')),
			__memo(() => import('./chunks/3-70347af0.js')),
			__memo(() => import('./chunks/4-ec9cda58.js')),
			__memo(() => import('./chunks/5-81ca9666.js')),
			__memo(() => import('./chunks/6-a015a327.js')),
			__memo(() => import('./chunks/7-687ff018.js')),
			__memo(() => import('./chunks/8-9d9d1fcb.js')),
			__memo(() => import('./chunks/9-6bcc277f.js')),
			__memo(() => import('./chunks/10-a488e5ad.js')),
			__memo(() => import('./chunks/11-13bf6d9c.js')),
			__memo(() => import('./chunks/12-ee4e7868.js')),
			__memo(() => import('./chunks/13-be5e1a44.js')),
			__memo(() => import('./chunks/14-0ed414e0.js')),
			__memo(() => import('./chunks/15-3ddbe4d7.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/menu-management",
				pattern: /^\/admin\/menu-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products",
				pattern: /^\/admin\/products\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/create",
				pattern: /^\/admin\/products\/create\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/[id]",
				pattern: /^\/admin\/products\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/user-management",
				pattern: /^\/admin\/user-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
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
			},
			{
				id: "/(app)/[url]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
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
