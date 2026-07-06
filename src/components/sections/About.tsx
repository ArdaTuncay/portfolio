'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitBranch, ExternalLink, Mail, MapPin, GraduationCap } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  color: 'var(--text-muted)',
  textDecoration: 'none' as const,
  fontSize: '12px',
  fontFamily: 'var(--font-mono), monospace',
  transition: 'color 0.3s ease',
};

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      <motion.h2
        variants={itemVariants}
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: 'clamp(24px, 4vw, 40px)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '48px',
          letterSpacing: '2px',
        }}
      >
        Hakkımda
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          gap: '48px',
          alignItems: 'start',
        }}
      >
        {/* Simple paragraph text instead of terminal */}
        <motion.div variants={itemVariants} style={{
            color: 'var(--text-muted)',
            fontSize: '14px',
            lineHeight: 1.8,
            maxWidth: '600px'
        }}>
          <p style={{ marginBottom: '20px' }}>
            Selçuk Üniversitesi Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Otonom sistemler, savunma sanayi teknolojileri ve yapay zeka odaklı çalışmalar gerçekleştiriyorum.
          </p>
          <p style={{ marginBottom: '20px' }}>
            OpenCV ve YOLOv8 gibi derin öğrenme tabanlı görüntü işleme modellerinin yanında, ROS 2 tabanlı robotik sistemler ve otonom araç algoritmaları üzerinde aktif olarak projeler geliştiriyorum.
          </p>
          <p>
            Gelecekteki en büyük hedefim yapay zekayı ve robotik sistemleri bir araya getirerek, karmaşık mühendislik problemlerine akılcı ve yenilikçi çözümler üretmektir.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <a
            href="https://github.com/ArdaTuncay"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'var(--text-secondary)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'var(--text-muted)')
            }
          >
            <GitBranch size={16} />
            github.com/ArdaTuncay
          </a>

          <a
            href="https://linkedin.com/in/arda-tuncay-a893532a4"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'var(--text-secondary)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'var(--text-muted)')
            }
          >
            <ExternalLink size={16} />
            linkedin.com/in/arda-tuncay
          </a>

          <a
            href="mailto:ceng.ardatuncay@gmail.com"
            style={linkStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'var(--text-secondary)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'var(--text-muted)')
            }
          >
            <Mail size={16} />
            ceng.ardatuncay@gmail.com
          </a>

          <div
            style={{
              ...linkStyle,
              textDecoration: undefined,
              cursor: 'default',
            }}
          >
            <GraduationCap size={16} />
            Selçuk Üniversitesi
          </div>

          <div
            style={{
              ...linkStyle,
              textDecoration: undefined,
              cursor: 'default',
            }}
          >
            <MapPin size={16} />
            Konya, Denizli Türkiye
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
