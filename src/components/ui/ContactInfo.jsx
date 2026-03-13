import { MapPin, Phone } from 'lucide-react';

export default function ContactInfo() {
    const iconBoxStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        background: 'rgba(255,255,255,0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#38bdf8',
    };

    const smallLabelStyle = {
        fontSize: '0.75rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#64748b',
        fontWeight: 600,
    };

    return (
        <div className="mt-4 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-6 md:gap-10">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#cbd5e1' }}>
                <div style={iconBoxStyle}>
                    <MapPin size={20} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={smallLabelStyle}>Location</span>
                    <span style={{ fontSize: '1rem', color: '#f8fafc' }}>Abelarde St., Zone 3, Cadiz City.</span>
                </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#cbd5e1' }}>
                <div style={iconBoxStyle}>
                    <Phone size={20} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={smallLabelStyle}>Phone</span>
                    <span style={{ fontSize: '1rem', color: '#f8fafc' }}>0995 263 3426</span>
                </div>
            </div>
        </div>
    );
}
