import { readable } from 'svelte/store';

const breakpoints = [
	{ size: 0, columns: 1},
	{ size: 640, columns: 2 },
	{ size: 768, columns: 2 },
	{ size: 1024, columns: 3 },
	{ size: 1280, columns: 4 },
	{ size: 1536, columns: 4 },
  ];

const getColumns = () => {
	var a = 0
	for (const breakpoint of breakpoints) {
		if (globalThis.innerWidth > breakpoint.size) {
			a = breakpoint.columns;
		}
	}
	return a
};
let currentColumnCount = getColumns();
export const time = readable(currentColumnCount, function start(set) {
	const onResize = () => {
		const screenWidth = globalThis.innerWidth;
	  for (const breakpoint of breakpoints) {
		if (screenWidth >= breakpoint.size) {
		  currentColumnCount = breakpoint.columns;
		}
	  }
		set(currentColumnCount);
	};

	// window.addEventListener('resize', onResize);

	return function stop() {
		// window.removeEventListener('resize', onResize);
	};
});