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
		client: {"start":"_app/immutable/entry/start.a9c6f9a6.js","app":"_app/immutable/entry/app.ef3ec982.js","imports":["_app/immutable/entry/start.a9c6f9a6.js","_app/immutable/chunks/scheduler.c3a7c5b6.js","_app/immutable/chunks/singletons.21af6476.js","_app/immutable/chunks/index.14e22bab.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.ef3ec982.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.c3a7c5b6.js","_app/immutable/chunks/index.b8f63c33.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-a77e73b8.js')),
			__memo(() => import('./chunks/1-0c787cd0.js')),
			__memo(() => import('./chunks/2-a0aba0c1.js')),
			__memo(() => import('./chunks/3-eadce224.js')),
			__memo(() => import('./chunks/4-097d4531.js')),
			__memo(() => import('./chunks/5-19863f96.js')),
			__memo(() => import('./chunks/6-766bfb77.js')),
			__memo(() => import('./chunks/7-bfa54ba0.js')),
			__memo(() => import('./chunks/8-f62c2641.js')),
			__memo(() => import('./chunks/9-2564486c.js')),
			__memo(() => import('./chunks/10-d5f7cabe.js')),
			__memo(() => import('./chunks/11-bcf91f5c.js')),
			__memo(() => import('./chunks/12-a7a940e9.js')),
			__memo(() => import('./chunks/13-e6434fcd.js')),
			__memo(() => import('./chunks/14-6d7583b3.js')),
			__memo(() => import('./chunks/15-f6746360.js')),
			__memo(() => import('./chunks/16-a22bcaff.js')),
			__memo(() => import('./chunks/17-851138ae.js')),
			__memo(() => import('./chunks/18-7454f11d.js')),
			__memo(() => import('./chunks/19-0b1627fa.js')),
			__memo(() => import('./chunks/20-fcf19ba0.js')),
			__memo(() => import('./chunks/21-71a1488d.js')),
			__memo(() => import('./chunks/22-a1181b5a.js')),
			__memo(() => import('./chunks/23-d26f79c6.js')),
			__memo(() => import('./chunks/24-b356d13f.js'))
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
