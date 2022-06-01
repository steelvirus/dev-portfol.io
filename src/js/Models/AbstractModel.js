export class AbstractModel {
    _primary = 'id';
    _attributes = {};
    _definitions = {};

    constructor(attributes) {
        this._attributes = Object.entries(attributes).filter(([name, value]) => this._definitions.hasOwnProperty(name) || name === this._primary);
    }

    getAttr(name) {
        return this._attributes?.[name];
    }

    setAttr(name, value) {
        if (this._definitions.hasOwnProperty(name)) {
            this._attributes[name] = value;
        }
    }
}