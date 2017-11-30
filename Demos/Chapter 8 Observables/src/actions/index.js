import * as api from '../api';
import * as actionTypes from './actionTypes';
import {reset} from 'redux-form';

export const receiveReviews = (bookId) => (dispatch) => {
    return api.fetchReviews(bookId).then((response) => {
        dispatch({
            type: actionTypes.LIST_REVIEWS,
            response
        });
    })
}


export const addReview = (review) => (dispatch) => {
    api.addReview(review).then((response) => {
        dispatch({
            type: actionTypes.ADD_REVIEW,
            review: response
        });
        dispatch(reset('review'));
    });
}

export const receiveBooks = () => (dispatch) => {
    return api.fetchAllBooks().then((response) => {
        dispatch({
            type: actionTypes.LIST_BOOKS,
            response
        });
    })
}

export const addBook = (book) => (dispatch) => {
    api.addBook(book).then((response) => {
        dispatch({
            type: actionTypes.ADD_BOOK,
            book: response
        });
        dispatch(reset('book'));
    });
}

export const searchBooks = (title) => {
    if (title !== "") {
        return ({
            type: actionTypes.SEARCH_BOOKS,
            term: title
        })
    }
    else {
        return ({
            type: 'IGNORE_ME'
        })
    }
};

