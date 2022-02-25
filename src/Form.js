import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
//   constructor(){
//       super();
//       this.state={
//           name:"",
//           dept:"",
//           rating:""
//       }
//   }
    state={
        name:"",
        dept:"",
        rating:"",
        user:[]
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const tempObj = {
            name : this.state.name,
            rating: this.state.rating,
            dept :  this.state.dept
        }

        const tempArr = this.state.user;
        tempArr.push(tempObj);
        this.setState({user : tempArr});

    }

  render() {
      console.log(this.state.user, "USER");
    return (
      <div className='formCollection'>
          <h1 className='heading'>Employee Feedback Form</h1>
          <form>
              <label for ="name" className='labelchange'>Name</label>
              <input type="text" className='inputchange' id="name" name ="name"  placeholder="name" onChange={this.handleChange} value={this.state.name} />
              <br/>
              <label for ="name" className='labelchange'>Dept</label>
              <input id="dept" type="text" className='inputchange' name ="dept"  placeholder="dept" onChange={this.handleChange}  value={this.state.dept} />
              <br/>
              <label for ="name" className='labelchange'>Rating</label>
              <input id="name" className='inputchange' name ="rating" type="text"  placeholder="rating"  onChange={this.handleChange}  value={this.state.rating} />
              <br/>
              <button className='buttonchange' onClick={this.handleSubmit}>Submit</button> 
              
          </form>
        <div className='formbox'>
        {this.state.user.map((value,index)=>{
            return(
                <div className='formdetails' key={index}>
                   Name: {value.name} || Dept: {value.dept}  || Rating: {value.rating}
                </div>
            )
        })}
      </div>
    </div>
    )
  }
}

export default Form