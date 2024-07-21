import css from './ErrorMessage.module.css';

export default function ErrorMessage({ children }) {
  return <p className={css.description}>{children}</p>;
}