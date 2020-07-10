const Task = require("../models/task");

// home controllers
module.exports.home = function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log("Error fetching tasks", err);
      return;
    }

    return res.render("home", {
      title: "TODO APP",
      task_list: tasks,
    });
  });
};
