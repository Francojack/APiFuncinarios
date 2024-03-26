module.exports = {up : (queryInterface, Sequelize)=> { queryInterface.createTable('funcionarios', {
  id: {
    type : Sequelize.INTEGER,
    allowNull : false,
    autoIncrement : true,
    primaryKey : true,
   },
   nome : {
    type : Sequelize.STRING,
    allowNull : true,
   },
   email : {
    type : Sequelize.STRING,
    allowNull : true,
   },
   cargo : {
    type : Sequelize.STRING,
    allowNull : true,
   },
   created_at : {
    type: Sequelize.DATE,
    allowNull : true,

   },
   updated_at : {
    type: Sequelize.DATE,
    allowNull : true,
  },

}),

down (queryInterface) => {queryInterface.dropTable('funcionarios');};}
};
