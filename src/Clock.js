// import React from 'react';
// import ReactDOM from 'react-dom';

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }
//   render() {
//     return <div  style={{
//             padding: 10,
//             color: "red",
//             border: "solid black 2px",
//             borderradius: "2px",
//           }} >{this.state.date.toLocaleTimeString()}</div>;
//   }
//   componentDidMount() {
//    const oneSecond = 1000;
// this.intervalId = setInterval(() => {
//   this.setState({ date: new Date() });
// }, oneSecond);
//   }
//  componentWillUnmount() {
//     clearInterval(this.intervalID);
//  }
// ReactDOM.render(<Clock />, document.getElementById('app'));