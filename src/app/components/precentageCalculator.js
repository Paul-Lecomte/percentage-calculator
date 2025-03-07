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
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-xl font-bold mb-4 text-center">Percentage Calculator</h1>
                <div>
                    <label htmlFor="">Choose mode</label>
                    <select
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                    >
                        <option value="find">Find Percentage (X% of Y)</option>
                        <option value="give">Give Percentage (X is what % of Y)</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="">{mode === 'find' ? 'Percentage (%)' : 'Value (X)'}</label>
                    <input
                        type="number"
                        value={num1}
                        onChange={(e) => setMode(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">{mode === 'find' ? 'Percentage (%)' : 'Value (X)'}</label>
                    <input
                        type="number"
                        value={num1}
                        onChange={(e) => setMode(e.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}