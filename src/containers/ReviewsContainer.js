import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview = {this.props.addReview} restaurantId = {this.props.restaurant.id}/>
        <Reviews restaurantId = {this.props.restaurant.id} reviews = {this.props.reviews} deleteReview = {this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => ({
  addReview: (text, restaurantId) => dispatch({type: "ADD_REVIEW", review: {text, restaurantId}}),
  deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
})

export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)
