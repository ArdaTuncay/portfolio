'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
  { id: 'about', label: 'Hakkımda' },
  { id: 'projects', label: 'Projeler' },
  { id: 'experience', label: 'Deneyim' },
  { id: 'press', label: 'Basın' },
  { id: 'contact', label: 'İletişim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const ids = ['contact', 'press', 'experience', 'projects', 'skills', 'about', 'hero'];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 80px',
          background: scrolled ? 'rgba(14,14,14,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <button
          onClick={() => scrollTo('hero')}
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '14px',
            color: 'var(--text-primary)',
            letterSpacing: '3px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          AT
        </button>

        <div className="nav-links" style={{ gap: '40px' }}>
          {NAV_LINKS.map(({ id, label }) => {
            const active = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '10px',
                  letterSpacing: '2px',
                  color: active ? 'var(--accent-blue)' : 'var(--text-muted)',
                  opacity: active ? 0.7 : 1,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  if (!active)
                    (e.currentTarget as HTMLButtonElement).style.color =
                      'var(--text-secondary)';
                }}
                onMouseLeave={(e) => {
                  if (!active)
                    (e.currentTarget as HTMLButtonElement).style.color =
                      'var(--text-muted)';
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Menü"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '20px',
                height: '1px',
                background: 'var(--text-muted)',
              }}
            />
          ))}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 90,
              background: 'rgba(14,14,14,0.97)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
            }}
          >
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '20px',
                  letterSpacing: '4px',
                  color: 'var(--text-secondary)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
