'use client';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

const pressItems = [
  {
    id: 1,
    source: 'TRT Haber',
    category: 'Ulusal TV',
    image: '/press-1.jpg.png',
    link: 'https://www.instagram.com/reels/DYWa3c7oT-H/',
  },
  {
    id: 2,
    source: 'Habertürk',
    category: 'Ulusal Medya',
    image: '/images/press-2.jpg',
    link: 'https://www.haberturk.com/yerel-haberler/konya-haberleri/universite-ogrencileri-nasanin-kullandigi-mekanigi-yer-kesif-aracina-uyarladi-41376471',
  },
  {
    id: 3,
    source: 'Selçuk Üniversitesi',
    category: 'Okul Medyası',
    image: '/images/press-3.jpg',
    link: 'https://selcuk.edu.tr/icerik/haber/76603/selcuk-universitesi-ogrencileri-gpssiz-hareket-eden-arac-gelistirdi',
  },
  {
    id: 5,
    source: 'İKAF-2026',
    category: 'Teknoloji Yarışması',
    image: '/images/press-4.jpg',
    link: 'https://www.instagram.com/p/DXr3XDvDTJw/?hl=tr&img_index=1',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Press() {
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
        // BASIN
      </motion.p>
      <motion.h2
        variants={itemVariants}
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '28px',
          fontWeight: 700,
          color: 'var(--text-secondary)',
          marginBottom: '12px',
          letterSpacing: '2px',
        }}
      >
        Basında
      </motion.h2>
      <motion.p
        variants={itemVariants}
        style={{
          fontSize: '13px',
          color: 'var(--text-muted)',
          marginBottom: '48px',
          maxWidth: '480px',
        }}
      >
        İKA otonom araç projemizin ulusal ve yerel medyada yer aldığı haberler.
      </motion.p>

      <motion.div
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}
      >
        {pressItems.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            style={{
              position: 'relative',
              display: 'block',
              aspectRatio: '4/3',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              textDecoration: 'none',
            }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <Image
              src={item.image}
              alt={item.source}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            {/* Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
              }}
            />

            {/* Top-right detail badge */}
            <div
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: 'rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '4px 8px',
                borderRadius: '4px',
              }}
            >
              <ExternalLink size={11} color="var(--text-secondary)" />
              <span
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '9px',
                  color: 'var(--text-secondary)',
                  letterSpacing: '1px',
                }}
              >
                detay
              </span>
            </div>

            {/* Bottom info */}
            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '9px',
                  color: 'var(--text-secondary)',
                  letterSpacing: '2px',
                  display: 'block',
                  marginBottom: '6px',
                }}
              >
                {item.category}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#e8e8e8',
                  letterSpacing: '1px',
                }}
              >
                {item.source}
              </h3>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
