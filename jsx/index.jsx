// Problems with reading the .json files? Try `ulimit -n 4096`.

var React = require('react');
window.jQuery = require('jquery');
var jribbble = require('jribbble');
var data = require('./sample-api');
var site = require('./site');
var Sidebar = require('./Sidebar');
var Work = require('./Work');

var App = React.createClass({
  getInitialState: function() {
    return {
      shots: false,
      site: site,
      layout: "tile"
    }
  },
  componentDidMount: function() {
    jQuery.jribbble.setToken('79479912752984e4f81a97b378cf1782b90e80b115560213608560a5d797d671');
    jQuery.jribbble.users('benkalsky').shots().then(function(res) {
      this.setState({
        shots: res
      });
    }.bind(this));
  },
  changeLayout: function(layout) {
    this.setState({
      layout: layout
    });
  },
  render: function() {
    return (
      <div className="app">
        <Sidebar
          name={ this.state.site.name }
          tagline={ this.state.site.tagline }
          bio={ this.state.site.bio }
        />
        <Work
          shots={ this.state.shots }
          layout={ this.state.layout }
          changeLayout={ this.changeLayout }
        />
      </div>
    );
  }
});

module.exports = App;
