import PropTypes from "prop-types";
import css from "./statistics.module.css";

const Statistics = ({ title, stats }) => {
  const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <section className={css.statistics}>
          {title && <h2 className={css.title}>{title}</h2>}
          <ul className={css.stat}>
        {stats.map(({ id, label, percentage }) => (
            <li key={id} className={css.item} style={{ backgroundColor: generateRandomColor() }}>
            <span className={css.label}>{label}</span>
                <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;