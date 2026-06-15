'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitBranch, ExternalLink, Mail, MapPin, GraduationCap } from 'lucide-react';

interface TerminalLine {
  type: 'prompt' | 'output';
  text: string;
}

const TERMINAL_SEQUENCE: Array<{ delay: number; line: TerminalLine }> = [
  { delay: 0, line: { type: 'prompt', text: '$ whoami' } },
  { delay: 400, line: { type: 'output', text: 'Arda Tuncay — Bilgisayar Mühendisi' } },
  { delay: 900, line: { type: 'prompt', text: '$ cat about.txt' } },
  { delay: 1300, line: { type: 'output', text: '> Selçuk Üniversitesi, 3. Sınıf' } },
  { delay: 1500, line: { type: 'output', text: '> Konum: Konya, Türkiye' } },
  { delay: 1700, line: { type: 'output', text: '> E-posta: ardatuncay05@gmail.com' } },
  { delay: 2200, line: { type: 'prompt', text: '$ cat focus.txt' } },
  { delay: 2600, line: { type: 'output', text: '> Yapay Zeka & Görüntü İşleme' } },
  { delay: 2800, line: { type: 'output', text: '> Otonom Sistemler & Robotik' } },
  { delay: 3000, line: { type: 'output', text: '> Savunma Sanayi Teknolojileri' } },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
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
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [cursorOn, setCursorOn] = useState(true);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    if (!isInView) return;
    TERMINAL_SEQUENCE.forEach(({ delay, line }) => {
      const t = setTimeout(
        () => setLines((prev) => [...prev, line]),
        delay
      );
      timers.current.push(t);
    });
    return () => timers.current.forEach(clearTimeout);
  }, [isInView]);

  useEffect(() => {
    const iv = setInterval(() => setCursorOn((v) => !v), 700);
    return () => clearInterval(iv);
  }, []);

  return (
    <motion.div
      ref={ref}
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
        // HAKKIMDA
      </motion.p>
      <motion.h2
        variants={itemVariants}
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '28px',
          fontWeight: 700,
          color: 'var(--text-secondary)',
          marginBottom: '48px',
          letterSpacing: '2px',
        }}
      >
        Kimim
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '3fr 2fr',
          gap: '48px',
          alignItems: 'start',
        }}
      >
        {/* Terminal window */}
        <motion.div variants={itemVariants}>
          <div
            style={{
              border: '1px solid var(--border)',
              borderRadius: '6px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                background: '#0d0d0d',
                padding: '10px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#2a1a1a',
                }}
              />
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#2a2a1a',
                }}
              />
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#1a2a1a',
                }}
              />
            </div>

            <div
              style={{
                background: '#0a0a0a',
                padding: '20px 24px',
                minHeight: '280px',
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '12px',
                lineHeight: 1.8,
              }}
            >
              {lines.map((line, i) => (
                <div
                  key={i}
                  style={{
                    color:
                      line.type === 'prompt'
                        ? 'var(--text-secondary)'
                        : 'var(--text-muted)',
                  }}
                >
                  {line.text}
                </div>
              ))}
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '14px',
                  background: 'var(--text-secondary)',
                  opacity: cursorOn ? 0.4 : 0,
                  verticalAlign: 'middle',
                  transition: 'opacity 0.15s',
                }}
              />
            </div>
          </div>
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
            href="mailto:ardatuncay05@gmail.com"
            style={linkStyle}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'var(--text-secondary)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'var(--text-muted)')
            }
          >
            <Mail size={16} />
            ardatuncay05@gmail.com
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
            Konya, Türkiye
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
