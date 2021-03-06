import PropTypes from 'prop-types';

const Review = (props) => (
    <tr>
        <td >{props.review}</td>
    </tr>
    );

Review.propTypes = { review: PropTypes.string.isRequired };

export default Review;