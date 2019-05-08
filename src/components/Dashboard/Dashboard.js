import React, { Component } from 'react';
import shortid from 'shortid';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import transactions from '../../assets/transactions.json';
import styles from './Dashboard.module.css';

export default class Dashboard extends Component {
  state = {
    history: transactions,
  };

  addTransaction = transaction => {
    const newTransaction = {
      ...transaction,
      id: shortid.generate(),
      date: new Date().toLocaleString(),
    };

    this.setState(state => ({
      history: [...state.history, newTransaction],
    }));
  };

  getIncomesAndExpenses = type => {
    return this.state.history
      .filter(data => data.type === type)
      .reduce((sum, item) => sum + item.amount, 0);
  };

  changeBalance = () => {
    return (
      this.getIncomesAndExpenses('Deposit') -
      this.getIncomesAndExpenses('Withdrawal')
    );
  };

  render() {
    const { history } = this.state;
    const incomes = this.getIncomesAndExpenses('Deposit');
    const expenses = this.getIncomesAndExpenses('Withdrawal');
    const currentBalance = this.changeBalance();

    return (
      <div className={styles.dashboard}>
        <Controls
          currentBalance={currentBalance}
          onAddTransaction={this.addTransaction}
        />
        <Balance
          currentBalance={currentBalance}
          incomes={incomes}
          expenses={expenses}
        />
        <TransactionHistory items={history} />
      </div>
    );
  }
}
