"use client";

import { useEffect, useMemo, useState } from "react";
import styles from './Counter.module.css';

export default function Counter() {
    const [count, setCount] = useState(0);
    const doubleCount = useMemo(() => count * 2, [count]);
    
    useEffect(() => {
        console.log(`Count has changed to: ${count}`);
    }, [count]);
    return (
        <div>
            <h1 className={styles.counter}>Counter: {count}</h1>
            <h2 className={styles.counter}>Double Count: {doubleCount}</h2>
            <button className={styles.incrementButton} onClick={() => setCount(count + 1)}>Increment</button>
            <button className={styles.decrementButton} onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};