// Minimal hash-link component used across the app.
// Important: forward all props (like style) to preserve existing UI behavior.
export function Link({ to, children, onClick, ...rest }) {
  return (
    <a
      href={`#${to}`}
      {...rest}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
    >
      {children}
    </a>
  );
}
