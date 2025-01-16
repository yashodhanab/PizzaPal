// import React from 'react';
// import styles from './PizzaDelivery.module.css';
// import { Feature } from './components/Feature';

// const features = [
//   {
//     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/145fa0565e7b460aa0f3cc22c6c6827100a079b124ddf9b7ea156255eb4c7053?placeholderIfAbsent=true&apiKey=60be45b0adc94c48bda62e208f8c9c91",
//     title: "Fast Delivery",
//     description: "Deliver within 30 minutes",
//     style: { margin: '1rem'}
//   },
//   {
//     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1dd04bf4a22b710ad06eb7577e4042ef9310339fbb589358d595296cbd6a873d?placeholderIfAbsent=true&apiKey=60be45b0adc94c48bda62e208f8c9c91",
//     title: "Pick Up",
//     description: "Pick up delivery at your doorstep",
//     style: { margin: '2rem' }
//   },
//   {
//     icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ee8bd4e2f190a20b6751b136451dadada9f96d13987bc510ba07899cadeeaa7?placeholderIfAbsent=true&apiKey=60be45b0adc94c48bda62e208f8c9c91",
//     title: "Dine in!",
//     description: "Enjoy your Pizza fresh and hot",
//     style: { margin: '3rem' }
//   }
// ];

//  function PizzaDelivery() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.heroSection}>
//         <div className={styles.heroTitle} style={{ lineHeight: 1 }}>
//           <div className={styles.titleRow}>
//             <div className={styles.redText} style={{ fontFamily: 'Permanent Marker', fontSize: '8rem', marginLeft: '5rem', marginTop: '5rem' }}>Pizza </div>
//             <div className={styles.blackText} style={{ fontFamily: 'Caveat Brush', fontSize: '9rem' , marginTop: '4rem' }}>@</div>
//           </div>
//           <div className={styles.blackText} style={{ fontFamily: 'Caveat Brush', fontSize: '10rem', marginLeft: '5rem' }}>your door</div>
//           <div className={styles.blackText} style={{ fontFamily: 'Caveat Brush', fontSize: '10rem', marginLeft: '5rem' }}>in <span className={styles.redText} style={{ fontFamily: 'Permanent Marker', fontSize: '8rem' }}>No Time</span></div>
//         </div>
//       </div>
//       <div className={styles.contentSection}>
//         <div className={styles.contentWrapper}>
//           <div className={styles.container}>
//             <div className={styles.imageSection} style={{ marginLeft: '-5rem',marginTop: '2rem' }}>	
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7f59b520a4faff74eb68d80db21f1334b5bbee5060f1de8d19983abba4c7973?placeholderIfAbsent=true&apiKey=60be45b0adc94c48bda62e208f8c9c91"
//                 className={styles.heroImage}
//                 alt="Pizza delivery illustration"
//               />
//             </div>
//             <div className={styles.featuresSection}>
//               <div className={styles.featuresWrapper}>
//                 {features.map((feature, index) => (
//                   <Feature
//                     key={index}
//                     icon={feature.icon}
//                     title={feature.title}
//                     description={feature.description}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PizzaDelivery;