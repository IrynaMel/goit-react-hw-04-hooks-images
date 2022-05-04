import Button from './Button.styled';
import PropTypes from "prop-types";

const ButtonLoadMore =({onClick})=>{
    return (
        <Button onClick={onClick}>Load More</Button>
    )
}

ButtonLoadMore.propTypes ={
    onClick: PropTypes.func
}

export default ButtonLoadMore