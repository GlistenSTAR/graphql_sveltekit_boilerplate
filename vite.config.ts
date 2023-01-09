import { kitql } from '@kitql/all-in';
import houdini from 'houdini/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		kitql({
			projectName: 'init'
			// prismaFileForEnums: './prisma/schema.prisma'
		}),
		houdini(),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
