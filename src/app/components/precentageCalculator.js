'use state';

import { useState } from  'react';

export default function PercentageCalculator() {
    const [mode, setMode] = useState('find');
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const calculate = () => {
        if (!num1 || !num2) return;
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (mode === 'find') {
            setResult(((n1 / 100) * n2).toFixed(2));
        } else {
            setResult(((n1 / n2) * 100).toFixed(2) + '%');
        }
    };
    return (
        <div>

        </div>
    )
}