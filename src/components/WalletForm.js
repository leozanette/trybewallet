import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrenciesData } from '../redux/actions/index';

class WalletForm extends Component {
  componentDidMount() {
    const { currenciesDispatch } = this.props;
    currenciesDispatch();
  }

  render() {
    const { currencies } = this.props;
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
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            data-testid="description-input"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="currency">
          Moeda:
          <select data-testid="currency-input">
            { currencies.map((a, i) => (
              <option key={ i } value={ a }>{a}</option>
            )) }
          </select>
        </label>
        <label htmlFor="method">
          Meio de Pagamento:
          <select data-testid="method-input">
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select data-testid="tag-input">
            <option value="food">Alimentação</option>
            <option value="lazer">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ currencies: state.wallet.currencies });

const mapDispatchToProps = (dispatch) => ({
  currenciesDispatch: () => dispatch(getCurrenciesData()),
});

WalletForm.propTypes = {
  currenciesDispatch: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
