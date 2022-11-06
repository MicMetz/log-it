module.exports = (sequelize, DataTypes, Modal) => {

    class Tweets extends Modal {}

    Tweets.init({
        // Modal attributes are defined here
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        createdate: {
          type: DataTypes.DATE
          // allowNull defaults to true
        },
        updateddate: {
            type: DataTypes.DATE
            // allowNull defaults to true
        },
        createdby: {
            type: DataTypes.STRING,
            allowNull: false
        },
        updatedby: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
      }, {
        // Other modal options go here
        sequelize, // We need to pass the connection instance
        modalName: 'tweets' // We need to choose the modal name
      });

      return Tweets;
}
