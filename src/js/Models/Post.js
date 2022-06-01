import {AbstractModel} from "./AbstractModel";
import {PostService} from "../Services/PostService";

export class Post extends AbstractModel {
    _definitions = {
        'id': 'integer',
        'type': 'string',
        'name': 'string',
        'title': 'string',
        'content': 'string',
        'properties': 'object'
    };

    #getPostService() {
        return new PostService();
    }

    delete() {
        return this.#getPostService().delete(this);
    }

    update(attributes) {
        return this.#getPostService().update(this, attributes);
    }

    save() {
        const primaryKey = this.getAttr(this._primary) ?? null;

        if (primaryKey) {
            return this.#getPostService().update(this, this._attributes);
        }

        return this.#getPostService().create(this._attributes).then((newModel) => {
            this.setAttr(this._primary, newModel.getAttr(this._primary));
            
            return this;
        });
    }
}