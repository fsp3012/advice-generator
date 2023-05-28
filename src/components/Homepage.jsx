import React from 'react'
import pauseIcon from '../images/pattern-divider-mobile.svg';
import diceIcon from '../images/icon-dice.svg';

const Homepage = (props) => {
  return (
    <div className='advice-container'>
       <p className='id-number'> ADVICE #{props.newAdviceData.slip.id}</p>
      <p className='advice'>{props.newAdviceData.slip.advice}</p>
      <img src= {pauseIcon} alt="" className='pause' />
      <div className='dicebg'>
          <img src= {diceIcon} alt="" className='diceIcon'/>
      </div>
     
    </div>
  )
}

export default Homepage