import actions from 'components/redux/actions';
import proptypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import s from './filter.module.css';

const Filter = ({ title }) => {
  const value = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      <span className={s.label__title}>{title}</span>
      <input
        className={s.input}
        type="text"
        name="filter"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.currentTarget.value))}
      />
    </label>
  );
};

Filter.propTypes = {
  title: proptypes.string.isRequired,
};

export default Filter;
