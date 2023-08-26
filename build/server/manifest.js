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
		client: {"start":"_app/immutable/entry/start.2b0a3180.js","app":"_app/immutable/entry/app.1c0daa09.js","imports":["_app/immutable/entry/start.2b0a3180.js","_app/immutable/chunks/scheduler.d677c1ca.js","_app/immutable/chunks/singletons.e8decff6.js","_app/immutable/chunks/index.f93246f8.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.1c0daa09.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.d677c1ca.js","_app/immutable/chunks/index.230b8441.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-80da1087.js')),
			__memo(() => import('./chunks/1-192a2f33.js')),
			__memo(() => import('./chunks/2-aa08f21b.js')),
			__memo(() => import('./chunks/3-0160a5ae.js')),
			__memo(() => import('./chunks/4-40a998de.js')),
			__memo(() => import('./chunks/5-ed4ac321.js')),
			__memo(() => import('./chunks/6-e084d5e1.js')),
			__memo(() => import('./chunks/7-d983a386.js')),
			__memo(() => import('./chunks/8-3442b8d0.js')),
			__memo(() => import('./chunks/9-008485c8.js')),
			__memo(() => import('./chunks/10-adcec2b8.js')),
			__memo(() => import('./chunks/11-cce2001b.js')),
			__memo(() => import('./chunks/12-a97cd751.js')),
			__memo(() => import('./chunks/13-e85e532c.js'))
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
