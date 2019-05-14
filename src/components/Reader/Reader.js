import React, { Component } from 'react';
import propTypes from 'prop-types';
import styles from './Reader.module.css';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

export default class Reader extends Component {
  static propTypes = {
    items: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.string.isRequired,
        title: propTypes.string.isRequired,
        text: propTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    index: 0,
  };

  handleDecrement = () => {
    this.setState(state => ({
      index: state.index - 1,
    }));
  };

  handleIncrement = () => {
    this.setState(state => ({
      index: state.index + 1,
    }));
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    return (
      <div className={styles.reader}>
        <Publication title={items[index].title} text={items[index].text} />
        <Counter current={index + 1} total={items.length} />
        <Controls
          current={index + 1}
          total={items.length}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}
