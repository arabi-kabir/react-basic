import axios from "axios";

class RestClient {
    static getRequest(url) {
        axios.get(url).then(response => {
            return response.data;
        }).catch(error => {
            return null;
        })
    }
}

export default RestClient;