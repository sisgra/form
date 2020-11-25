import React from "react";

class App extends React.Component{
  constructor(){
    super()
    this.state={
      firstName:"",
      lastName:"",
      age:"",
      gender:"",
      destination:"",
      isVegan:false,
      isKosher:false,
      isLactoseFree:false
    }

    this.handleChange=this.handleChange.bind(this)
  }


  handleChange(event){
    const{name,value,type,checked}=event.target
    type==="checkbox"?
    this.setState({
      [name]:checked
    })
    :
    this.setState({
      [name]:value
    })
  }

  render(){
    return(
      <main>
        <form>
          <input 
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          placeholder="First Name"
          />
        

        <br/>

        
          <input 
          name="lastName"
          value={this.state.lasttName}
          onChange={this.handleChange}
          placeholder="Last Name"
          />
        

        <br/>

        
          <input 
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="Age"
          />

          <br/>

          <label>
            <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender==="female"}
            onChange={this.handleChange}
            /> Female
          </label>

          <label>
            <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender==="male"}
            onChange={this.handleChange}
            /> Male
          </label>

          <label>Destination</label>
          <select 
          name="destination"
          value={this.state.destination}
          onChange={this.handleChange}>
            <option value="germany">Germany</option>
            <option value="austria">Austria</option>
            <option value="norway">Norway</option>
            <option value="slovakia">Slovakia</option>
          </select>

        <br/>

        <label >
          <input
            name="isVegan"
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.isVegan}
          />Vegan 
        </label>

        <label >
          <input
            name="isKosher"
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.isKosher}
          />Kosher
        </label>

        <label >
          <input
            name="isLactoseFree"
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.isLactoseFree}
          />isLactose Free 
        </label>

      <br/>

      <button>Submit</button>

        </form>



        <hr/>
        <h3>Entered information:</h3>
        <p>Your name:{this.state.firstName} {this.state.lastName}</p>
        <p>Your age:{this.state.age}</p>
        <p>Your gender:{this.state.gender}</p>
        <p>Your destination:{this.state.destination}</p>

        <p>Your dietary restrictions: </p>
          <p>Vegan:{this.state.isVegan?"yes": "no"}</p>
          <p>Kosher:{this.state.isKosher?"yes": "no"}</p>
          <p>LactoseFree:{this.state.isLactoseFree?"yes": "no"}</p>
      </main>
    )
  }
}

export default App