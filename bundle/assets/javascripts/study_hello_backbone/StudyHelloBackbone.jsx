require("../../stylesheets/study_hello_backbone/main.css");

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('lodash');

var React = require('react');

module.exports =
  React.createClass({

    displayName: 'StudyHelloBackbone',

    componentDidMount: function() {

      // Backbone.sync = function(method, model, success, error){
      //   success();
      // }

      var Item = Backbone.Model.extend({
        urlRoot: '/api/items',
        idAttribute: "_id",
        defaults: {
          part1: 'hello',
          part2: 'world'
        }
      });

      var List = Backbone.Collection.extend({
        model:Item,
        url:"/api/items"
      });

      var ItemView = Backbone.View.extend({
        tagName: 'li',

        events: {
          'click span.swap':  'swap',
          'click span.delete': 'remove'
        },

        initialize: function(){
          _.bindAll(this, 'render', 'unrender', 'swap', 'remove');

          this.model.bind('change', this.render);
          this.model.bind('remove', this.unrender);
        },

        render: function(){
          $(this.el).html('<span style="color:black;">'+
            this.model.get('part1')+' '+this.model.get('part2')+
            '</span> &nbsp; &nbsp; '+
            '<span class="swap" '+
              'style="font-family:sans-serif; color:blue; cursor:pointer;">'+
                '[swap]</span> '+
            '<span class="delete" '+
              'style="cursor:pointer; color:red; font-family:sans-serif;">'+
                '[delete]</span>');
          return this;
        },

        unrender: function(){
          $(this.el).remove();
        },

        swap: function(){
          var swapped = {
            part1: this.model.get('part2'),
            part2: this.model.get('part1')
          };
          this.model.set(swapped);
        },

        remove: function(){
          this.model.collection.remove(this.model);
          this.model.destroy();
        }
      });

      var ListView = Backbone.View.extend({
        el: $('#viewport'),
        events: {
          'click button#add': 'addItem',
          'change input#name': 'changeName'
        },

        initialize: function(){
          _.bindAll(this, 'render', 'addItem', 'appendItem', 'changeName');

          var that = this;

          this.counter = 0;

          this.collection = new List();
          this.collection.fetch({context:this.collection}).done(function(){
            that.counter = this.length;
          });
          this.collection.bind('add', this.appendItem);

          this.render();
        },

        render: function(){
          $(this.el).append("<button id='add'>Add list item</button>");
          $(this.el).append("<input type='text' id='part1' value='hello' />");
          $(this.el).append("<ul></ul>");
        },

        changeName:function(e){
          $target = $(e.target);
          this.name = $target.val();
        },

        addItem:function(e){
          this.counter++;
          var item = new Item();
          var $part1 = $('#part1');
          item.set({
            part1: $part1.val(),
            part2: item.get('part2') + this.counter
          });
          item.save();
          this.collection.add(item);
        },

        appendItem: function(item){
          var itemView = new ItemView({
            model: item
          });
          $('ul', this.el).append(itemView.render().el);
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
