import axios from 'axios'

async function Api(url){
    try {const res = await axios.get(url);
        return res;
    } catch (error) {
        return true;
    }

}
export default Api;