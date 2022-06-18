import { createContext, useState } from 'react';
import feedbackData from '../data/feedbackData';

const feedbackCtx = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(feedbackData);
  const [feedbackEdit, setFeedbackEdit] = useState({
    itemId: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    setFeedback((prevFeedback) => [newFeedback, ...prevFeedback]);
  };

  const deleteFeedback = (id) => {
    setFeedback((prevFeedback) => prevFeedback.filter((item) => item.id !== id));
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updItem) => {
    setFeedback((prevFeedback) => prevFeedback.map((item) => (item.id === id ? { ...item, ...updItem } : item)));
    setFeedbackEdit({ itemId: {}, edit: false });
  };

  return (
    <feedbackCtx.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </feedbackCtx.Provider>
  );
};

export default feedbackCtx;
