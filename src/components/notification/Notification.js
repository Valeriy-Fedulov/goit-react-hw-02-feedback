import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ message }) => <h2 className={s.title}>{message}</h2>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export { Notification };
