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

  addTransaction = (amount, type) => {
    const newTransaction = {
      id: shortid.generate(),
      amount,
      type,
      date: new Date().toLocaleString(),
    };
    this.setState(state => ({
      history: [...state.history, newTransaction],
    }));
  };

  getIncomesAndExpenses = () => {
    const incomes = this.state.history
      .filter(data => data.type === 'Deposit')
      .reduce((sum, item) => sum + item.amount, 0);
    const expenses = this.state.history
      .filter(data => data.type === 'Withdrawal')
      .reduce((sum, item) => sum + item.amount, 0);

    return { incomes, expenses };
  };

  render() {
    const { history } = this.state;
    const { incomes, expenses } = this.getIncomesAndExpenses();

    return (
      <div className={styles.dashboard}>
        <Controls
          currentBalance={incomes - expenses}
          onAddTransaction={this.addTransaction}
        />
        <Balance incomes={incomes} expenses={expenses} />
        <TransactionHistory items={history} />
      </div>
    );
  }
}
