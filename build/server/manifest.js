const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/38afce74-b562-440e-a8a2-739fa7079ec0.jpg","images/92a4016b-576a-4000-8ae1-3de2ffa03ce1.jpg","images/avt.png","images/ea9545c9-923e-4e7e-ab4e-bcadaf40bf0c.jpg","images/fc15bc21-a276-4e77-a923-5b854a1d3391.jpg","images/home-panner/1.jpg","images/home-panner/2.jpg","images/home-panner/3.jpg","images/home-panner/4.jpg","images/home-panner/5.jpg","images/home-panner/6.jpg","images/homepage/benefit.jpg","images/homepage/benefit2.jpg","images/homepage/lientsaybg.jpg","images/loginbg.jpg","images/signupbg.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.28577b29.js","app":"_app/immutable/entry/app.f5b32fc2.js","imports":["_app/immutable/entry/start.28577b29.js","_app/immutable/chunks/scheduler.c0d18785.js","_app/immutable/chunks/singletons.34e6bc4e.js","_app/immutable/chunks/index.876a4483.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.f5b32fc2.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.c0d18785.js","_app/immutable/chunks/index.36bc5090.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-afd98805.js')),
			__memo(() => import('./chunks/1-43951203.js')),
			__memo(() => import('./chunks/2-ad507e13.js')),
			__memo(() => import('./chunks/3-f538d7e1.js')),
			__memo(() => import('./chunks/4-62f6e163.js')),
			__memo(() => import('./chunks/5-77e04e61.js')),
			__memo(() => import('./chunks/6-f38ae76e.js')),
			__memo(() => import('./chunks/7-b6286000.js')),
			__memo(() => import('./chunks/8-8b40fd8a.js')),
			__memo(() => import('./chunks/9-6756754b.js')),
			__memo(() => import('./chunks/10-af9e0347.js')),
			__memo(() => import('./chunks/11-bcc69ac5.js')),
			__memo(() => import('./chunks/12-4c0e1093.js')),
			__memo(() => import('./chunks/13-f2a758ce.js'))
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
