import PropTypes from "prop-types"

function Digital(props) {
  const { hours, minutes, seconds } = props
  return (
    <div className="digital-container">
      <div className="digit-wrapper">
        <div>{hours > 9 ? hours : `0${hours}`}:</div>
        <div>{minutes > 9 ? minutes : `0${minutes}`}:</div>
        <div className="seconds-wrapper">
          {seconds > 9 ? seconds : `0${seconds}`}
        </div>
      </div>
    </div>
  )
}

Digital.propTypes = {
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
}

export default Digital
