import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
import feedbackCtx from '../context/FeedBackContext';

const FeedbackList = () => {
  const { feedback } = useContext(feedbackCtx);
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
