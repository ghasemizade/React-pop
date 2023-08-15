import React from 'react';
import FirstName from './FirstName';
import LastName from './LastName';
import Email from './Email';
import Submit from './Submit';


class Form extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            FirstNameValue: '',
            LastNameValue: '',
            EmailValue: '',
            submited: false
        }

        this.submitHandler = this.submitHandler.bind(this)
        this.FirstNamevalidation = this.FirstNamevalidation.bind(this)
        this.LastNamevalidation = this.LastNamevalidation.bind(this)
        this.Emailvalidation = this.Emailvalidation.bind(this)
    }
    
    FirstNamevalidation (event){
        this.setState({
            FirstNameValue: event.target.value
        })
    }

      LastNamevalidation (event){
        this.setState({
            LastNameValue: event.target.value
        })
    }

    Emailvalidation (event){
      this.setState({
          EmailValue: event.target.value
      })
  }

    submitHandler (event){
        console.log(event);
        event.preventDefault()
        this.setState({
            submited: true
        })
    }

  render(){
        return (
          <>
            <form onSubmit={this.submitHandler} style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
              flexDirection: "column",
              padding: "",
              background: "#1177ff"
            }}>
            <FirstName 
                value={this.state.FirstNameValue}
                onChange={this.FirstNamevalidation}
            />
            <LastName
              value={this.state.LastNameValue}
              onChange={this.LastNamevalidation}
            />
            <Email 
              value={this.state.EmailValue}
              onChange={this.Emailvalidation}
            />
            <Submit/>
            </form>
          </>
        );

    }

  }

export default Form;