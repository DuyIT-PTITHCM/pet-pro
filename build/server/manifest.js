const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/4b5aa586-e864-43fb-bb10-5564ba441c6d.jpeg","images/avt.png","images/dff4e648-1219-4680-95cb-4251e4e7ad21.jpeg","images/home-panner/1.jpg","images/home-panner/2.jpg","images/home-panner/3.jpg","images/home-panner/4.jpg","images/home-panner/5.jpg","images/home-panner/6.jpg","images/homepage/benefit.jpg","images/homepage/benefit2.jpg","images/homepage/lientsaybg.jpg","images/homepage/ourteam.jpg","images/loginbg.jpg","images/logo.png","images/signupbg.jpg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.d2064180.js","app":"_app/immutable/entry/app.a1e0c37b.js","imports":["_app/immutable/entry/start.d2064180.js","_app/immutable/chunks/scheduler.5c9b0418.js","_app/immutable/chunks/singletons.89a3cf38.js","_app/immutable/chunks/index.e2750e97.js","_app/immutable/chunks/paths.7b30f428.js","_app/immutable/entry/app.a1e0c37b.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.5c9b0418.js","_app/immutable/chunks/index.7459137d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-167ea9fc.js')),
			__memo(() => import('./chunks/1-9a3ebb89.js')),
			__memo(() => import('./chunks/2-39b5b836.js')),
			__memo(() => import('./chunks/3-9fa1da43.js')),
			__memo(() => import('./chunks/4-036336bc.js')),
			__memo(() => import('./chunks/5-733934c3.js')),
			__memo(() => import('./chunks/6-ca03cdc5.js')),
			__memo(() => import('./chunks/7-ccd906f3.js')),
			__memo(() => import('./chunks/8-d1f7eb9e.js')),
			__memo(() => import('./chunks/9-82b72825.js')),
			__memo(() => import('./chunks/10-ca692bfa.js')),
			__memo(() => import('./chunks/11-d41ddb00.js')),
			__memo(() => import('./chunks/12-85ceb780.js')),
			__memo(() => import('./chunks/13-0c2ebb24.js'))
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
