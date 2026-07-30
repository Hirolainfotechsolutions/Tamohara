import { Link } from 'react-router-dom'

function Button({ children, className = '', href, icon: Icon, to, type = 'button', ...props }) {
  const classes = `primary-button ${className}`.trim()
  const content = (
    <>
      {Icon ? <Icon aria-hidden="true" /> : null}
      {children}
    </>
  )

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...props}>
      {content}
    </button>
  )
}

export default Button
