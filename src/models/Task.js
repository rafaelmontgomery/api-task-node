import Sequelize, { Model } from 'sequelize';

class Task extends Model {
  static init(sequelize) {
      // init sequelize conection
    super.init(
      {
        dscTask: Sequelize.STRING,
      },
      {          
        sequelize,
      }
    );

    return this;
  }
}

export default Task;
