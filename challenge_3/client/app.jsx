class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //should seperate into individual key value pairs?
      step: 0,
      name: '',
      email: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  //increment step with each button click (up to purchase button)
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
//  //should add values to state
  handleInput(event) {
    console.log('working')
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitForm(form) {
    console.log('submit is working');
    form.preventDefault();
    axios.post('/submit', form)
      .then((response) => {
        this.setState({
          name: form.name
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  // handleInput (event) {
  //   const { name, value } = event.target
  //   this.setState({
  //     [name]: value
  //   })
  // }


  //handleSubmit (last next button should render all data on page)

  //nextButton

  render() {
    const step = this.state.step;
    let button;
    if (step === 0) {
      button = <Checkout onClick={this.handleClick} />;
    }
    if (step === 1) {
      button = <Step1 onClick={this.handleClick} />;
    }
    if (step === 2) {
      button = <Step2 onClick={this.handleClick} />;
    }
    if (step === 3) {
      button = <Step3 onClick={this.handleClick} />;
    }
    if (step === 4) {
      button = <Confirmation onClick={this.handleClick} />;
    }
    return (
      <div>
        <header>Lucy's Candles</header>
        {button}
        {/* this will be the final next button */}
        {/* <form onSubmit={this.handleSubmit}> */}
        {/* </form> */}
      </div>
    )
  }
}

//stateless step components
function Checkout(props) {
  return (
    <div>
      <button onClick={props.onClick}>Checkout</button>
    </div>
  );
}

function Step1(props) {
  return (
    <div>
      <form onSubmit={props.submitForm}>
        <label> name
          <input name='name' value ={props.name} onChange={props.handleInput}/>
        </label>
        <br />
        <label> email
          <input name='email' value ={props.email} onChange={props.handleInput}/>
        </label>
        <br />
        <label> password
          <input name='password' value ={props.password} onChange={props.handleInput}/>
        </label>
        <button onClick={props.onClick}>Next</button>
      </form>
    </div>
  );
}

function Step2(props) {
  return (
    <div>
      <form>
        <label> Address: line 1
          <input name='addressline1' value ={props.addressline1} onChange={props.handleInput}/>
        </label>
        <br />
        <label> line 2
          <input name='addressline2' value ={props.addressline2} onChange={props.handleInput}/>
        </label>
        <br />
        <label> city
          <input name='city' value ={props.city} onChange={props.handleInput}/>
        </label>
        <br />
        <label> state
          <input name='state' value ={props.state} onChange={props.handleInput}/>
        </label>
        <br />
        <label> zip code
          <input name='zip' value ={props.zip} onChange={props.handleInput}/>
        </label>
        <br />
        <label> phone number
          <input name='phone' value ={props.phone} onChange={props.handleInput}/>
        </label>
      </form>
      <button onClick={props.onClick}>Next</button>
    </div>
  );
}

function Step3(props) {
  return (
    <div>
      <form>
        <label> card number
          <input name='card' value ={props.card} onChange={props.handleInput}/>
        </label>
        <br />
        <label> expiration date
          <input name='date' value ={props.date} onChange={props.handleInput}/>
        </label>
        <br />
        <label> CVV
          <input name='CVV' value ={props.CVV} onChange={props.handleInput}/>
        </label>
        <br />
        <label> billing zip code
          <input name='zip' value ={props.zip} onChange={props.handleInput}/>
        </label>
      </form>
      <button onClick={props.onClick}>Next</button>
    </div>
  );
}

function Confirmation(props) {
  return (
    <div>
      <button onClick={props.onClick}>Purchase</button>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
