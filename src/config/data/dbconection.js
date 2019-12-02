import Sequelize from 'sequelize';
import dbConfig from '../dataaccess';

import Task from '../../models/Task';

const models = [Task];

class Data {
    constructor() {
        this.init();
    }

    init() {

        this.conn = new Sequelize(dbConfig);

        this.conn.authenticate()
            .then(function () {
                console.log('Successfully Connected!');
            })
            .catch(function (err) {
                console.error("Connection error ", err);
            });

            // for each model in models, init connection
            models
            .map(model => model.init(this.conn))
            .map(model => model.associate && model.associate(this.conn.models));
    }
}

export default new Data();