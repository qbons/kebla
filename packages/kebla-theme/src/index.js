import Root from "./components";

import KeblaAPI from './kebla-api';

const keblaTheme = {
	name: "kebla-theme",
	roots: {
		theme: Root,
	},
	state: {
		theme: {
			isMobileMenuOpen: false,
			isPopFeatOpen: false,
			autoPrefetch: 'in-view',
			//api: 'http://kebla.test/wp-json/kebla/v1/',
			api: 'https://kebla-admin.demoapp.xyz/wp-json/kebla/v1/',
			//api: 'https://employers.kalibrr.com/wp-json/kebla/v1/',
			autoPrefetch: 'in-view',
			hiring: {
				package: '',
				email: '',
				name: '',
				employee: '',
				position: '',
				phone: {
					name: '',
					prefix: '+63',
					number: '',
					code: 'ph'
				},
				companyName: '',
				jobs: '',
				users: '',
				duration: '',
				currency: '',
				total: '',
				monthly: '',
				needs: []
			}
		},
	},
	actions: {
		theme: {
			beforeSSR: async ({ state, actions }) => {
				
			},
			toggleMobileMenu: ({state}) => {
				state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
				state.theme.isMobileMenuOpen ? document.body.classList.add('open-menu') : document.body.classList.remove('open-menu');
			},
			togglePopFeat: ({state}) => {
				state.theme.isPopFeatOpen = !state.theme.isPopFeatOpen;
				state.theme.isPopFeatOpen ? document.body.classList.add('open-popfeat') : document.body.classList.remove('open-popfeat');
			},
			resetHiring:({state}) => {
				
				state.theme.hiring = {
					package: '',
					email: '',
					name: '',
					employee: '',
					position: '',
					phone: {
						name: '',
						prefix: '+63',
						number: '',
						code: 'ph'
					},
					companyName: '',
					jobs: '',
					users: '',
					duration: '',
					currency: '',
					total: '',
					monthly: '',
					needs: []
				}
			}
		},
	},
	libraries: {
		source:{ 
			handlers:  KeblaAPI()
		}
	},
}
export default keblaTheme;