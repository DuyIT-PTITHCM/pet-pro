const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","images/266e7b55-246c-4325-af51-3ded497eadce.jpeg","images/2f03f92e-36f0-4764-8f86-4ce5981dce83.jpeg","images/44674465-f835-43c3-9702-c4d2f631c614.jpeg","images/5c8ce6eb-d3e3-4977-bafc-504b579355be.jpeg","images/61a929cb-5900-4547-ab39-de3cb89cf29d.jpeg","images/6a12665f-0d2e-4ca8-a200-ac2bda47a6bf.jpg","images/6f5ab6c1-07a3-4406-9183-f3352d0a8f7a.jpeg","images/98bce819-54e4-4246-b3e4-c4b19aca6f11.jpeg","images/avt.png","images/eb055b14-6e34-46ec-a54c-8f8d8a9822b4.jpeg","images/home-panner/1.jpg","images/home-panner/2.jpg","images/home-panner/3.jpg","images/home-panner/4.jpg","images/home-panner/5.jpg","images/home-panner/6.jpg","images/homepage/benefit.jpg","images/homepage/benefit2.jpg","images/homepage/bgne.jpg","images/homepage/lientsaybg.jpg","images/homepage/ourteam.jpg","images/loginbg.jpg","images/logo.png","images/signupbg.jpg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.f8dfa401.js","app":"_app/immutable/entry/app.81a07628.js","imports":["_app/immutable/entry/start.f8dfa401.js","_app/immutable/chunks/scheduler.f07b0b6c.js","_app/immutable/chunks/singletons.e80c7c8b.js","_app/immutable/chunks/index.27b064a4.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.81a07628.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.f07b0b6c.js","_app/immutable/chunks/index.9d8dfa58.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-15fb8026.js')),
			__memo(() => import('./chunks/1-66f2acc4.js')),
			__memo(() => import('./chunks/2-a68e5fec.js')),
			__memo(() => import('./chunks/3-85154d79.js')),
			__memo(() => import('./chunks/4-36f48af1.js')),
			__memo(() => import('./chunks/5-c1967f91.js')),
			__memo(() => import('./chunks/6-4b1db123.js')),
			__memo(() => import('./chunks/7-4b41ea8f.js')),
			__memo(() => import('./chunks/8-01c937ff.js')),
			__memo(() => import('./chunks/9-5cb3af7e.js')),
			__memo(() => import('./chunks/10-722c2c9e.js')),
			__memo(() => import('./chunks/11-e57e4515.js')),
			__memo(() => import('./chunks/12-4a00d45f.js')),
			__memo(() => import('./chunks/13-78ad1d97.js')),
			__memo(() => import('./chunks/14-9d9b043b.js')),
			__memo(() => import('./chunks/15-f4636d41.js')),
			__memo(() => import('./chunks/16-0594854b.js')),
			__memo(() => import('./chunks/17-38b330e4.js')),
			__memo(() => import('./chunks/18-6d10cb05.js')),
			__memo(() => import('./chunks/19-8a751a67.js')),
			__memo(() => import('./chunks/20-9c2d4fbc.js')),
			__memo(() => import('./chunks/21-22456d4c.js')),
			__memo(() => import('./chunks/22-459fe084.js')),
			__memo(() => import('./chunks/23-b0c80ca4.js')),
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
