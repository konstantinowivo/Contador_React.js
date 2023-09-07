import PropTypes from 'prop-types'

export function Button({text, name}){
    console.log(text, name)
    return <div style={{border: 'red 5px solid', padding: '10px'}}>
    <button>
        {text} - {name}
    </button>
    </div>
}

Button.propTypes = {
    text : PropTypes.string.isRequired
}

Button.defaultProps = {
    name: 'some User'
}