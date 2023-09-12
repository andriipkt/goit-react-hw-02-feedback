import css from '../Feedback.module.css';

function Section({ children, title }) {
  return (
    <section className={`container ${css.section}`}>
      <h2 className={css.feedbackTitle}>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
