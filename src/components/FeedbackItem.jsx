import { useContext } from 'react';
import Card from './shared/Card';
import { FaTimes, FaEdit } from 'react-icons/fa';
import feedbackCtx from '../context/FeedBackContext';

const FeedbackItem = ({ item }) => {
  const { rating, text, id } = item;
  const { deleteFeedback, editFeedback } = useContext(feedbackCtx);
  return (
    <Card reverse>
      <div className="num-display">{rating}</div>
      <button onClick={() => deleteFeedback(id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
};

export default FeedbackItem;
