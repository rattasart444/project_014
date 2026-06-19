'use client';
import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button
        onClick={() => setLikes(likes + 1)}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#fff',
          background: 'linear-gradient(135deg, #ff6b6b, #ff8787)',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          transition: '0.3s',
        }}
      >
        👍 กดไลก์ ({likes})
      </button>
    </div>
  );
}