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

        events: {
          'click button#add': 'addItem'
        },
        initialize: function(){
          _.bindAll(this, 'render');

          this.counter = 0;
          this.render();
        },

        render: function(){
          $(this.el).append("<button id='add'>Add list item</button>");
          $(this.el).append("<ul></ul>");
        },

        addItem:function(){
          this.counter++;
          $('ul', this.el).append("<li>hello world"+this.counter+"</li>");
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
