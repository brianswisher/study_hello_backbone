require("../../stylesheets/study_hello_backbone/main.css");

// var $ = require('jquery');
// var keymaster = require('keymaster');
// var _ = require('lodash');
// var data = preload_data;

var React = require('react');

module.exports =
  React.createClass({

    displayName: 'StudyHelloBackbone',

    render:function(){
      return (
        <div className="app">
          Study Hello Backbone
        </div>
      )
    }
  });
