import React from 'react';

export class Statistics extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = event => {
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
    const percentage = (good * 100) / sum;
    return percentage;
  };

  render() {
    const { onClick } = this.props;
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const feedback = this.countPositiveFeedbackPercentage();

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
            <li className="group__item">
              Positive feedback: {feedback || 0} %
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
