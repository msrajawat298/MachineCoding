"use client";

import { useEffect, useMemo, useState } from "react";
import styles from './Clock.module.css';

export default function Clock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    const formattedTime = useMemo(() => {
        return time.toLocaleTimeString();
    }, [time]);
    return (
        <div className={styles.clock}>
            <h2>Current Time</h2>
            <p className={styles.time}>{formattedTime}</p>
        </div>
    );
}