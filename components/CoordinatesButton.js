
 const React = require('react');

 class CoordinatesButton extends React.Component {
   constructor() {
     super();
     this.handleClick = this.handleClick.bind(this)
   }

   handleClick(event) {
     this.props.onReceiveCoordinates([event.clientX, event.clientY])
   }

   render() {
     return(
       <button onClick={this.handleClick}> Button </button>
     )
   }
 }

module.exports = CoordinatesButton;
