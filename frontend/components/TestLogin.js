import React, { useState } from 'react';

export default function TestLogin() {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [result, setResult] = useState(null);

    const handleTest = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/v1/test/test-auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();
            console.log('Test result:', data);
            setResult(data);
        } catch (error) {
            console.error('Test error:', error);
            setResult({ error: error.message });
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Test Login</h2>
            <div>
                <input 
                    type="email" 
                    placeholder="Email"
                    value={credentials.email}
                    onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                />
            </div>
            <div>
                <input 
                    type="password" 
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                />
            </div>
            <button onClick={handleTest}>Test Login</button>
            {result && (
                <pre style={{ marginTop: '20px' }}>
                    {JSON.stringify(result, null, 2)}
                </pre>
            )}
        </div>
    );
}