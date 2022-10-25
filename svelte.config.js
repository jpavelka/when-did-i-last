import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
        paths: {
            base: process.env.NODE_ENV === 'production' ? "/when-did-i-last" : "",
        },
	},
	preprocess: preprocess()
};

export default config;