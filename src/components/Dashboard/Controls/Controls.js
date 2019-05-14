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
    amount: '',
    showErrorNull: false,
    showErrorLack: false,
  };

  handleChange = event => {
    const value = Number(event.target.value);

    this.setState({
      amount: value,
    });
  };

  handleClickDeposit = () => {
    const { amount } = this.state;

    amount > 0 && amount !== ''
      ? this.props.onAddTransaction(amount, 'Deposit')
      : this.setState({ showErrorNull: true });

    this.setState({ amount: '' });
  };

  handleClickWithdraw = () => {
    const { amount } = this.state;
    const { currentBalance } = this.props;

    if (amount > 0 && amount <= currentBalance) {
      this.props.onAddTransaction(amount, 'Withdrawal');
    } else if (amount > currentBalance) {
      this.setState({ showErrorLack: true });
    } else {
      this.setState({ showErrorNull: true });
    }

    this.setState({ amount: '' });
  };

  handleFocus = () => {
    this.setState({ showErrorNull: false, showErrorLack: false });
  };

  render() {
    const { amount, showErrorNull, showErrorLack } = this.state;

    return (
      <section className={styles.controls}>
        <input
          type="text"
          value={amount}
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

        {showErrorNull && (
          <Notification massage="Введите сумму для проведения операции" />
        )}
        {showErrorLack && (
          <Notification massage="На счету недостаточно средств для проведения операции" />
        )}
      </section>
    );
  }
}
