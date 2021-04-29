import axios from 'axios'

const Base_url="http://localhost:8081/profile/";

class SocialService{

    getAllProfiles(){
        return axios.get(Base_url);
    }
}

export default new SocialService();