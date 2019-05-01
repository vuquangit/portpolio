import React from 'react'

// export default class ServiceItem extends React.Component {
//   render() {
//     return (
//       <li className="suggestions_item">
//         <a href={this.props.HrefItem}>
//           <div className="suggestions_img">
//             <img src={this.props.Imgsrc} alt="Service of CG" />
//           </div>
//           <div className="suggestions_info">
//             <h5>{this.props.TitleInfoItem}</h5>
//             <p className="blog-text">{this.props.DetailInfoItem}</p>
//           </div>
//         </a>
//       </li>
//     );
//   }
// }

/* ------------- SHOULD USE STATELESS COMPONENT FOR SERVICE ITEM ------------ */

/**
 * component properties should start with lowercase
 */

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
