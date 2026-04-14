import styles from "./mdx.module.css";

export function Callout({ title, type = "note", children }) {
  return (
    <aside
      className={`${styles.callout} ${styles[`callout_${type}`] ?? ""}`}
      data-type={type}
    >
      {title ? <p className={styles.calloutTitle}>{title}</p> : null}
      <div className={styles.calloutBody}>{children}</div>
    </aside>
  );
}

export function ConsoleOutput({ title = "Output", children }) {
  return (
    <div className={styles.outputWrap}>
      <div className={styles.outputLabel}>{title}</div>
      <pre className={styles.output} tabIndex={0}>
        <code>{children}</code>
      </pre>
    </div>
  );
}

export function AnalyticsFigure({ caption, children, alt = "Chart or figure" }) {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureCanvas} role="img" aria-label={alt}>
        {children ?? (
          <div className={styles.figurePlaceholder}>
            <span className={styles.figurePlaceholderText}>
              Chart / plot area — drop in a static image, or embed a client chart
              component (e.g. Recharts) from this MDX file.
            </span>
          </div>
        )}
      </div>
      {caption ? <figcaption className={styles.figureCaption}>{caption}</figcaption> : null}
    </figure>
  );
}

export function DataTable({ caption, children }) {
  return (
    <figure className={styles.tableFigure}>
      <div className={styles.tableScroll}>{children}</div>
      {caption ? <figcaption className={styles.tableCaption}>{caption}</figcaption> : null}
    </figure>
  );
}

const mdxComponents = {
  Callout,
  ConsoleOutput,
  AnalyticsFigure,
  DataTable,
};

export default mdxComponents;
