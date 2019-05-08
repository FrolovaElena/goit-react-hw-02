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
  };

  handleChange = event => {
    const value = Number(event.target.value);

    this.setState({
      amount: value,
    });
  };

  handleClickDeposit = () => {
    if (this.state.amount > 0 && this.state.amount <= this.props.currentBalance)
      this.props.onAddTransaction({
        ...this.state,
        type: 'Deposit',
      });
    this.setState({ amount: '' });
  };

  handleClickWithdraw = () => {
    if (this.state.amount > 0 && this.state.amount <= this.props.currentBalance)
      this.props.onAddTransaction({
        ...this.state,
        type: 'Withdrawal',
      });
    this.setState({ amount: '' });
  };

  render() {
    const { amount } = this.state;
    const { currentBalance } = this.props;
    return (
      <section className={styles.controls}>
        <input
          type="text"
          value={amount}
          className={styles.input}
          onChange={this.handleChange}
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
        {amount === 0 && (
          <Notification massage="Введите сумму для проведения операции!" />
        )}
        {amount > currentBalance && (
          <Notification massage="На счету недостаточно средств для проведения операции!" />
        )}
      </section>
    );
  }
}
