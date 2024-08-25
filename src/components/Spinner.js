import React, { Component } from 'react'
import loading from './Eclipse@1x-1.0s-200px-200px.gif';

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt='loading'/>
      </div>
    )
  }
}
