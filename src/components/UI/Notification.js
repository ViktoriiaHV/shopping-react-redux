import { useEffect } from 'react';
import classes from './Notification.module.css';
import { useDispatch } from "react-redux";
import { uiActions } from '../../store/ui-slice';

const Notification = (props) => {
  const dispatch = useDispatch();
  let specialClasses = '';

  if (props.status === 'error') {
    specialClasses = classes.error;
  }
  if (props.status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  useEffect(() => {
    const hideNotification = setTimeout(() => {
      dispatch(uiActions.hideNotification())
    }, 1500)
    return () => {clearTimeout(hideNotification)};
  }, [dispatch])

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;