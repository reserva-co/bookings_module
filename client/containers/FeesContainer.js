import { connect } from 'react-redux';
import Fees from '../components/fees';

const mapStateToProps = (state) => ({
  checkInDate: state.calendar.checkInDate,
  checkOutDate: state.calendar.checkOutDate,
  price: state.costs.price,
  cleaningFee: state.costs.cleaningFee,
  serviceFee: state.costs.serviceFee,
});

export default connect(mapStateToProps, null)(Fees);
