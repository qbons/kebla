
const KeblaAPI = () => {
        return [
                {
                        // HOMEPAGE EN
                        pattern: "/",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/homepage-en`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHomepage: true});
                        }
                }, 
                {
                        // HOMEPAGE ID
                        pattern: "/id",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/homepage-id`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHomepage: true});
                        }
                }, 
                {
                        // HIRING STEP 1 EN
                        pattern: "/hiring",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/hiring/en/info`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHiring: true});
                        }
                }, 
                {
                        // HIRING STEP 1 - 2 EN
                        pattern: "/hiring/needs",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/hiring/en/needs`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHiring: true});
                        }
                }, 
                {
                        // HIRING STEP 2 EN
                        pattern: "/hiring/price",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/hiring/en/price`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHiring: true});
                        }
                }, 
                {
                        // HIRING STEP 2 - 2 EN
                        pattern: "/hiring/demo-schedule",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/hiring/en/demo-schedule`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHiring: true});
                        }
                }, 
                {
                        // HIRING STEP 3 ORDER THAK YOU
                        pattern: "/hiring/order-thank-you",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/hiring/en/order-thank-you`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHiring: true});
                        }
                }, 
                {
                        // HIRING STEP 3 ORDER THAK YOU
                        pattern: "/hiring/thank-you-demo",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/hiring/en/thank-you-demo`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHiring: true});
                        }
                }, 
                {
                        // HIRING STEP 1 ID
                        pattern: "/id/hiring",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/hiring/id/info`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHiring: true});
                        }
                }, 
                {
                        // HIRING STEP 1 - 2 ID
                        pattern: "/id/hiring/needs",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/hiring/id/needs`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHiring: true});
                        }
                }, 
                {
                        // HIRING STEP 2 ID
                        pattern: "/id/hiring/price",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/hiring/id/price`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHiring: true});
                        }
                }, 
                {
                        // HIRING STEP 2 - 2 ID
                        pattern: "/id/hiring/demo-schedule",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/hiring/id/demo-schedule`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHiring: true});
                        }
                }, 
                {
                        // HIRING STEP 3 ORDER THAK YOU ID
                        pattern: "/id/hiring/order-thank-you",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/hiring/id/order-thank-you`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHiring: true});
                        }
                }, 
                {
                        // HIRING STEP 3 ORDER THAK YOU ID
                        pattern: "/id/hiring/thank-you-demo",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/hiring/id/thank-you-demo`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option, isHiring: true});
                        }
                }, 
                {
                        // PAGE EN
                        pattern: "/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/page/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option,[option.data.marker]: true });
                        }
                }, 
                {
                        // PAGE ID
                        pattern: "/id/:slug",
                        func: async ({ route, params, state, libraries, force }) => {
                                const response = await libraries.source.api.get({
                                        endpoint: `/kebla/v1/page/id/${params.slug}`
                                });
                                const option = await response.json(); 
                                const data = state.source.get(route);
                                Object.assign(data, { ...option,[option.data.marker]: true });
                        }
                }, 
        ];
}

export default KeblaAPI;