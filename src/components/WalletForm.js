import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesData, getExpenses } from '../redux/actions/index';
import getCurrencyInfo from '../serviceAPI';

const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: 'Alimentação',
};

class WalletForm extends Component {
  constructor() {
    super();

    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    const { currenciesDispatch } = this.props;
    currenciesDispatch();
  }

  handlechange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClickButton = async () => {
    const { getExpensesDispatch, expenses } = this.props;
    const exchangeRates = await getCurrencyInfo();
    const id = expenses[0].length;
    getExpensesDispatch([{ id, ...this.state, exchangeRates }]);
    this.setState(INITIAL_STATE);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    console.log(currencies);
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            data-testid="value-input"
            name="value"
            id="value"
            value={ value }
            onChange={ this.handlechange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            name="description"
            id="description"
            onChange={ this.handlechange }
            value={ description }
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select
            data-testid="currency-input"
            name="currency"
            onChange={ this.handlechange }
            value={ currency }
          >
            { currencies.map((a, i) => (
              <option key={ i } value={ a }>{a}</option>
            )) }
          </select>
        </label>
        <label htmlFor="method">
          Meio de Pagamento:
          <select
            data-testid="method-input"
            name="method"
            onChange={ this.handlechange }
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            data-testid="tag-input"
            name="tag"
            onChange={ this.handlechange }
            value={ tag }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <button
          type="button"
          onClick={ this.handleClickButton }
        >
          Adicionar despesa

        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: [state.wallet.expenses] });

const mapDispatchToProps = (dispatch) => ({
  currenciesDispatch: () => dispatch(getCurrenciesData()),
  getExpensesDispatch: (expenses) => dispatch(getExpenses(expenses)),
});

WalletForm.propTypes = {
  currenciesDispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  getExpensesDispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
