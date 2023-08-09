import React from 'react';
import styles from './index.module.css';


const Product = () => {
    return (
        <div>
            <h1 className={styles.title}>Notebook</h1>
            <p className={styles.price}>$2000</p>
            <button lassName={styles.buy}>Buy</button>
        </div>
    );
};

export default Product;
