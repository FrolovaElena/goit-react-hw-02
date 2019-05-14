import React, { Component } from 'react';
import propTypes from 'prop-types';
import Notification from './Notification';
import styles from './Controls.module.css';

export default class Controls extends Component {
  static propTypes = {
    onAddTransaction: propTypes.func.isRequired,
    currentBalance: propTypes.number.isRequired,
  };

  state = {
    amountCurrent: '',
    amountBeforeReset: 0,
    showError: false,
  };

  handleChange = event => {
    const value = Number(event.target.value);

    this.setState({
      amountCurrent: value,
    });
  };

  handleClickDeposit = () => {
    const { amountCurrent } = this.state;

    amountCurrent > 0 && amountCurrent !== ''
      ? this.props.onAddTransaction(amountCurrent, 'Deposit')
      : this.setState({ showError: true, amountBeforeReset: amountCurrent });

    this.setState({ amountCurrent: '' });
  };

  handleClickWithdraw = () => {
    const { amountCurrent } = this.state;
    const { currentBalance } = this.props;

    amountCurrent > 0 && amountCurrent !== '' && amountCurrent <= currentBalance
      ? this.props.onAddTransaction(amountCurrent, 'Withdrawal')
      : this.setState({ showError: true, amountBeforeReset: amountCurrent });

    this.setState({ amountCurrent: '' });
  };

  handleFocus = () => {
    this.setState({ showError: false });
  };

  render() {
    const { amountCurrent, amountBeforeReset, showError } = this.state;
    const { currentBalance } = this.props;

    return (
      <section className={styles.controls}>
        <input
          type="text"
          value={amountCurrent}
          className={styles.input}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
        />
        <button
          type="button"
          className={styles.button}
          onClick={this.handleClickDeposit}
        >
          Deposit
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={this.handleClickWithdraw}
        >
          Withdraw
        </button>

        {showError && (
          <Notification
            massage={
              amountBeforeReset > currentBalance
                ? 'На счету недостаточно средств для проведения операции'
                : 'Введите сумму для проведения операции'
            }
          />
        )}
      </section>
    );
  }
}
