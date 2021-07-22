import axios from 'axios';

const url = 'http://localhost:3000/announcements';

class AnnouncementService {
    static async getAnnouncement() {
        let response = await axios.get(url).then(data => response = data.data);
        return response;
    }
}

export default AnnouncementService;