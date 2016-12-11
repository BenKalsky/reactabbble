var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <div className="content">
        <h1>Parallax Scrolling without javascript</h1>
        <p>
          Yesterday I was wondering if it would be possible to create a parallax header,
          like the one used on Medium, using only CSS. I figured it should be possible
          using 3d transforms. Turns out <a href="http://twitter.com/scottkellum">Scott Kellum</a> has already made <a href="http://codepen.io/scottkellum/pen/bHEcA">a demo on CodePen</a> using just that.
        </p>

        <p>
          I wanted to see it work on something else than images of kittens, so I made this little demo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        {/*<Sidebar name={ this.state.site.name } tagline={ this.state.site.tagline } bio={ this.state.site.bio }/>*/}
        {/*<Work shots={ this.state.shots } layout={ this.state.layout } changeLayout={ this.changeLayout }/>*/}
      </div>
    );
  }
})

module.exports = Header;
