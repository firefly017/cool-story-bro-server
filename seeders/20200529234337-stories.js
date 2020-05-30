"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "My first assessment",
          content: "yaaaaasssssssssssss I passed",
          imageUrl:
            "https://memegenerator.net/img/instances/39407275/me-when-i-passed-my-exam.jpg",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "My second assessment",
          content: "preparing to pass this shit",
          imageUrl:
            "https://memegenerator.net/img/instances/39407275/me-when-i-passed-my-exam.jpg",
          homepageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "My final assessment",
          content: "preparing to pass this shit",
          imageUrl:
            "https://memegenerator.net/img/instances/39407275/me-when-i-passed-my-exam.jpg",
          homepageId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "My portfolio project",
          content: "preparing to pass this shit",
          imageUrl:
            "https://memegenerator.net/img/instances/39407275/me-when-i-passed-my-exam.jpg",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  },
};
