export const Services = (props) => {
  return (
    <div id='services'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Our Services</h2>
        </div>
        <div className='services-grid'>
          {props.data
            ? props.data.map((d, i) => (
                <article
                  key={`${d.name}-${i}`}
                  className='service-card'
                >
                  <div className='service-card-icon' aria-hidden='true'>
                    <i className={d.icon}></i>
                  </div>
                  <div className='service-card-body'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </article>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
