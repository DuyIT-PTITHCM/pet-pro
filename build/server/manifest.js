const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/4b5aa586-e864-43fb-bb10-5564ba441c6d.jpeg","images/avt.png","images/dff4e648-1219-4680-95cb-4251e4e7ad2a.jpeg","images/home-panner/1.jpg","images/home-panner/2.jpg","images/home-panner/3.jpg","images/home-panner/4.jpg","images/home-panner/5.jpg","images/home-panner/6.jpg","images/homepage/benefit.jpg","images/homepage/benefit2.jpg","images/homepage/lientsaybg.jpg","images/homepage/ourteam.jpg","images/loginbg.jpg","images/logo.png","images/signupbg.jpg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.bd04b1b0.js","app":"_app/immutable/entry/app.8f9c96f9.js","imports":["_app/immutable/entry/start.bd04b1b0.js","_app/immutable/chunks/scheduler.c0d18785.js","_app/immutable/chunks/singletons.b8733e99.js","_app/immutable/chunks/index.876a4483.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.8f9c96f9.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.c0d18785.js","_app/immutable/chunks/index.36bc5090.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-afd98805.js')),
			__memo(() => import('./chunks/1-5569b800.js')),
			__memo(() => import('./chunks/2-916e41da.js')),
			__memo(() => import('./chunks/3-f538d7e1.js')),
			__memo(() => import('./chunks/4-62f6e163.js')),
			__memo(() => import('./chunks/5-21c8bc7c.js')),
			__memo(() => import('./chunks/6-2a8e5a4b.js')),
			__memo(() => import('./chunks/7-b6286000.js')),
			__memo(() => import('./chunks/8-8b40fd8a.js')),
			__memo(() => import('./chunks/9-6756754b.js')),
			__memo(() => import('./chunks/10-af9e0347.js')),
			__memo(() => import('./chunks/11-ac540900.js')),
			__memo(() => import('./chunks/12-f55fa873.js')),
			__memo(() => import('./chunks/13-deed382a.js'))
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
			},
			{
				id: "/upload",
				pattern: /^\/upload\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
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
