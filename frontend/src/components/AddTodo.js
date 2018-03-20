import React, { Component, PropTypes } from 'react';
// import './addTodo.scss';
import styles from './test.css'

export default class AddTodo extends Component {
  render() {
    return (
      <div className={styles.add_input}>
        <input type='text' ref='input' />
        <button className={styles.btn} onClick={(e) => this.handleClick(e)}>
          Add
        </button>
      </div>
    )
  }

  handleClick(e) {
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}