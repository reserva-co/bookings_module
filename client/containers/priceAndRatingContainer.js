import { connect } from 'react-redux';
import PriceAndRating from '../components/priceAndRating';

const mapStateToProps = (state) => ({
  price: state.costs.price,
  rating: state.costs.rating,
  numberOfReviews: state.costs.numberOfReviews,
  cleaningFee: state.costs.serviceFee,
  serviceFee: state.costs.serviceFee,
  views: state.costs.views,
});

export default connect(mapStateToProps, null)(PriceAndRating);
