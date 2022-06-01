import axios from "axios";
import {config} from "genesis-ui-app/src/js/GenesisApp";
import {Post} from "../Models/Post";

export class PostService {
    getByTypeAndName(type, name) {
        return axios.get(config('app.api') + 'posts/' + type + '/' + name).then((response) => {
            return new Post(response.data);
        });
    }

    getById(id) {
        return axios.get(config('app.api') + 'posts/' + id).then((response) => {
            return new Post(response.data);
        });
    }

    delete(post) {

    }

    update(post, attributes) {

    }

    create(attributes) {
        
    }
}