
import state from './state';
import Store from '../base';


export default class Picklists extends Store {
    constructor(model, ng){

        state.model = model;

        super({state, ng});
    }
}