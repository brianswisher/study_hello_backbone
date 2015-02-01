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

      var Item = Backbone.Model.extend({
        defaults:{
          part1: 'hello',
          part2: 'world'
        }
      });

      var List = Backbone.Collection.extend({
        model: Item
      });

      var ListView = Backbone.View.extend({
        el: $('#viewport'),
        events: {
          'click button#add': 'addItem'
        },

        initialize: function(){
          _.bindAll(this, 'render', 'addItem', 'appendItem');

          this.collection = new List();
          this.collection.bind('add', this.appendItem);

          this.counter = 0;
          this.render();
        },

        render: function(){
          $(this.el).append("<button id='add'>Add list item</button>");
          $(this.el).append("<ul></ul>");
        },

        addItem:function(){
          this.counter++;
          var item = new Item();
          item.set({
            part2: item.get('part2') + this.counter
          });
          this.collection.add(item);
        },

        appendItem: function(item){
          $('ul', this.el).append("<li>"+item.get('part1')+" "+item.get('part2')+"</li>");
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
