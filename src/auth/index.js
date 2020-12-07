import React from "react";

class AuthView extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "Senhor ",
      email: "",
      password: "",
    };
  }

  handleChange(key, event) {
    const newState = {};
    newState[key] = event.target.value;
    this.setState(newState);
  }

  render() {

    return (
      <div
        style={{ display: "flex", flexDirection: "column", padding: "20px" }}
      >
        <h1>Entre para ver o conteúdo</h1>
        <p>Bem vindo, {this.state.name}</p>
        <input
          placeholder="Nome"
          disabled={this.props.loading}
          onChange={(event) => this.handleChange("name", event)}
          value={this.state.name}
        />
        <input
          placeholder="E-mail"
          disabled={this.props.loading}
          onChange={(event) => this.handleChange("email", event)}
          value={this.state.email}
        />
        <input
          placeholder="Senha"
          disabled={this.props.loading}
          onChange={(event) => this.handleChange("password", event)}
          value={this.state.password}
        />
        <button
          disabled={this.props.loading}
          onClick={() => this.props.handleLogin(this.state)}
        >
          Entrar
        </button>
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

export default AuthView;
