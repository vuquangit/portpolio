import React from 'react'

export const ServiceItem = ({ logo, url, title, description }) => (
  <li className='suggestions_item'>
    <a href={url}>
      <div className='suggestions_img'>
        <img src={logo} alt='Service of CG' />
      </div>
      <div className='suggestions_info d-flex align-items-center flex-column'>
        <h4>{title}</h4>
        <p className='blog-text'>{description}</p>
      </div>
    </a>
  </li>
)

export default ServiceItem