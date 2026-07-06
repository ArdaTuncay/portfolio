'use client';
import { useState, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  status: 'devam' | 'tamamlandı';
  accentColor: string;
}

const PROJECTS: Project[] = [
  {
    title: 'STW İnsansız Kara Aracı',
    category: 'ROBOTİK',
    description:
      'ROS 2 tabanlı otonom kara aracı. Gerçek zamanlı engellerden kaçınma, yol planlama ve Gazebo simülasyon ortamı.',
    tech: ['ROS 2', 'Gazebo', 'Jetson NX', 'OpenCV'],
    status: 'tamamlandı',
    accentColor: '#4a9eba',
  },
  {
    title: 'Plaka Tespit Sistemi',
    category: 'GÖRÜNTÜ İŞLEME',
    description:
      'YOLOv8 ile araç plaka tespiti ve karakter tanıma. FastAPI REST endpoint ile entegre edilmiş üretim sistemi.',
    tech: ['YOLOv8', 'OpenCV', 'FastAPI', 'Python'],
    status: 'tamamlandı',
    accentColor: '#3d7a52',
  },
  {
    title: 'TEKNOFEST Havacılık AI',
    category: 'YAPAY ZEKA',
    description:
      'Havacılık alanında yapay zeka yarışması projesi. TensorFlow ile özel nesne tespiti modeli.',
    tech: ['Python', 'TensorFlow', 'OpenCV'],
    status: 'tamamlandı',
    accentColor: '#3d7a52',
  },
  {
    title: 'Sesli Üniversite Asistanı',
    category: 'AI AGENT',
    description:
      'LangChain ile oluşturulmuş üniversite bilgi asistanı. Doğal dil işleme ve konuşma tanıma entegrasyonu.',
    tech: ['LangChain', 'FastAPI', 'Speech', 'Python'],
    status: 'tamamlandı',
    accentColor: '#6b5fa5',
  },
  {
    title: 'TEKNOFEST Tarım',
    category: 'YAPAY ZEKA',
    description:
      'Tarım teknolojileri kategorisinde YOLOv8 tabanlı bitki hastalık tespiti sistemi.',
    tech: ['YOLOv8', 'Raspberry Pi', 'OpenCV'],
    status: 'tamamlandı',
    accentColor: '#3d7a52',
  },
  {
    title: 'Sesli Sohbet Uygulaması',
    category: 'WEB',
    description:
      'Discord benzeri gerçek zamanlı sesli sohbet ve iletişim uygulaması.',
    tech: ['React', 'WebRTC', 'Node.js', 'Socket.io'],
    status: 'devam',
    accentColor: '#b46e3d',
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

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? 'rgba(74, 158, 186, 0.2)' : 'var(--border)'}`,
        borderRadius: '6px',
        padding: '24px',
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transition: 'border-color 0.4s ease',
        cursor: 'pointer',
      }}
    >
      {hovered && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'rgba(74, 158, 186, 0.4)',
          }}
        />
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '12px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '9px',
            letterSpacing: '2px',
            color: project.accentColor,
            opacity: 0.7,
            padding: '3px 8px',
            border: `1px solid ${project.accentColor}`,
            borderRadius: '2px',
          }}
        >
          {project.category}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '9px',
            color:
              project.status === 'tamamlandı'
                ? 'var(--accent-green)'
                : 'var(--text-muted)',
            letterSpacing: '1px',
          }}
        >
          {project.status === 'tamamlandı' ? '✓ tamamlandı' : '▶ devam'}
        </span>
      </div>

      <h3
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '14px',
          fontWeight: 700,
          color: 'var(--text-secondary)',
          marginBottom: '10px',
          letterSpacing: '1px',
          transform: 'translateZ(30px)',
        }}
      >
        {project.title}
      </h3>

      <p
        style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
          lineHeight: 1.7,
          marginBottom: '16px',
        }}
      >
        {project.description}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.tech.map((t) => (
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
    </motion.div>
  );
}

export default function Projects() {
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
        PROJELER
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
        Çalışmalar
      </motion.h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        {PROJECTS.slice(0, 3).map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}
      >
        {PROJECTS.slice(3).map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </motion.div>
  );
}
