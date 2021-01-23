import Review from './Review';
import ReviewForm from '../forms/ReviewForm';
import * as api from '../../api';

import { useState, useEffect } from 'react';
function ReviewList({ match: { params: { title, bookId } } }) {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
         api.fetchReviews(bookId).then((response) => {
            setReviews(response);
        });
      },
      [bookId]);

    const addReview = (review) => {
        setReviews(oldReviews => [...oldReviews, review]);
    }


    return (
        <div className="row">
            <h2>Reviews:</h2>
            <div className="table-responsive">
                <ReviewForm addReview={addReview} bookId={bookId} />
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Reviews of {title}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map(function (item, i) {
                            return <Review review={item.content} key={i} />;
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default ReviewList;
