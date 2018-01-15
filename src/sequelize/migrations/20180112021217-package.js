module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('packages', {
            id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            logo: {
                type: Sequelize.STRING(128),
            },
            name: {
                type: Sequelize.STRING(128)
            },
            description: {
                type: Sequelize.STRING(4096)
            },
            download_32: {
                type: Sequelize.STRING(2048)
            },
            download_64: {
                type: Sequelize.STRING(2048)
            },
            bitness: {
                type: Sequelize.STRING(4)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            deletedAt: {
                type: Sequelize.DATE
            }
        }, {
            timestamps: true
        });
    },

    down: (queryInterface, Sequelize) => {
        queryInterface.dropTable('Packages');
    }
};