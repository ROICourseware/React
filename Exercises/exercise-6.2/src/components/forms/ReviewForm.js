import  { useState } from 'react';
import PropTypes from 'prop-types';

function ReviewForm(props) {

    const {  bookId  } = props;
    const [content, setContent] = useState("");

    const createReview = (e) => {
        e.preventDefault();

    }

    return (
        <form className="form-group form-inline" onSubmit={createReview}>
        <label className="control-label">Review:
        <input type="text" className="form-control" 
        value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <button type="submit" className="btn btn-primary">Add Review</button>
    </form>
    )
}

ReviewForm.propTypes = {
    bookId: PropTypes.number.isRequired
};

export default ReviewForm;