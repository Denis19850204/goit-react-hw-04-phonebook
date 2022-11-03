import PropTypes from "prop-types";
import css from './SecondTitle.module.css'

export const SecondTitle = ({ text }) => {
    return <h2 className={css.title}>{ text}</h2>
}

SecondTitle.propTypes = {
    text: PropTypes.string,
    
}