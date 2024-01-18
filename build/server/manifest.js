const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicon.png","fonts/kanit/Kanit-BlackItalic.ttf","fonts/kanit/Kanit-Bold.ttf","fonts/kanit/Kanit-BoldItalic.ttf","fonts/kanit/Kanit-ExtraBold.ttf","fonts/kanit/Kanit-ExtraBoldItalic.ttf","fonts/kanit/Kanit-ExtraLight.ttf","fonts/kanit/Kanit-ExtraLightItalic.ttf","fonts/kanit/Kanit-Italic.ttf","fonts/kanit/Kanit-Light.ttf","fonts/kanit/Kanit-LightItalic.ttf","fonts/kanit/Kanit-Medium.ttf","fonts/kanit/Kanit-MediumItalic.ttf","fonts/kanit/Kanit-Regular.ttf","fonts/kanit/Kanit-SemiBold.ttf","fonts/kanit/Kanit-SemiBoldItalic.ttf","fonts/kanit/Kanit-Thin.ttf","fonts/kanit/Kanit-ThinItalic.ttf","images/0ab9bb16-cba9-4b5b-b8f6-16a1439410ab.jpg","images/0f27bb8f-7810-4361-b358-a0f295bc254d.webp","images/1069c1a1-a1e7-4d66-8a6e-1f6307355435.jpg","images/696e25d8-7aa0-4475-a1ed-db9688d8a505.jpg","images/avt.png","images/common/cardheader.png","images/common/cat-bg.jpg","images/common/cat-empty-cart.png","images/e36cc6df-2a51-4cac-8a85-55c0fec35c0e.png","images/home-panner/1.jpg","images/home-panner/2.jpg","images/home-panner/3.jpg","images/home-panner/4.jpg","images/home-panner/5.jpg","images/home-panner/6.jpg","images/home-panner/7.jpg","images/homepage/benefit.jpg","images/homepage/benefit2.jpg","images/homepage/bgne.jpg","images/homepage/lientsaybg.jpg","images/homepage/ourteam.jpg","images/loginbg.jpg","images/logo.png","images/signupbg.jpg"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".jpg":"image/jpeg",".webp":"image/webp"},
	_: {
		client: {"start":"_app/immutable/entry/start.71b26d21.js","app":"_app/immutable/entry/app.e074d31d.js","imports":["_app/immutable/entry/start.71b26d21.js","_app/immutable/chunks/scheduler.11663f07.js","_app/immutable/chunks/singletons.0f1df005.js","_app/immutable/chunks/index.085f92f1.js","_app/immutable/entry/app.e074d31d.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.11663f07.js","_app/immutable/chunks/index.54cd469d.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-d62a0991.js')),
			__memo(() => import('./chunks/1-f872c0bb.js')),
			__memo(() => import('./chunks/2-2f9da342.js')),
			__memo(() => import('./chunks/3-c9429502.js')),
			__memo(() => import('./chunks/4-c37886bf.js')),
			__memo(() => import('./chunks/5-e93aa767.js')),
			__memo(() => import('./chunks/6-393cd50e.js')),
			__memo(() => import('./chunks/7-9c4dc3bb.js')),
			__memo(() => import('./chunks/8-d289572f.js')),
			__memo(() => import('./chunks/9-c48560af.js')),
			__memo(() => import('./chunks/10-8090e1ca.js')),
			__memo(() => import('./chunks/11-a3343705.js')),
			__memo(() => import('./chunks/12-c82512f6.js')),
			__memo(() => import('./chunks/13-f6c92aba.js')),
			__memo(() => import('./chunks/14-1690205e.js')),
			__memo(() => import('./chunks/15-7892a719.js')),
			__memo(() => import('./chunks/16-5d95008c.js')),
			__memo(() => import('./chunks/17-dda6e142.js')),
			__memo(() => import('./chunks/18-9f2fbf2d.js')),
			__memo(() => import('./chunks/19-951c9ed8.js')),
			__memo(() => import('./chunks/20-7d3ede13.js')),
			__memo(() => import('./chunks/21-4f964ceb.js')),
			__memo(() => import('./chunks/22-4376bb7c.js')),
			__memo(() => import('./chunks/23-4bed403b.js')),
			__memo(() => import('./chunks/24-8c53d1bc.js')),
			__memo(() => import('./chunks/25-371d6978.js')),
			__memo(() => import('./chunks/26-05906eda.js')),
			__memo(() => import('./chunks/27-b5a5c1c3.js')),
			__memo(() => import('./chunks/28-d5d50db8.js')),
			__memo(() => import('./chunks/29-550c3941.js')),
			__memo(() => import('./chunks/30-65502a48.js')),
			__memo(() => import('./chunks/31-8d664cd5.js')),
			__memo(() => import('./chunks/32-53c85a2e.js')),
			__memo(() => import('./chunks/33-58444236.js')),
			__memo(() => import('./chunks/34-a3461efc.js')),
			__memo(() => import('./chunks/35-354dcefc.js')),
			__memo(() => import('./chunks/36-c908604a.js')),
			__memo(() => import('./chunks/37-d471a347.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog",
				pattern: /^\/admin\/blog\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog/create",
				pattern: /^\/admin\/blog\/create\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/blog/[id]",
				pattern: /^\/admin\/blog\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/categories-management",
				pattern: /^\/admin\/categories-management\/?$/,
				params: [],
				page: { layouts: [0,3,5,], errors: [1,,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/menu-management",
				pattern: /^\/admin\/menu-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/orders",
				pattern: /^\/admin\/orders\/?$/,
				params: [],
				page: { layouts: [0,3,6,], errors: [1,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products",
				pattern: /^\/admin\/products\/?$/,
				params: [],
				page: { layouts: [0,3,7,], errors: [1,,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/create",
				pattern: /^\/admin\/products\/create\/?$/,
				params: [],
				page: { layouts: [0,3,7,], errors: [1,,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/products/[id]",
				pattern: /^\/admin\/products\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,7,], errors: [1,,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service",
				pattern: /^\/admin\/service\/?$/,
				params: [],
				page: { layouts: [0,3,8,], errors: [1,,,], leaf: 29 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service/create",
				pattern: /^\/admin\/service\/create\/?$/,
				params: [],
				page: { layouts: [0,3,8,], errors: [1,,,], leaf: 30 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/service/[id]",
				pattern: /^\/admin\/service\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,8,], errors: [1,,,], leaf: 31 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/test-print",
				pattern: /^\/admin\/test-print\/?$/,
				params: [],
				page: { layouts: [0,3,9,], errors: [1,,,], leaf: 32 },
				endpoint: null
			},
			{
				id: "/(dasboard)/admin/user-management",
				pattern: /^\/admin\/user-management\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 33 },
				endpoint: null
			},
			{
				id: "/(dasboard)/customer",
				pattern: /^\/customer\/?$/,
				params: [],
				page: { layouts: [0,10,], errors: [1,,], leaf: 34 },
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
				page: { layouts: [0,], errors: [1,], leaf: 35 },
				endpoint: null
			},
			{
				id: "/(app)/order/[code]",
				pattern: /^\/order\/([^/]+?)\/?$/,
				params: [{"name":"code","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(app)/payment",
				pattern: /^\/payment\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/(app)/san-pham/[slug]",
				pattern: /^\/san-pham\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 36 },
				endpoint: null
			},
			{
				id: "/(app)/tin-tuc/[slug]",
				pattern: /^\/tin-tuc\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/upload",
				pattern: /^\/upload\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 37 },
				endpoint: null
			},
			{
				id: "/(app)/[url]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"url","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
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
