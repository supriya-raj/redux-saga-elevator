import React from 'react'
import { connect } from 'react-redux'

import {changeFloor} from './duck'
import css from './styles.scss';

const FLOORS = [3, 2, 1];

const Elevator = (props) => {
  return (
  	<div className="building">
  		{
  			FLOORS.map((floor) => {
  				return <div className="floor" key={floor}>
  					<div className="lift-button" onClick={props.changeFloor.bind(null, floor)}>PRESS</div>
  				</div>
  			})
  		}
  		<div className={"elevator elevator-at-floor-" + props.floor}/>
  	</div>
  )
}

const mapStateToProps = (state) => {
	return {
		floor: state.floor
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeFloor: (newFloor) => {
			dispatch(changeFloor(newFloor))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Elevator);
