module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('', 'vocal3', {
      type: Sequelize.STRING, // Tipo da coluna
      allowNull: false, // Define se pode ser nulo
      defaultValue: '' // Valor padrão (opcional)
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('agendalouvor', 'vocal3');
  }
};
