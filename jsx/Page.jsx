var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="page">
        {/*<Sidebar name={ this.state.site.name } tagline={ this.state.site.tagline } bio={ this.state.site.bio }/>*/}
        {/*<Work shots={ this.state.shots } layout={ this.state.layout } changeLayout={ this.changeLayout }/>*/}
      </div>
    );
  }
})

module.exports = Header;
