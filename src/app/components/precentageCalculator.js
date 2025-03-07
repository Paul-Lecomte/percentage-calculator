'use client';

import { useState } from 'react';

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

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">Choose Mode</label>
                    <select
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="find">Find Percentage (X% of Y)</option>
                        <option value="give">Give Percentage (X is what % of Y)</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">{mode === 'find' ? 'Percentage (%)' : 'Value (X)'}</label>
                    <input
                        type="number"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium">{mode === 'find' ? 'Total Value (Y)' : 'Total (Y)'}</label>
                    <input
                        type="number"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    onClick={calculate}
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Calculate
                </button>

                {result !== null && (
                    <div className="mt-4 text-center text-lg font-semibold">
                        Result: {result}
                    </div>
                )}
            </div>
        </div>
    );
}