import axios from 'axios'

const Base_url="http://localhost:8081";

class SocialService{

    getAllProfiles(){
        return axios.get(`${Base_url}/profile`);
    }

    login(req){
        return axios.post(`${Base_url}/user/login`,req)
    }

    addFriend(email,friendEmail){
        return axios.put(`${Base_url}/profile/friend/${email}`,{friendEmail:friendEmail})
    }

    addPhoto(email,selectedImage){
        return axios.put(`${Base_url}/profile/photo/${email}`,{photo:selectedImage})
    }

    deletePhoto(email,selectedImage){
        return axios.put(`${Base_url}/profile/removephoto/${email}`,{photo:selectedImage})
    }
    
    getProfile(email){
        return axios.get(`${Base_url}/profile/${email}`)
    }

    createNewUser(req){
        return axios.post(`${Base_url}/user`,req)
    }

    updateProfile(userName,email,city,state,gender,profession,profileImage){
        return axios.put(`${Base_url}/profile/${email}`,{userName,city,state,gender,profession,profileImage})
    }
}

export default new SocialService();