import PropTypes from 'prop-types'

const Textarea = ({readOnly, placeholder }) => {
    return (
        <div>
            <textarea readOnly={readOnly} placeholder= {placeholder} ></textarea>
        </div>
    )
}

Textarea.propTypes={
    placeholder: PropTypes.string,
}

export default Textarea