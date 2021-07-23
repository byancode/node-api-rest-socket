module.exports = {
	apps: [
		{
			name: 'indriverbot',
			script: 'src/app.js',
			instances: 1,
			watch: ['.'],
			max_memory_restart: '1G',
			node_args: '--experimental-modules --es-module-specifier-resolution=node',
			env: {
				NODE_ENV: 'development',
			},
			env_production: {
				NODE_ENV: 'production',
			},
		},
	],
};
