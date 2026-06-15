'use client';
import { motion } from 'framer-motion';
import MagneticField from '@/components/effects/MagneticField';
import ScrambleText from '@/components/effects/ScrambleText';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <MagneticField />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '80px',
          zIndex: 10,
        }}
      >
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '10px',
              color: 'var(--text-muted)',
              letterSpacing: '4px',
              marginBottom: '20px',
            }}
          >
            // BİLGİSAYAR MÜHENDİSİ
          </motion.p>

          <h1
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '3px',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}
          >
            <ScrambleText text="ARDA TUNCAY" />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '13px',
              color: 'var(--text-muted)',
              letterSpacing: '3px',
              marginBottom: '20px',
            }}
          >
            AI · Otonom Sistemler · Robotik
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              maxWidth: '380px',
              lineHeight: 1.7,
              marginBottom: '40px',
            }}
          >
            Selçuk Üniversitesi Bilgisayar Mühendisliği 3. sınıf öğrencisi.
            YOLOv8, ROS 2 ve LangChain ile çalışıyorum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
          >
            <button
              onClick={() => scrollTo('projects')}
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '11px',
                color: 'var(--text-secondary)',
                letterSpacing: '2px',
                padding: '10px 24px',
                background: 'transparent',
                border: '1px solid var(--border-mid)',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--text-muted)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-mid)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              Projeler
            </button>
            <button
              onClick={() => scrollTo('contact')}
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '11px',
                color: 'var(--text-secondary)',
                letterSpacing: '2px',
                padding: '10px 24px',
                background: 'transparent',
                border: '1px solid rgba(74, 158, 186, 0.6)',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease, color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(74, 158, 186, 0.9)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(74, 158, 186, 0.6)';
                e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              İletişim →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          right: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'var(--border-mid)',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '9px',
            color: 'var(--text-muted)',
            letterSpacing: '3px',
            writingMode: 'vertical-rl',
          }}
        >
          ↓ scroll
        </span>
      </motion.div>
    </div>
  );
}
