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
            className="min-h-screen flex items-center justify-center w-full px-4 md:px-6 py-24 md:py-40 pointer-events-auto relative"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.15 }}
                className="w-full max-w-2xl bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 px-6 py-8 md:px-10 md:py-12 flex flex-col gap-8 md:gap-10 relative z-10"
                style={{
                    boxShadow: '0 32px 64px rgba(0,0,0,0.4)',
                }}
            >
                {/* Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-sky-600 to-sky-800 flex items-center justify-center mx-auto mb-4 md:mb-5 shadow-lg shadow-sky-600/30"
                    >
                        <Utensils className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl text-slate-50 font-display font-bold m-0 tracking-tight">
                        Reserve a Table
                    </h2>
                    <p className="text-sky-300 text-xs md:text-sm tracking-widest uppercase font-semibold mt-2">
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
