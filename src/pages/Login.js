import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setUserData } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      disabled: true,
      password: '',
    };
  }

  handlechange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.validateEmail);
  }

  validateEmail = () => {
    const { password, email } = this.state;
    const min = 6;
    const re = /\S+@\S+\.\S+/;
    if (re.test(email) && password.length >= min) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  }

  handleClickSubmit = () => {
    const { dispatchUserData, history } = this.props;
    dispatchUserData(this.state);
    history.push('/carteira');
  }

  render() {
    const { email, password, disabled } = this.state;
    // console.log(this.validateEmail());
    return (
      <fieldset>
        <h1>TRYBE</h1>
        <form>
          <input
            type="email"
            data-testid="email-input"
            value={ email }
            name="email"
            onChange={ this.handlechange }
          />
          <input
            type="password"
            data-testid="password-input"
            minLength={ 6 }
            name="password"
            value={ password }
            onChange={ this.handlechange }
          />
          <button
            type="button"
            disabled={ disabled }
            onClick={ this.handleClickSubmit }
          >
            Entrar

          </button>
        </form>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchUserData: (user) => dispatch(setUserData(user)),
});

Login.propTypes = {
  dispatchUserData: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
