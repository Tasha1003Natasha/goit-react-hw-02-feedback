import React from 'react';

export class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    feedback: 0,
  };

  handleClick = event => {
    const { name } = event.target;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return { total: prevState.total };
    });
  };

  render() {
    const { onClick } = this.props;
    const { good, neutral, bad, total, feedback } = this.state;

    return (
      <div className="statistics">
        <div className="btn">
          <h1 className="btn__title">Please leave feedback</h1>
          <button
            type="button"
            name="good"
            className="btn__good"
            onClick={this.handleClick}
          >
            Good
          </button>
          <button
            type="button"
            name="neutral"
            className="btn__neutral"
            onClick={this.handleClick}
          >
            Neutral
          </button>
          <button
            type="button"
            name="bad"
            className="btn__bad"
            onClick={this.handleClick}
          >
            Bad
          </button>
        </div>

        <div className="group">
          <h2 className="group__title">Statistics</h2>
          <ul className="group__list">
            <li className="group__item">Good: {good}</li>
            <li className="group__item">Neutral: {neutral}</li>
            <li className="group__item">Bad: {bad}</li>
            <li className="group__item" onClick={this.countTotalFeedback}>
              Total: {total}
            </li>
            <li className="group__item">Positive feedback: {feedback} %</li>
          </ul>
        </div>
      </div>
    );
  }
}

// /////////////////1 варіант///////////////////////////
// export class Statistics extends React.Component {
//   // staticpropTypes = {
//   //     ////
//   // }

//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     // total: 0,
//     // feedback: 0,
//   };

//   handleGood = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   handleNeutral = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   handleBad = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <div className="statistics">
//         <div className="btn">
//           <h1 className="btn__title">Please leave feedback</h1>
//           <button type="button" className="btn__good" onClick={this.handleGood}>
//             Good
//           </button>
//           <button
//             type="button"
//             className="btn__neutral"
//             onClick={this.handleNeutral}
//           >
//             Neutral
//           </button>
//           <button type="button" className="btn__bad" onClick={this.handleBad}>
//             Bad
//           </button>
//         </div>

//         <div className="group">
//           <h2 className="group__title">Statistics</h2>
//           <ul className="group__list">
//             <li className="group__item">Good: {good}</li>
//             <li className="group__item">Neutral: {neutral}</li>
//             <li className="group__item">Bad: {bad}</li>
//             <li className="group__item">Total: {this.state.total} %</li>
//             <li className="group__item">
//               Positive feedback: {this.state.feedback} %
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }
