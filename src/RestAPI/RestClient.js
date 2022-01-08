import axios from "axios";

class RestClient {
    static getRequest = (url) => {
        return axios.get(url).then(response => {
            return response.data;
        }).catch(error => {
            return null;
        })
    }

    static postRequest = (postURL, postData) => {
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        return axios.post(postURL, postData, config).then(response => {
            return response.data;
        }).catch(error => {
            return null;
        })
    }
}

export default RestClient;