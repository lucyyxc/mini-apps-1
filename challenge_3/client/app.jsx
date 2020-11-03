class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      form1: {},
      form2: {},
      form3: {}
    }
    this.handleClick = this.handleClick.bind(this);
    this.submitForm1 = this.submitForm1.bind(this);
    this.submitForm2 = this.submitForm2.bind(this);
    this.submitForm3 = this.submitForm3.bind(this);
  }

  handleClick() {
    console.log('Click happened');
    let step = this.state.step;
    if (step >= 3) {
      step = 4;
    } else {
      step++;
    }
    this.setState({
      step: step
    })
    console.log(this.state.step);
  }

  submitForm1(form) {
    console.log('submit is working');
    console.log('form', form);
    axios.post('/form1', form)
      .then((response) => {
        console.log('response', response)
        this.setState({
          form1: [form]
        })
        console.log(this.state.form1);
        this.handleClick();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  submitForm2(form) {
    console.log('submit is working');
    console.log('form', form);
    axios.post('/form2', form)
      .then((response) => {
        console.log('response', response)
        this.setState({
          form2: [form]
        })
        console.log(this.state.form2);
        this.handleClick();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  submitForm3(form) {
    console.log('submit is working');
    console.log('form', form);
    axios.post('/form3', form)
      .then((response) => {
        console.log('response', response)
        this.setState({
          form3: [form]
        })
        console.log(this.state.form3);
        this.handleClick();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    const step = this.state.step;
    let button;
    if (step === 0) {
      button = <Checkout onClick={this.handleClick} />;
    }
    if (step === 1) {
      button = <Step1 submitForm1={this.submitForm1}/>;
    }
    if (step === 2) {
      button = <Step2 submitForm2={this.submitForm2}/>;
    }
    if (step === 3) {
      button = <Step3 submitForm3={this.submitForm3}/>;
    }
    if (step === 4) {
      button = <Confirmation submitForm4={this.submitForm4}/>;
    }
    return (
      <div>
        <header>Lucy's Candles</header>
        {button}
      </div>
    )
  }
}

function Checkout(props) {
  return (
    <div>
      <button onClick={props.onClick}>Checkout</button>
    </div>
  );
}

class Step1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.submitForm1(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> name
        <input name='name' value={this.state.name} onChange={this.handleInput} />
        </label>
        <br />
        <label> email
        <input name='email' value={this.state.email} onChange={this.handleInput} />
        </label>
        <br />
        <label> password
        <input name='password' value={this.state.password} onChange={this.handleInput} />
        </label>
        <button>Next</button>
      </form>
    )
  }
}

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressline1: '',
      addressline2: '',
      city: '',
      state: '',
      zip: '',
      phone: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.submitForm2(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Address: line 1
          <input name='addressline1' value={this.state.addressline1} onChange={this.handleInput} />
        </label>
        <br />
        <label> line 2
          <input name='addressline2' value={this.state.addressline2} onChange={this.handleInput} />
        </label>
        <br />
        <label> city
          <input name='city' value={this.state.city} onChange={this.handleInput} />
        </label>
        <br />
        <label> state
          <input name='state' value={this.state.state} onChange={this.handleInput} />
        </label>
        <br />
        <label> zip code
          <input name='zip' value={this.state.zip} onChange={this.handleInput} />
        </label>
        <br />
        <label> phone number
          <input name='phone' value={this.state.phone} onChange={this.handleInput} />
        </label>
        <button>Next</button>
      </form>
    )
  }
}

class Step3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: '',
      date: '',
      CVV: '',
      zip: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(event) {
    this.setState({[event.target.name]: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.submitForm3(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> card number
          <input name='card' value={this.state.card} onChange={this.handleInput} />
        </label>
        <br />
        <label> expiration date
          <input name='date' value={this.state.date} onChange={this.handleInput} />
        </label>
        <br />
        <label> CVV
          <input name='CVV' value={this.state.CVV} onChange={this.handleInput} />
        </label>
        <br />
        <label> billing zip code
          <input name='zip' value={this.state.zip} onChange={this.handleInput} />
        </label>
        <button>Next</button>
      </form>
    )
  }
}

function Confirmation(props) {
  return (
    <div>
      <button onClick={props.onClick}>Purchase</button>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
