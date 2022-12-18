import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props){
        super(props)

        this.state={
            counter:0
        }
        this.increaseCount=this.increaseCount.bind(this)
        this.decreaseCount=this.decreaseCount.bind(this)
    }

    increaseCount(){
        console.log('add')
        this.setState(prevState => {
            return{counter : prevState.counter + 1}
        })
    }
   decreaseCount(){
        console.log('low')
        this.setState(prevState => {
            return{counter : prevState.counter - 1 }
        })
    }


  render() {
    return (
      <div>
        <section id="main">
            <div className="container">
                <h2 id="title"> counter project</h2>
                <h3 id="counter">{this.state.counter}</h3>
                <div className='btn-countainer'>
                    <button id="add" onClick={this.increaseCount}> increase count</button>
                    <button id="low" onClick={this.decreaseCount}> decrease count</button>
                </div>  
            </div>
        </section>
      </div>
    )
  }
}
