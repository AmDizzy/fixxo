import React from 'react'

const MapSection = () => {
  return (
    <section className="map">
        <iframe className="google-map"
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16289.471200336859!2d18.075405365646333!3d59.313186091363555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77c158b0df21%3A0x7f81200284fe9768!2sS%C3%B6dermalm%2C%20Stockholm!5e0!3m2!1ssv!2sse!4v1665676996807!5m2!1ssv!2sse"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </section>
  )
}

export default MapSection