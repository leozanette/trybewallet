import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sumExpenses = () => {
    const { expenses } = this.props;
    console.log(expenses);
    const total = expenses.reduce((acc, cur) => (
      acc + (cur.exchangeRates[cur.currency].ask) * cur.value), 0).toFixed(2);
    console.log(total);
    return total;
  }

  render() {
    const { user: { email } } = this.props;
    return (
      <header>
        <h1>TRYBE</h1>
        <h3 data-testid="email-field">{email}</h3>
        <h4 data-testid="total-field">{this.sumExpenses()}</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
