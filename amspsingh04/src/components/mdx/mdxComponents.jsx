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

/** YouTube/Vimeo/other embed URLs (use YouTube share → Embed → copy src). */
export function VideoFrame({ src, title = "Embedded video", caption }) {
  return (
    <figure className={styles.videoEmbedFigure}>
      <div className={styles.videoFrameWrap}>
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      {caption ? (
        <figcaption className={styles.videoCaption}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}

function formatSeek(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

/**
 * Link out to Footballia (or similar) — most football libraries block iframe embedding.
 * Pass seekStartSec / seekEndSec so readers know where to scrub (e.g. 360–420).
 */
export function MatchWatchExternal({
  href,
  title = "Watch on Footballia",
  seekStartSec = 0,
  seekEndSec,
  siteName = "Footballia",
}) {
  return (
    <div className={styles.watchExternal}>
      <p className={styles.watchExternalTitle}>{title}</p>
      <p className={styles.watchExternalSeek}>
        After the page opens: in the video player, jump to{" "}
        <strong>{formatSeek(seekStartSec)}</strong> ({seekStartSec}s) and watch
        through <strong>{formatSeek(seekEndSec)}</strong> ({seekEndSec}s) — a{" "}
        {seekEndSec - seekStartSec}s clip.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.watchExternalBtn}
      >
        Open match on {siteName} →
      </a>
      <p className={styles.watchExternalNote}>
        {siteName} does not provide a public embed iframe for external blogs; their
        player page usually cannot be framed on other sites. Linking out is the
        reliable option. If you host the same clip on YouTube/Vimeo, use{" "}
        <code style={{ fontSize: "0.85em" }}>&lt;VideoFrame src=&quot;…embed…&quot; /&gt;</code>{" "}
        with <code style={{ fontSize: "0.85em" }}>?start=360&amp;end=420</code> on
        YouTube embed URLs.
      </p>
    </div>
  );
}

/** Direct link to an MP4/WebM hosted online (must allow CORS / range requests from your readers). */
export function VideoAsset({ src, caption }) {
  return (
    <figure className={styles.videoMp4Figure}>
      <video className={styles.videoMp4} controls playsInline preload="metadata">
        <source src={src} />
        Your browser does not support embedded video.
      </video>
      {caption ? (
        <figcaption className={styles.videoMp4Caption}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}

const mdxComponents = {
  Callout,
  ConsoleOutput,
  AnalyticsFigure,
  DataTable,
  VideoFrame,
  VideoAsset,
  MatchWatchExternal,
};

export default mdxComponents;
