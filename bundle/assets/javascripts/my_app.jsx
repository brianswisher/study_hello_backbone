require("../stylesheets/my_app.css");
require("../stylesheets/fonts.css");

var MyApp = require('./my_app/MyApp.jsx');
var React = require('react');

React.render(
  <MyApp />,
  document.getElementById('viewport')
);
