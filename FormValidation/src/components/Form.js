import React from 'react';
import FirstName from './FirstName';
import LastName from './LastName';
import Email from './Email';


class Form extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            FirstNameValue: '',
            LastNameValue: '',
            EmailValue: '',
            submited: false,
            allValid: false
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

        if (
          this.state.FirstNameValue.length !== 0 &&
          this.state.LastNameValue.length !== 0 &&
          this.state.EmailValue.length !== 0
        ) {
            this.setState({
              allValid: true
            })

            setTimeout(() => {
              this.setState({
                allValid: false
              })
            }, 4000);
        }
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
              background: "#aaa"
            }}>
              {this.state.submited && this.state.allValid && (
                <div style={{
                  padding: "10px",
                  background: 'green'
                }}>Success! Thank you for registering</div>
              )}

            <FirstName 
                value={this.state.FirstNameValue}
                onChange={this.FirstNamevalidation}
            />
            {this.state.submited && this.state.FirstNameValue.length === 0 && (
              <span style={{color: "red", fontWeight: "bold"}}>FirstName is Empty</span>
            )}

            <LastName
              value={this.state.LastNameValue}
              onChange={this.LastNamevalidation}
            />
            {this.state.submited && this.state.LastNameValue.length === 0 && (
              <span style={{color: "red", fontWeight: "bold"}}>LastName is Empty</span>
            )}

            <Email 
              value={this.state.EmailValue}
              onChange={this.Emailvalidation}
            />
            {/* submit */}
            {this.state.submited && this.state.EmailValue.length === 0 && (
              <span style={{color: "red", fontWeight: "bold"}}>Email is Empty</span>
            )}
            <button type="submit" placeholder="firstname" value='submit' style={{
            margin: "20px",
            padding: "10px",
            background: "#eee",
            borderRadius: "2px"
            }}>Submit</button>

            </form>
          </>
        );

    }

  }

export default Form;