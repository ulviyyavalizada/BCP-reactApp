export default {
    currentLanguage: {
        current: localStorage.getItem('locale') || 'az'
    },

    home: {
        data: {},
        load: false,
        failed: false,
    },

    services: {
        data: [],
        load: false,
        failed: false,
    },
    
    portfolios: {
        data: [],
        load: false,
        failed: false,
    },

    projects: {
        data: [],
        load: false,
        failed: false,
    },

    contacts: {
        data: [],
        load: false,
        failed: false
    },

    about: {
        data: [],
        load: false,
        failed: false
    },
}