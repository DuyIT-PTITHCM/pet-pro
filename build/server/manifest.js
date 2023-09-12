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
		client: {"start":"_app/immutable/entry/start.c4b46e4a.js","app":"_app/immutable/entry/app.e41dee53.js","imports":["_app/immutable/entry/start.c4b46e4a.js","_app/immutable/chunks/scheduler.f07b0b6c.js","_app/immutable/chunks/singletons.677568cb.js","_app/immutable/chunks/index.27b064a4.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.e41dee53.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.f07b0b6c.js","_app/immutable/chunks/index.9d8dfa58.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-15fb8026.js')),
			__memo(() => import('./chunks/1-a915b9b3.js')),
			__memo(() => import('./chunks/2-fddd1c03.js')),
			__memo(() => import('./chunks/3-24b62070.js')),
			__memo(() => import('./chunks/4-36f48af1.js')),
			__memo(() => import('./chunks/5-c1967f91.js')),
			__memo(() => import('./chunks/6-4b1db123.js')),
			__memo(() => import('./chunks/7-4b41ea8f.js')),
			__memo(() => import('./chunks/8-01c937ff.js')),
			__memo(() => import('./chunks/9-5cb3af7e.js')),
			__memo(() => import('./chunks/10-722c2c9e.js')),
			__memo(() => import('./chunks/11-5c5aff96.js')),
			__memo(() => import('./chunks/12-a557f58c.js')),
			__memo(() => import('./chunks/13-5fafeb0b.js')),
			__memo(() => import('./chunks/14-c1ad6b2f.js')),
			__memo(() => import('./chunks/15-0875ae27.js')),
			__memo(() => import('./chunks/16-c7e017fe.js')),
			__memo(() => import('./chunks/17-b14865b0.js')),
			__memo(() => import('./chunks/18-31401099.js')),
			__memo(() => import('./chunks/19-eeb6cc46.js')),
			__memo(() => import('./chunks/20-2575605a.js')),
			__memo(() => import('./chunks/21-bd07a047.js')),
			__memo(() => import('./chunks/22-6a5c3340.js')),
			__memo(() => import('./chunks/23-0af90641.js')),
			__memo(() => import('./chunks/24-10ee2b78.js'))
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
				id: "/(dasboard)/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog",
				pattern: /^\/admin\/blog\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog/create",
				pattern: /^\/admin\/blog\/create\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog/[id]",
				pattern: /^\/admin\/blog\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/menu-management",
				pattern: /^\/admin\/menu-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products",
				pattern: /^\/admin\/products\/?$/,
				params: [],
				page: { layouts: [0,3,5,], errors: [1,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/create",
				pattern: /^\/admin\/products\/create\/?$/,
				params: [],
				page: { layouts: [0,3,5,], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/[id]",
				pattern: /^\/admin\/products\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,5,], errors: [1,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service",
				pattern: /^\/admin\/service\/?$/,
				params: [],
				page: { layouts: [0,3,6,], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service/create",
				pattern: /^\/admin\/service\/create\/?$/,
				params: [],
				page: { layouts: [0,3,6,], errors: [1,,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service/[id]",
				pattern: /^\/admin\/service\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,6,], errors: [1,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/user-management",
				pattern: /^\/admin\/user-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(app)/san-pham/[slug]",
				pattern: /^\/san-pham\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/upload",
				pattern: /^\/upload\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(app)/[url]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
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
