import React, { useState } from 'react';
import Child from "@/components/Child.jsx"
import Theme from "@/context/Theme.jsx"
export default () => {
    const [theme, setTheme] = useState("blue")
    return (
        <>
            <button onClick={() => setTheme("green")}>检验context是否为响应式</button>
            <Theme.Provider value={theme}>
                <Child />
            </Theme.Provider>
        </>
    )
}