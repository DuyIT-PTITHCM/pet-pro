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
		client: {"start":"_app/immutable/entry/start.b7da1c60.js","app":"_app/immutable/entry/app.fc1793e5.js","imports":["_app/immutable/entry/start.b7da1c60.js","_app/immutable/chunks/scheduler.958a5ebe.js","_app/immutable/chunks/singletons.148428cc.js","_app/immutable/chunks/index.ea157fb8.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.fc1793e5.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.958a5ebe.js","_app/immutable/chunks/index.7159b6c4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-9c18a725.js')),
			__memo(() => import('./chunks/1-14f2e08c.js')),
			__memo(() => import('./chunks/2-f0cb15be.js')),
			__memo(() => import('./chunks/3-ecc01e3c.js')),
			__memo(() => import('./chunks/4-8eb90a2a.js')),
			__memo(() => import('./chunks/5-fedd5130.js')),
			__memo(() => import('./chunks/6-9e8095af.js')),
			__memo(() => import('./chunks/7-2bd81fce.js')),
			__memo(() => import('./chunks/8-c036bbc3.js')),
			__memo(() => import('./chunks/9-0d0bdb6e.js')),
			__memo(() => import('./chunks/10-56c5403e.js')),
			__memo(() => import('./chunks/11-2de24593.js')),
			__memo(() => import('./chunks/12-69caedaa.js')),
			__memo(() => import('./chunks/13-2a692ba7.js')),
			__memo(() => import('./chunks/14-519887bb.js')),
			__memo(() => import('./chunks/15-886ff671.js'))
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
