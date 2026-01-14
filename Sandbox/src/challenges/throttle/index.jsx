"use client";

import { useEffect, useMemo, useState } from "react";
import throttle from "@/utils/throttle";

function useItemsOrSample(externalItems) {
    const [items, setItems] = useState(() => externalItems || [
        { id: 1, text: "Buy milk" },
        { id: 2, text: "Walk dog" },
        { id: 3, text: "Read book" },
    ]);
    useEffect(() => {
        if (externalItems) setItems(externalItems);
    }, [externalItems]);
    return items;
}

export default function ThrottleDemo({ items: externalItems, wait = 500 }) {
    const items = useItemsOrSample(externalItems);
    const [input, setInput] = useState("");
    const [filter, setFilter] = useState("");
    const [calls, setCalls] = useState(0);

    const throttledSetter = useMemo(() => throttle((val) => {
        setFilter(val);
        setCalls((c) => c + 1);
    }, wait), [wait]);

    function handleChange(e) {
        const v = e.target.value;
        setInput(v);
        throttledSetter(v);
    }

    const filtered = items.filter((it) => it.text.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div>
            <label className="form-label">Throttled filter ({wait}ms)</label>
            <input className="form-control mb-1" value={input} onChange={handleChange} />
            <div className="small" style={{ color: 'var(--text-secondary)' }}>Applied calls: {calls}</div>

            <ul className="list-group mt-2">
                {filtered.map((it) => (
                    <li key={it.id} className="list-group-item">{it.text}</li>
                ))}
            </ul>
        </div>
    );
}
