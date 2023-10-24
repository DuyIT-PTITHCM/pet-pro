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
		client: {"start":"_app/immutable/entry/start.2d34cf01.js","app":"_app/immutable/entry/app.c9d43af8.js","imports":["_app/immutable/entry/start.2d34cf01.js","_app/immutable/chunks/scheduler.e174163e.js","_app/immutable/chunks/singletons.a17c0f3b.js","_app/immutable/chunks/index.b73f4ba6.js","_app/immutable/entry/app.c9d43af8.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.e174163e.js","_app/immutable/chunks/index.4ef71c6a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-4f825ea1.js')),
			__memo(() => import('./chunks/1-f8aa5a50.js')),
			__memo(() => import('./chunks/2-76f2f753.js')),
			__memo(() => import('./chunks/3-c912d52a.js')),
			__memo(() => import('./chunks/4-6a27656e.js')),
			__memo(() => import('./chunks/5-8374f68b.js')),
			__memo(() => import('./chunks/6-446ee63e.js')),
			__memo(() => import('./chunks/7-29334962.js')),
			__memo(() => import('./chunks/8-c3883dc9.js')),
			__memo(() => import('./chunks/9-dedeaade.js')),
			__memo(() => import('./chunks/10-04c62929.js')),
			__memo(() => import('./chunks/11-d435b2e1.js')),
			__memo(() => import('./chunks/12-f54fd4e5.js')),
			__memo(() => import('./chunks/13-67c13271.js')),
			__memo(() => import('./chunks/14-98d483ad.js')),
			__memo(() => import('./chunks/15-0c468353.js')),
			__memo(() => import('./chunks/16-da6c4503.js')),
			__memo(() => import('./chunks/17-d788d24b.js')),
			__memo(() => import('./chunks/18-2c87c529.js')),
			__memo(() => import('./chunks/19-713a61dc.js')),
			__memo(() => import('./chunks/20-0277b0a7.js')),
			__memo(() => import('./chunks/21-1e9a41c6.js')),
			__memo(() => import('./chunks/22-aad8d9e7.js')),
			__memo(() => import('./chunks/23-6c39b297.js')),
			__memo(() => import('./chunks/24-bd70bc30.js')),
			__memo(() => import('./chunks/25-287f2f69.js')),
			__memo(() => import('./chunks/26-252a4beb.js')),
			__memo(() => import('./chunks/27-ee8d794e.js')),
			__memo(() => import('./chunks/28-2c01b8d2.js')),
			__memo(() => import('./chunks/29-907d0a66.js')),
			__memo(() => import('./chunks/30-13935ed1.js')),
			__memo(() => import('./chunks/31-dffb9114.js')),
			__memo(() => import('./chunks/32-db80bc7e.js')),
			__memo(() => import('./chunks/33-f84b1705.js'))
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
				page: { layouts: [0,3,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog",
				pattern: /^\/admin\/blog\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog/create",
				pattern: /^\/admin\/blog\/create\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog/[id]",
				pattern: /^\/admin\/blog\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/categories-management",
				pattern: /^\/admin\/categories-management\/?$/,
				params: [],
				page: { layouts: [0,3,5,], errors: [1,,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/menu-management",
				pattern: /^\/admin\/menu-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products",
				pattern: /^\/admin\/products\/?$/,
				params: [],
				page: { layouts: [0,3,6,], errors: [1,,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/create",
				pattern: /^\/admin\/products\/create\/?$/,
				params: [],
				page: { layouts: [0,3,6,], errors: [1,,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/[id]",
				pattern: /^\/admin\/products\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,6,], errors: [1,,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service",
				pattern: /^\/admin\/service\/?$/,
				params: [],
				page: { layouts: [0,3,7,], errors: [1,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service/create",
				pattern: /^\/admin\/service\/create\/?$/,
				params: [],
				page: { layouts: [0,3,7,], errors: [1,,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service/[id]",
				pattern: /^\/admin\/service\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,7,], errors: [1,,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/test-print",
				pattern: /^\/admin\/test-print\/?$/,
				params: [],
				page: { layouts: [0,3,8,], errors: [1,,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/user-management",
				pattern: /^\/admin\/user-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(dasboard)/customer",
				pattern: /^\/customer\/?$/,
				params: [],
				page: { layouts: [0,9,], errors: [1,,], leaf: 30 },
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
				page: { layouts: [0,], errors: [1,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(app)/san-pham/[slug]",
				pattern: /^\/san-pham\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(app)/tin-tuc/[slug]",
				pattern: /^\/tin-tuc\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/upload",
				pattern: /^\/upload\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 33 },
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
