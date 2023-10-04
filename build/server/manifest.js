const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","fonts/kanit/Kanit-BlackItalic.ttf","fonts/kanit/Kanit-Bold.ttf","fonts/kanit/Kanit-BoldItalic.ttf","fonts/kanit/Kanit-ExtraBold.ttf","fonts/kanit/Kanit-ExtraBoldItalic.ttf","fonts/kanit/Kanit-ExtraLight.ttf","fonts/kanit/Kanit-ExtraLightItalic.ttf","fonts/kanit/Kanit-Italic.ttf","fonts/kanit/Kanit-Light.ttf","fonts/kanit/Kanit-LightItalic.ttf","fonts/kanit/Kanit-Medium.ttf","fonts/kanit/Kanit-MediumItalic.ttf","fonts/kanit/Kanit-Regular.ttf","fonts/kanit/Kanit-SemiBold.ttf","fonts/kanit/Kanit-SemiBoldItalic.ttf","fonts/kanit/Kanit-Thin.ttf","fonts/kanit/Kanit-ThinItalic.ttf","images/avt.png","images/home-panner/1.jpg","images/home-panner/2.jpg","images/home-panner/3.jpg","images/home-panner/4.jpg","images/home-panner/5.jpg","images/home-panner/6.jpg","images/homepage/benefit.jpg","images/homepage/benefit2.jpg","images/homepage/bgne.jpg","images/homepage/lientsaybg.jpg","images/homepage/ourteam.jpg","images/loginbg.jpg","images/logo.png","images/signupbg.jpg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".ttf":"font/ttf",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.bc520260.js","app":"_app/immutable/entry/app.70a1b4f7.js","imports":["_app/immutable/entry/start.bc520260.js","_app/immutable/chunks/scheduler.1757bee3.js","_app/immutable/chunks/singletons.c8c990c9.js","_app/immutable/chunks/index.8c678ffd.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.70a1b4f7.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.1757bee3.js","_app/immutable/chunks/index.caaf1ae9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-8aa4e93b.js')),
			__memo(() => import('./chunks/1-e167e35e.js')),
			__memo(() => import('./chunks/2-dff1933d.js')),
			__memo(() => import('./chunks/3-dc01ee49.js')),
			__memo(() => import('./chunks/4-46a7d4d9.js')),
			__memo(() => import('./chunks/5-221344e3.js')),
			__memo(() => import('./chunks/6-439098d5.js')),
			__memo(() => import('./chunks/7-71db8183.js')),
			__memo(() => import('./chunks/8-ae3f3be3.js')),
			__memo(() => import('./chunks/9-66edb3f5.js')),
			__memo(() => import('./chunks/10-75f50573.js')),
			__memo(() => import('./chunks/11-1abd919c.js')),
			__memo(() => import('./chunks/12-cbceb6bc.js')),
			__memo(() => import('./chunks/13-cc3fe99f.js')),
			__memo(() => import('./chunks/14-3801f2bd.js')),
			__memo(() => import('./chunks/15-f55eea6b.js')),
			__memo(() => import('./chunks/16-05f68f76.js')),
			__memo(() => import('./chunks/17-e508a50d.js')),
			__memo(() => import('./chunks/18-afc6b9f9.js')),
			__memo(() => import('./chunks/19-bea28c57.js')),
			__memo(() => import('./chunks/20-f180b395.js')),
			__memo(() => import('./chunks/21-87670c1c.js')),
			__memo(() => import('./chunks/22-5440d26b.js')),
			__memo(() => import('./chunks/23-001b2853.js')),
			__memo(() => import('./chunks/24-e821fa79.js')),
			__memo(() => import('./chunks/25-40c05d49.js')),
			__memo(() => import('./chunks/26-4740caa9.js')),
			__memo(() => import('./chunks/27-aecb4fa0.js')),
			__memo(() => import('./chunks/28-c40c9be5.js')),
			__memo(() => import('./chunks/29-18c62f3d.js')),
			__memo(() => import('./chunks/30-8177fcd0.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog",
				pattern: /^\/admin\/blog\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog/create",
				pattern: /^\/admin\/blog\/create\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog/[id]",
				pattern: /^\/admin\/blog\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/categories-management",
				pattern: /^\/admin\/categories-management\/?$/,
				params: [],
				page: { layouts: [0,3,5,], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/menu-management",
				pattern: /^\/admin\/menu-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products",
				pattern: /^\/admin\/products\/?$/,
				params: [],
				page: { layouts: [0,3,6,], errors: [1,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/create",
				pattern: /^\/admin\/products\/create\/?$/,
				params: [],
				page: { layouts: [0,3,6,], errors: [1,,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/[id]",
				pattern: /^\/admin\/products\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,6,], errors: [1,,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service",
				pattern: /^\/admin\/service\/?$/,
				params: [],
				page: { layouts: [0,3,7,], errors: [1,,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service/create",
				pattern: /^\/admin\/service\/create\/?$/,
				params: [],
				page: { layouts: [0,3,7,], errors: [1,,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service/[id]",
				pattern: /^\/admin\/service\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,7,], errors: [1,,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/test-print",
				pattern: /^\/admin\/test-print\/?$/,
				params: [],
				page: { layouts: [0,3,8,], errors: [1,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/user-management",
				pattern: /^\/admin\/user-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(dasboard)/customer",
				pattern: /^\/customer\/?$/,
				params: [],
				page: { layouts: [0,9,], errors: [1,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(app)/san-pham/[slug]",
				pattern: /^\/san-pham\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/upload",
				pattern: /^\/upload\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(app)/[url]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
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
