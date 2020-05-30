"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "how Jend quit smoking",
          description: "he quit quitting",
          backgroundColor: "#eb4034",
          color: "#36332f",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "how I started smoking",
          description: "because I enrolled in Codaisseur",
          backgroundColor: "#eb4034",
          color: "#36332f",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  },
};
