import React,  {Component } from 'react';
import {Statistics} from './Statistics/Statistics';
import {Section} from './Statistics/Section';

// import PropTypes from 'prop-types';
// import styles from './Statistics.module.css';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         // display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       {/* <Statistics/> */}

// </div>
// );
// };

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = event => {
    const { name } = event.target;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    const percentage = Math.round((good * 100) / sum);
    return percentage;
  };

//  render() 
// {
//   const { good, neutral, bad } = this.state;
//   const total = this.countTotalFeedback();
//   const feedback = this.countPositiveFeedbackPercentage();
//  }

//  return (
//   <Section title="Statistics">
//   <Statistics 
//   good={good}
//   neutral={neutral}
//   bad={bad}
//   total={total}
//   positivePercentage= {positivePercentage}
//    />
// </Section>
// );


};
