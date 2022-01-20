const settings = {
	name: 'kebla',
	state: {
		frontity: {
			//url: 'http://kebla.test',
			url: 'https://kebla-admin.demoapp.xyz/employers',
			title: 'Kalibrr Landing Page',
			description: 'Kalibrr Landing Page'
		}
	},
	packages: [
		{
			name: 'kebla-theme'
		},
		{
			name: '@frontity/wp-source',
			state: {
				source: {
					//url: 'http://kebla.test',
					url: 'https://kebla-admin.demoapp.xyz'
				}
			}
		},
		'@frontity/tiny-router',
		'@frontity/html2react'
	]
};

export default settings;
