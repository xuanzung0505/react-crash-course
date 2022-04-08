import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
        <button onClick = {onClick} style = {{backgroundColor: color}} 
        className='btn'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'default'
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick : PropTypes.func
}

export default Button