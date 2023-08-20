import PropTypes from "prop-types"

function degreesForMinSec(seconds) {
  return (seconds / 60) * 360
}

function hoursToDegrees(hours) {
  return (hours / 12) * 360
}

function Analog(props) {
  const { hours, minutes, seconds } = props
  return (
    <div className="analog-container">
      <div
        style={{
          "--second-hand-rotation": `${degreesForMinSec(seconds)}deg`,
        }}
        className="second-hand analog-clock-hand"
      ></div>
      <div
        style={{
          "--minute-hand-rotation": `${degreesForMinSec(minutes)}deg`,
        }}
        className="minute-hand analog-clock-hand"
      ></div>
      <div
        style={{
          "--hour-hand-rotation": `${hoursToDegrees(hours)}deg`,
        }}
        className="hour-hand analog-clock-hand"
      ></div>
    </div>
  )
}

Analog.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
}

export default Analog
