'use client';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const LINKS = [
  {
    label: 'ardatuncay05@gmail.com',
    href: 'mailto:ardatuncay05@gmail.com',
    external: false,
  },
  {
    label: 'github.com/ArdaTuncay',
    href: 'https://github.com/ArdaTuncay',
    external: true,
  },
  {
    label: 'linkedin.com/in/arda-tuncay-a893532a4',
    href: 'https://linkedin.com/in/arda-tuncay-a893532a4',
    external: true,
  },
];

export default function Contact() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <motion.h2
        variants={itemVariants}
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: 'clamp(24px, 4vw, 40px)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '16px',
          letterSpacing: '2px',
        }}
      >
        Birlikte çalışalım
      </motion.h2>

      <motion.p
        variants={itemVariants}
        style={{
          fontSize: '13px',
          color: 'var(--text-muted)',
          marginBottom: '48px',
        }}
      >
        Proje fikirleri, iş birlikleri veya sorular için.
      </motion.p>

      <motion.div
        variants={itemVariants}
        style={{
          display: 'flex',
          gap: '40px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: '64px',
        }}
      >
        {LINKS.map(({ label, href, external }) => (
          <a
            key={href}
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize: '12px',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            {label}
          </a>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        style={{
          width: '100%',
          maxWidth: '400px',
          height: '1px',
          background: 'var(--border)',
          marginBottom: '24px',
        }}
      />

      <motion.p
        variants={itemVariants}
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '10px',
          color: 'var(--text-muted)',
          letterSpacing: '2px',
        }}
      >
        © 2025 Arda Tuncay
      </motion.p>
    </motion.div>
  );
}
