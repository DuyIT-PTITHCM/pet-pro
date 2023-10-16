const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","fonts/kanit/Kanit-BlackItalic.ttf","fonts/kanit/Kanit-Bold.ttf","fonts/kanit/Kanit-BoldItalic.ttf","fonts/kanit/Kanit-ExtraBold.ttf","fonts/kanit/Kanit-ExtraBoldItalic.ttf","fonts/kanit/Kanit-ExtraLight.ttf","fonts/kanit/Kanit-ExtraLightItalic.ttf","fonts/kanit/Kanit-Italic.ttf","fonts/kanit/Kanit-Light.ttf","fonts/kanit/Kanit-LightItalic.ttf","fonts/kanit/Kanit-Medium.ttf","fonts/kanit/Kanit-MediumItalic.ttf","fonts/kanit/Kanit-Regular.ttf","fonts/kanit/Kanit-SemiBold.ttf","fonts/kanit/Kanit-SemiBoldItalic.ttf","fonts/kanit/Kanit-Thin.ttf","fonts/kanit/Kanit-ThinItalic.ttf","images/avt.png","images/common/cardheader.png","images/common/cat-bg.jpg","images/common/cat-empty-cart.png","images/home-panner/1.jpg","images/home-panner/2.jpg","images/home-panner/3.jpg","images/home-panner/4.jpg","images/home-panner/5.jpg","images/home-panner/6.jpg","images/homepage/benefit.jpg","images/homepage/benefit2.jpg","images/homepage/bgne.jpg","images/homepage/lientsaybg.jpg","images/homepage/ourteam.jpg","images/loginbg.jpg","images/logo.png","images/signupbg.jpg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".png":"image/png",".ttf":"font/ttf",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.16c0e89e.js","app":"_app/immutable/entry/app.5098bdcd.js","imports":["_app/immutable/entry/start.16c0e89e.js","_app/immutable/chunks/scheduler.12c735be.js","_app/immutable/chunks/singletons.b7ff1f7b.js","_app/immutable/chunks/index.9d0d763a.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.5098bdcd.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.12c735be.js","_app/immutable/chunks/index.c6264268.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-eb24b67b.js')),
			__memo(() => import('./chunks/1-bff017cf.js')),
			__memo(() => import('./chunks/2-e846fc4b.js')),
			__memo(() => import('./chunks/3-56ee702c.js')),
			__memo(() => import('./chunks/4-9ed4e4ce.js')),
			__memo(() => import('./chunks/5-27eecd30.js')),
			__memo(() => import('./chunks/6-a601dacb.js')),
			__memo(() => import('./chunks/7-206be2f4.js')),
			__memo(() => import('./chunks/8-c38f6cc7.js')),
			__memo(() => import('./chunks/9-f88d58d9.js')),
			__memo(() => import('./chunks/10-0fb4db95.js')),
			__memo(() => import('./chunks/11-0954c19c.js')),
			__memo(() => import('./chunks/12-e93aa8e4.js')),
			__memo(() => import('./chunks/13-373f9bfd.js')),
			__memo(() => import('./chunks/14-d5666438.js')),
			__memo(() => import('./chunks/15-645f21d9.js')),
			__memo(() => import('./chunks/16-2991d9ea.js')),
			__memo(() => import('./chunks/17-58040389.js')),
			__memo(() => import('./chunks/18-ce16d1b2.js')),
			__memo(() => import('./chunks/19-ace55550.js')),
			__memo(() => import('./chunks/20-1d6465eb.js')),
			__memo(() => import('./chunks/21-ef182cb8.js')),
			__memo(() => import('./chunks/22-80d1e471.js')),
			__memo(() => import('./chunks/23-8ec20214.js')),
			__memo(() => import('./chunks/24-03ff3d8b.js')),
			__memo(() => import('./chunks/25-b854a900.js')),
			__memo(() => import('./chunks/26-01128b0b.js')),
			__memo(() => import('./chunks/27-1a23dc73.js')),
			__memo(() => import('./chunks/28-ce75a553.js')),
			__memo(() => import('./chunks/29-a4f5543b.js')),
			__memo(() => import('./chunks/30-dc174660.js')),
			__memo(() => import('./chunks/31-b4099b36.js')),
			__memo(() => import('./chunks/32-8a3a355d.js')),
			__memo(() => import('./chunks/33-ea8759ee.js')),
			__memo(() => import('./chunks/34-aec6ec6a.js'))
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
				page: { layouts: [0,3,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog",
				pattern: /^\/admin\/blog\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog/create",
				pattern: /^\/admin\/blog\/create\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog/[id]",
				pattern: /^\/admin\/blog\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/categories-management",
				pattern: /^\/admin\/categories-management\/?$/,
				params: [],
				page: { layouts: [0,3,5,], errors: [1,,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/menu-management",
				pattern: /^\/admin\/menu-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products",
				pattern: /^\/admin\/products\/?$/,
				params: [],
				page: { layouts: [0,3,6,], errors: [1,,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/create",
				pattern: /^\/admin\/products\/create\/?$/,
				params: [],
				page: { layouts: [0,3,6,], errors: [1,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/[id]",
				pattern: /^\/admin\/products\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,6,], errors: [1,,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service",
				pattern: /^\/admin\/service\/?$/,
				params: [],
				page: { layouts: [0,3,7,], errors: [1,,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service/create",
				pattern: /^\/admin\/service\/create\/?$/,
				params: [],
				page: { layouts: [0,3,7,], errors: [1,,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service/[id]",
				pattern: /^\/admin\/service\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,7,], errors: [1,,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/test-print",
				pattern: /^\/admin\/test-print\/?$/,
				params: [],
				page: { layouts: [0,3,8,], errors: [1,,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/user-management",
				pattern: /^\/admin\/user-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(dasboard)/customer",
				pattern: /^\/customer\/?$/,
				params: [],
				page: { layouts: [0,9,], errors: [1,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(app)/dich-vu/[slug]",
				pattern: /^\/dich-vu\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(app)/gio-hang",
				pattern: /^\/gio-hang\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(app)/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(app)/san-pham/[slug]",
				pattern: /^\/san-pham\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(app)/tin-tuc/[slug]",
				pattern: /^\/tin-tuc\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/upload",
				pattern: /^\/upload\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 34 },
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
