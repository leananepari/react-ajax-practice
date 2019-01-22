
import React from 'react';
import $ from 'jquery';


class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {

      }
    }

  
  onSubmitClick(event) {
    event.preventDefault();

    var input = {
        name: $('#name').val(),
        message: $('#message').val()
    }
    console.log("clicked")
    console.log(input)
        $.ajax({
          url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting',
          type: 'POST',
          data: JSON.stringify(input),
          contentType: 'application/json',
          success: function(response) {
            $('#response').append(response)
            },
          error: function (error) {
            console.error(error);
          }
        });
    
  }

  append(response) {
      document.$('#response').append(response);
  }

    render() {
      return (
        <div>
            <p>Server Response:</p>
            <p id="response"></p>
        <form>
            Name: <input type="text" name="name" id="name"/>
            Message: <input type="text" name="message" id="message"/>
            <button className='button' onClick={this.onSubmitClick.bind(this)}>Submit</button>
        </form>
        </div>
      )
    }
  }

export default App;