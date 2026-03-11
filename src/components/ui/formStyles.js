/* Shared form styles used across reservation components */

export const inputStyle = {
    width: '100%',
    padding: '0.85rem 1rem',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    color: '#f0f9ff',
    fontSize: '0.95rem',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s, background 0.3s',
    boxSizing: 'border-box',
};

export const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#94a3b8',
    fontSize: '0.8rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    marginBottom: '0.4rem',
};

export const handleFocus = (e) => {
    e.target.style.borderColor = 'rgba(14,165,233,0.4)';
    e.target.style.boxShadow = '0 0 0 3px rgba(14,165,233,0.1)';
    e.target.style.background = 'rgba(255,255,255,0.06)';
};

export const handleBlur = (e) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.08)';
    e.target.style.boxShadow = 'none';
    e.target.style.background = 'rgba(255,255,255,0.04)';
};

/* Glassmorphism card style */
export const glassCardStyle = {
    background: 'rgba(255, 255, 255, 0.01)',
    backdropFilter: 'blur(20px) saturate(100%)',
    WebkitBackdropFilter: 'blur(20px) saturate(100%)',
    borderRadius: '24px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 40px 80px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
};
