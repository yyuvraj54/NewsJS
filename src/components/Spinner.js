import React, { Component } from 'react'
import loading from './loading.gif'
export class spinner extends Component {
  render() {
    return (
      <div className='row justify-content-center'> 
        <img style={{height:'80px' , width:'80px'}} src={loading} alt="loadingIcon" />
      </div>
    )
  }
}

export default spinner
