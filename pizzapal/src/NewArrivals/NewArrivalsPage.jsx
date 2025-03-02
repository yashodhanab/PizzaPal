import styles from './NewArrivalsPage.module.css';
import margherita from '../assets/margherita.png';
// import pepperoni from '../assets/pepperoni.png';
// import veggie from '../assets/veggie.png';
// import bbq from '../assets/bbq.png';


const pizzas = [
  { id: 1, name: "Margherita", image: margherita, price: "$12.99", desc: "Classic tomato, fresh basil & mozzarella." },
  { id: 2, name: "Pepperoni", image: margherita, price: "$14.99", desc: "Loaded with spicy pepperoni & cheese." },
  { id: 3, name: "Veggie Deluxe", image: margherita, price: "$13.49", desc: "A mix of fresh vegetables & mozzarella." },
//   { id: 4, name: "BBQ Chicken", image: margherita, price: "$15.99", desc: "Grilled chicken with smoky BBQ sauce." },
//   { id: 4, name: "BBQ Chicken", image: margherita, price: "$15.99", desc: "Grilled chicken with smoky BBQ sauce." },
//   { id: 4, name: "BBQ Chicken", image: margherita, price: "$15.99", desc: "Grilled chicken with smoky BBQ sauce." },
];

export default function NewArrivalsPage() {
  return (
    <section className={styles.newArrivalsPage}>
      <h2 className={styles.title}>New Arrivals</h2>
      <div className={styles.cardContainer}>
        {pizzas.map((pizza) => (
          <div key={pizza.id} className={styles.card}>
            <img src={pizza.image} alt={pizza.name} className={styles.foodImage} />
            <div className={styles.info}>
              <h3 className={styles.pizzaName}>{pizza.name}</h3>
              <p className={styles.desc}>{pizza.desc}</p>
              <span className={styles.price}>{pizza.price}</span>
            </div>
          </div>
        ))}
      </div>
      <button className={styles.viewAll}>View All</button>
    </section>
  );
}
