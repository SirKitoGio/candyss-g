import { motion } from 'framer-motion';
import { CalendarDays, Clock, Users, Send } from 'lucide-react';
import { inputStyle, labelStyle, handleFocus, handleBlur } from './ui/formStyles';

export default function ReservationForm({ form, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">

            {/* SECTION: GUEST DETAILS */}
            <div className="flex flex-col gap-4 md:gap-5">
                <div className="flex items-center gap-3">
                    <h4 className="text-slate-50 text-sm md:text-base font-semibold tracking-wider m-0">Guest Details</h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                </div>

                <div className="grid grid-cols-1 gap-4 md:gap-5">
                    <div>
                        <label style={labelStyle}>Full Name</label>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Captain Francis"
                            required
                            style={inputStyle}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
                        <div>
                            <label style={labelStyle}>Email</label>
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="candyseafoodandgrill@gmail.com"
                                required
                                style={inputStyle}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            <label style={labelStyle}>Phone</label>
                            <input
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="+63 915 123 4567"
                                style={inputStyle}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION: RESERVATION DETAILS */}
            <div className="flex flex-col gap-4 md:gap-5">
                <div className="flex items-center gap-3">
                    <h4 className="text-slate-50 text-sm md:text-base font-semibold tracking-wider m-0">Reservation Details</h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label style={labelStyle}><CalendarDays size={14} /> Date</label>
                        <input
                            name="date"
                            type="date"
                            value={form.date}
                            onChange={handleChange}
                            required
                            style={{ ...inputStyle, colorScheme: 'dark' }}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div>
                        <label style={labelStyle}><Clock size={14} /> Time</label>
                        <input
                            name="time"
                            type="time"
                            value={form.time}
                            onChange={handleChange}
                            required
                            style={{ ...inputStyle, colorScheme: 'dark' }}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div>
                        <label style={labelStyle}><Users size={14} /> Guests</label>
                        <select
                            name="guests"
                            value={form.guests}
                            onChange={handleChange}
                            style={{ ...inputStyle, cursor: 'pointer', colorScheme: 'dark' }}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                            ))}
                            <option value="9+">9+ Guests</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label style={labelStyle}>Special Requests</label>
                    <textarea
                        name="requests"
                        value={form.requests}
                        onChange={handleChange}
                        placeholder="Dietary needs, special occasion..."
                        rows={3}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '80px' }}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </div>
            </div>

            {/* Submit */}
            <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 12px 40px rgba(14,165,233,0.35)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    fontFamily: "'Inter', sans-serif",
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    letterSpacing: '0.05em',
                    marginTop: '0.5rem',
                    boxShadow: '0 8px 24px rgba(2,132,199,0.25)',
                    transition: 'background 0.3s',
                }}
            >
                <Send size={18} />
                Confirm Reservation
            </motion.button>
        </form>
    );
}
