require("../../stylesheets/study_hello_backbone/main.css");

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('lodash');
// var keymaster = require('keymaster');
// var data = preload_data;

var React = require('react');

module.exports =
  React.createClass({

    displayName: 'StudyHelloBackbone',

    componentDidMount: function() {

      var ListView = Backbone.View.extend({
        el: $('#viewport'),

        initialize: function(){
          _.bindAll(this, 'render');

          this.render();
        },

        render: function(){
          $(this.el).append("<ul> <li>hello world</li> </ul>");
        }
      });

      var listView = new ListView();

    },

    render:function(){
      return (
        <div className="app">
          Study Hello Backbone
        </div>
      )
    }
  });
