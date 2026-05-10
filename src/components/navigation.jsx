export const Navigation = () => {
  const path =
    typeof window !== 'undefined'
      ? (window.location.pathname || '/').replace(/\/$/, '') || '/'
      : '/'
  const isHome = path === '/'
  const isFbrPage = path === '/services/fbr-digital-invoicing'

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          {isHome ? (
            <a className='navbar-brand page-scroll' href='#page-top'>
              <img src='/img/winnyweb-logo.svg' alt='WinnyWeb.com' />
            </a>
          ) : (
            <a className='navbar-brand' href='/'>
              <img src='/img/winnyweb-logo.svg' alt='WinnyWeb.com' />
            </a>
          )}{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a
                href={isHome ? '#about' : '/#about'}
                className={isHome ? 'page-scroll' : undefined}
              >
                About
              </a>
            </li>
            <li>
              <a
                href={isHome ? '#services' : '/#services'}
                className={isHome ? 'page-scroll' : undefined}
              >
                Services
              </a>
            </li>
            <li className={isFbrPage ? 'active' : ''}>
              <a href='/services/fbr-digital-invoicing'>FBR Integration</a>
            </li>
            <li>
              <a
                href={isHome ? '#portfolio' : '/#portfolio'}
                className={isHome ? 'page-scroll' : undefined}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href={isHome ? '#testimonials' : '/#testimonials'}
                className={isHome ? 'page-scroll' : undefined}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href={isHome ? '#contact' : '/#contact'}
                className={isHome ? 'page-scroll' : undefined}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
