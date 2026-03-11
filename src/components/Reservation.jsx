import { motion } from 'framer-motion';
import { useState } from 'react';
import { Utensils, Check } from 'lucide-react';
import { glassCardStyle } from './ui/formStyles';
import ContactInfo from './ui/ContactInfo';
import ReservationForm from './ReservationForm';
import CrawlingLobsters from './ui/CrawlingLobsters';

export default function Reservation() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '', email: '', phone: '',
        date: '', time: '', guests: '2', requests: '',
    });

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section
            id="reservation"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: '10rem 1.5rem 8rem',
                position: 'relative',
                pointerEvents: 'auto',
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.15 }}
                style={{
                    maxWidth: '600px',
                    width: '100%',
                    ...glassCardStyle,
                    padding: '3rem 2.5rem',
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.5rem',
                }}
            >
                {/* Header */}
                <div style={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{
                            width: '56px', height: '56px', borderRadius: '16px',
                            background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 1.2rem',
                            boxShadow: '0 8px 32px rgba(2,132,199,0.3)',
                        }}
                    >
                        <Utensils size={26} color="#fff" />
                    </motion.div>
                    <h2 style={{
                        fontSize: '2.6rem', color: '#f8fafc',
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 700, margin: 0, letterSpacing: '-0.5px',
                    }}>
                        Reserve a Table
                    </h2>
                    <p style={{
                        color: '#7dd3fc', fontSize: '0.8rem',
                        letterSpacing: '0.2em', textTransform: 'uppercase',
                        fontWeight: 600, marginTop: '0.5rem',
                    }}>
                        Join us in the deep
                    </p>
                </div>

                {/* Form or Success Message */}
                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ textAlign: 'center', padding: '3rem 1rem' }}
                    >
                        <div style={{
                            width: '64px', height: '64px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            boxShadow: '0 8px 32px rgba(14,165,233,0.3)',
                        }}>
                            <Check size={32} color="#fff" />
                        </div>
                        <h3 style={{ color: '#f0f9ff', fontSize: '1.5rem', fontFamily: "'Playfair Display', serif", margin: '0 0 0.5rem' }}>
                            Reservation Confirmed!
                        </h3>
                        <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                            We'll see you soon. Check your email for details.
                        </p>
                    </motion.div>
                ) : (
                    <ReservationForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
                )}

                {/* Contact Info */}
                <ContactInfo />
            </motion.div>
            <CrawlingLobsters />
        </section>
    );
}
