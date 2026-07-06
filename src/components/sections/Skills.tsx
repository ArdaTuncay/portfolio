'use client';
import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    name: 'YAPAY ZEKA & GÖRÜNTÜ İŞLEME',
    skills: [
      'Python', 'OpenCV', 'YOLOv8', 'TensorFlow',
      'PyTorch', 'scikit-learn', 'MediaPipe', 'Roboflow',
    ],
  },
  {
    name: 'ROBOTİK & SİMÜLASYON',
    skills: ['ROS 2', 'Gazebo', 'Arduino', 'Raspberry Pi', 'Jetson Orin NX'],
  },
  {
    name: 'FRAMEWORK & KÜTÜPHANELER',
    skills: ['FastAPI', 'Flask', 'NumPy', 'Pandas', 'LangChain'],
  },
  {
    name: 'WEB & ARAÇLAR',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Git', 'Docker', 'Linux'],
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

const tagVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Skills() {
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
        BECERİLER
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
        Teknolojiler
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {CATEGORIES.map((cat) => (
          <motion.div key={cat.name} variants={itemVariants}>
            <p
              style={{
                fontFamily: 'var(--font-mono), monospace',
                fontSize: '9px',
                color: 'var(--text-muted)',
                letterSpacing: '3px',
                marginBottom: '12px',
              }}
            >
              [{cat.name}]
            </p>
            <div
              style={{
                height: '1px',
                background: 'var(--border)',
                marginBottom: '16px',
              }}
            />
            <motion.div
              variants={{
                visible: { transition: { staggerChildren: 0.04 } },
              }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}
            >
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagVariants}
                  style={{
                    fontFamily: 'var(--font-mono), monospace',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    padding: '4px 12px',
                    border: '1px solid var(--border-mid)',
                    borderRadius: '2px',
                    transition: 'border-color 0.3s ease, color 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.color = 'var(--text-secondary)';
                    el.style.borderColor = 'rgba(74, 158, 186, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLSpanElement;
                    el.style.color = 'var(--text-muted)';
                    el.style.borderColor = 'var(--border-mid)';
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
