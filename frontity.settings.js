const settings = {
	name: 'kebla',
	state: {
		frontity: {
			url: 'http://kebla.test',
			//url: 'https://kebla.vercel.app',
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
					url: 'https://kebla-admin.demoapp.xyz',
					//url: 'https://employers.kalibrr.com'
				}
			}
		},
		{
			name: "@frontity/google-tag-manager-analytics",
			state: {
			  	googleTagManagerAnalytics: {
			    		//containerId: "GTM-N69WSKL",
					containerId: "GTM-TV53C4",
			  	},
			},
		},
		'@frontity/tiny-router',
		'@frontity/html2react'
	]
};

export default settings;
