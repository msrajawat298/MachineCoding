"use client";
import { useState } from 'react';
import styles from './VirtualizedList.module.css';

const VirtualizedList = ({ items, itemHeight, containerHeight, renderItem }) => {
    const [scrollTop, setScrollTop] = useState(0);
    const totalHeight = items.length * itemHeight;

    // Calculate which items should be visible
    const startIndex = Math.floor(scrollTop / itemHeight);
    // Add a buffer of items to render to prevent flickering
    const buffer = 5;
    const visibleItemCount = Math.ceil(containerHeight / itemHeight);

    const startNode = Math.max(0, startIndex - buffer);
    const endNode = Math.min(
        items.length - 1,
        startIndex + visibleItemCount + buffer
    );

    const visibleItems = [];
    for (let i = startNode; i <= endNode; i++) {
        visibleItems.push({
            index: i,
            item: items[i],
            style: {
                position: 'absolute',
                top: `${i * itemHeight}px`,
                height: `${itemHeight}px`,
                width: '100%',
            },
        });
    }

    const onScroll = (e) => {
        setScrollTop(e.currentTarget.scrollTop);
    };

    return (
        <div
            className={styles.container}
            style={{ height: `${containerHeight}px` }}
            onScroll={onScroll}
        >
            <div className={styles.content} style={{ height: `${totalHeight}px` }}>
                {visibleItems.map(({ index, item, style }) => (
                    <div key={index} style={style}>
                        {renderItem(item, index)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function VirtualizedListDemo() {
    // Generate a large list of items
    const items = Array.from({ length: 100000 }, (_, i) => `Item ${i + 1}`);

    return (
        <div className={styles.demoWrapper}>
            <div style={{ marginBottom: '1rem' }}>
                <h3>List with 100,000 items</h3>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Rendering 100,000 items without virtualization would crash the browser.
                    This list only renders what you see.
                </p>
            </div>

            <VirtualizedList
                items={items}
                itemHeight={50}
                containerHeight={400}
                renderItem={(item, index) => (
                    <div className={styles.item}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            background: 'rgba(79, 70, 229, 0.1)',
                            color: 'var(--primary)',
                            marginRight: '1rem',
                            fontSize: '0.75rem',
                            fontWeight: 'bold'
                        }}>
                            {index + 1}
                        </span>
                        {item}
                    </div>
                )}
            />
        </div>
    );
}
