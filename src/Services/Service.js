import axios from 'axios'

const Base_url="http://localhost:8081";

class SocialService{

    getAllProfiles(){
        return axios.get(`${Base_url}/profile`);
    }

    login(req){
        return axios.post(`${Base_url}/user/login`,req)
    }

    getProfile(email){
        return axios.get(`${Base_url}/profile/${email}`)
    }
}

export default new SocialService();