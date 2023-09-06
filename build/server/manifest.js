const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","images/avt.png","images/home-panner/1.jpg","images/home-panner/2.jpg","images/home-panner/3.jpg","images/home-panner/4.jpg","images/home-panner/5.jpg","images/home-panner/6.jpg","images/homepage/benefit.jpg","images/homepage/benefit2.jpg","images/homepage/bgne.jpg","images/homepage/lientsaybg.jpg","images/homepage/ourteam.jpg","images/loginbg.jpg","images/logo.png","images/signupbg.jpg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.29722b77.js","app":"_app/immutable/entry/app.be41a004.js","imports":["_app/immutable/entry/start.29722b77.js","_app/immutable/chunks/scheduler.aa61743c.js","_app/immutable/chunks/singletons.b0830564.js","_app/immutable/chunks/index.138245f1.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.be41a004.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.aa61743c.js","_app/immutable/chunks/index.8779bb2d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-e8df7f7e.js')),
			__memo(() => import('./chunks/1-5bed4e1d.js')),
			__memo(() => import('./chunks/2-181bc1f1.js')),
			__memo(() => import('./chunks/3-2ab2fabf.js')),
			__memo(() => import('./chunks/4-ec9cda58.js')),
			__memo(() => import('./chunks/5-81ca9666.js')),
			__memo(() => import('./chunks/6-a85a2111.js')),
			__memo(() => import('./chunks/7-30e65f4f.js')),
			__memo(() => import('./chunks/8-f1d94bf4.js')),
			__memo(() => import('./chunks/9-72e2e0ec.js')),
			__memo(() => import('./chunks/10-82f464f6.js')),
			__memo(() => import('./chunks/11-fec07a5b.js')),
			__memo(() => import('./chunks/12-897d2423.js')),
			__memo(() => import('./chunks/13-45b6c910.js')),
			__memo(() => import('./chunks/14-3062b6c8.js')),
			__memo(() => import('./chunks/15-eb454726.js')),
			__memo(() => import('./chunks/16-0e7171b2.js'))
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
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/menu-management",
				pattern: /^\/admin\/menu-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products",
				pattern: /^\/admin\/products\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/create",
				pattern: /^\/admin\/products\/create\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/[id]",
				pattern: /^\/admin\/products\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/user-management",
				pattern: /^\/admin\/user-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(app)/san-pham/[slug]",
				pattern: /^\/san-pham\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/upload",
				pattern: /^\/upload\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
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
