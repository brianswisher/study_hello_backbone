require("../stylesheets/study_hello_backbone.css");
require("../stylesheets/fonts.css");

var StudyHelloBackbone = require('./study_hello_backbone/StudyHelloBackbone.jsx');
var React = require('react');

React.render(
  <StudyHelloBackbone />,
  document.getElementById('viewport')
);
