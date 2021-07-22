import AnnouncementService from '../../services/AnnouncementService';

const state = {
    announcements: []
};

const getters = {
    allAnnouncements: (state) => state.announcements,
    latestAnnouncements: (state) => state.announcements.slice(0, 2)
};

const actions = {
    async fetchAnnouncements({ commit }) {
        const response = await AnnouncementService.getAnnouncement();

        commit('setAnnouncements', response);
    }
};

const mutations = {
    setAnnouncements (state, announcements) { 
        state.announcements = announcements.reverse();
        state.announcements.map(d => d.date = new Date(d.date));
    }
};


export default {
    state,
    getters,
    mutations,
    actions
}