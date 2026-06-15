'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  location: string;
  bullets: string[];
  tech?: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    period: 'HAZ 2024 — EYL 2024',
    title: 'Yapay Zeka & Görüntü İşleme Stajyeri',
    org: 'Üzüm Teknoloji',
    location: 'Denizli Teknokent',
    bullets: [
      'YOLOv8 ve OpenCV ile araç plaka tespit sistemi',
      'Model eğitimi, validasyon ve optimizasyon',
    ],
    tech: ['Python', 'YOLOv8', 'OpenCV', 'FastAPI'],
  },
  {
    period: '2022 — DEVAM',
    title: 'Bilgisayar Mühendisliği Öğrencisi',
    org: 'Selçuk Üniversitesi',
    location: 'Konya',
    bullets: ['Otonom sistemler ve yapay zeka odaklı araştırma'],
  },
  {
    period: '2023 — 2024',
    title: 'TEKNOFEST Yarışmacısı',
    org: 'Havacılıkta Yapay Zeka · Tarım Teknolojileri',
    location: 'Türkiye',
    bullets: ['İki ayrı kategoride proje geliştirme'],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const expItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(lineRef, { once: true, margin: '-80px' });

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.p
        variants={itemVariants}
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '9px',
          color: 'var(--text-muted)',
          letterSpacing: '4px',
          marginBottom: '8px',
        }}
      >
        // DENEYİM
      </motion.p>
      <motion.h2
        variants={itemVariants}
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '28px',
          fontWeight: 700,
          color: 'var(--text-secondary)',
          marginBottom: '56px',
          letterSpacing: '2px',
        }}
      >
        Kariyer
      </motion.h2>

      <div ref={lineRef} style={{ display: 'flex', gap: '40px' }}>
        {/* Animated timeline line */}
        <div style={{ position: 'relative', width: '1px', flexShrink: 0 }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '100%',
              background: 'var(--border)',
            }}
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '1px',
              height: '100%',
              background: 'var(--border-mid)',
              transformOrigin: 'top',
            }}
          />
        </div>

        {/* Experience items */}
        <motion.div
          variants={{
            visible: { transition: { staggerChildren: 0.3, delayChildren: 0.5 } },
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
            flex: 1,
          }}
        >
          {EXPERIENCES.map((exp, i) => (
            <motion.div key={i} variants={expItemVariants}>
              <p
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '9px',
                  color: 'var(--text-muted)',
                  letterSpacing: '2px',
                  marginBottom: '8px',
                }}
              >
                [{exp.period}]
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--text-secondary)',
                  marginBottom: '4px',
                }}
              >
                {exp.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  marginBottom: '12px',
                }}
              >
                {exp.org} · {exp.location}
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  marginBottom: '12px',
                }}
              >
                {exp.bullets.map((b, j) => (
                  <p
                    key={j}
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      lineHeight: 1.7,
                    }}
                  >
                    — {b}
                  </p>
                ))}
              </div>
              {exp.tech && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono), monospace',
                        fontSize: '9px',
                        color: 'var(--text-muted)',
                        padding: '2px 8px',
                        border: '1px solid var(--border)',
                        borderRadius: '2px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
