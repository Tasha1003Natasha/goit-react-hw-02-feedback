import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={styles.group__list}>
      <li className={styles.group__item}>Good: {good}</li>
      <li className={styles.group__item}>Neutral: {neutral}</li>
      <li className={styles.group__item}>Bad: {bad}</li>
      <li className={styles.group__item} onClick={this.countTotalFeedback}>
        Total: {total}
      </li>
      <li className={styles.group__item}>
        Positive feedback: {positivePercentage || 0} %
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////

// import PropTypes from 'prop-types';
// import styles from './Statistics.module.css';

// export class Statistics extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   static propTypes = {
//     good: PropTypes.number.isRequired,
//     neutral: PropTypes.number.isRequired,
//     bad: PropTypes.number.isRequired,
//   };

//   handleClick = event => {
//     const { name } = event.target;

//     this.setState(prevState => {
//       return { [name]: prevState[name] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const sum = good + neutral + bad;
//     return sum;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const sum = good + neutral + bad;
//     const percentage = Math.round((good * 100) / sum);
//     return percentage;
//   };

//   render() {
//     const { onClick } = this.props;
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const feedback = this.countPositiveFeedbackPercentage();

//     return (
//       <section className={styles.statistics}>
//         <h1 className={styles.statistics__title}>Please leave feedback</h1>

//         <ul className={styles.statistics__list}>
//           <button
//             type="button"
//             name="good"
//             className={styles.statistics__btn}
//             onClick={this.handleClick}
//           >
//             Good
//           </button>
//           <button
//             type="button"
//             name="neutral"
//             className={styles.statistics__btn}
//             onClick={this.handleClick}
//           >
//             Neutral
//           </button>
//           <button
//             type="button"
//             name="bad"
//             className={styles.statistics__btn}
//             onClick={this.handleClick}
//           >
//             Bad
//           </button>
//         </ul>

//         <div className="group">
//           <h2 className={styles.group__title}>Statistics</h2>
//           <ul className={styles.group__list}>
//             <li className={styles.group__item}>Good: {good}</li>
//             <li className={styles.group__item}>Neutral: {neutral}</li>
//             <li className={styles.group__item}>Bad: {bad}</li>
//             <li
//               className={styles.group__item}
//               onClick={this.countTotalFeedback}
//             >
//               Total: {total}
//             </li>
//             <li className={styles.group__item}>
//               Positive feedback: {feedback || 0} %
//             </li>
//           </ul>
//         </div>
//       </section >
//     );
//   }
// }
