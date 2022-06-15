import { Component } from "react";
import { useState, useEffect } from "react";

class OutroApp extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isCounting: false,
      intervalId: 0,
    };
    this.zerarAContagem = this.zerarAContagem.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState((oldState) => ({
      ...oldState,
      isCounting: !oldState.isCounting,
    }));
  }

  zerarAContagem() {
    this.setState((oldState) => ({
      ...oldState,
      count: 0,
    }));
  }

  componentDidUpdate(prevPros, prevState) {
    if (prevState.isCounting === this.state.isCounting) {
      return;
    }

    if (this.state.isCounting) {
      let intervalId = window.setInterval(() => {
        this.setState((oldState) => ({
          ...oldState,
          count: oldState.count + 1,
        }));
      }, 1000);

      this.setState((oldState) => ({
        ...oldState,
        intervalId: intervalId,
      }));
    } else {
      window.clearInterval(this.state.intervalId);
    }
  }

  render() {
    let acaoDoBotao;

    if (this.state.isCounting) {
      acaoDoBotao = "Parar";
    } else if (this.state.count > 0) {
      acaoDoBotao = "Recomeçar";
    } else {
      acaoDoBotao = "Começar";
    }

    return (
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: 30 }}>{this.state.count}</h1>
        <button onClick={this.handleOnClick}>{acaoDoBotao} a Contagem</button>
        <button onClick={this.zerarAContagem}>Zerar a Contagem</button>
      </div>
    );
  }
}

function App() {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isCounting) {
      intervalId = window.setInterval(() => {
        setCount((oldState) => oldState + 1);
      }, 1000);
    }

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isCounting]);

  const handleOnClick = () => {
    setIsCounting((oldState) => !oldState);
  };

  const zerarAContagem = () => {
    setCount(0);
  };

  let acaoDoBotao;

  if (isCounting) {
    acaoDoBotao = "Parar";
  } else if (count > 0) {
    acaoDoBotao = "Recomeçar";
  } else {
    acaoDoBotao = "Começar";
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: 30 }}>{count}</h1>
      <button onClick={handleOnClick}>{acaoDoBotao} a Contagem</button>
      <button onClick={zerarAContagem}>Zerar a Contagem</button>
    </div>
  );
}

export default OutroApp;
