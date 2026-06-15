export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  status: 'devam' | 'tamamlandı';
  accentColor: string;
}

export interface ExperienceItem {
  period: string;
  title: string;
  org: string;
  location: string;
  bullets: string[];
  tech?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const PROJECTS: Project[] = [
  {
    title: 'STW İnsansız Kara Aracı',
    category: 'ROBOTİK',
    description:
      'ROS 2 tabanlı otonom kara aracı. Gerçek zamanlı engellerden kaçınma, yol planlama ve Gazebo simülasyon ortamı.',
    tech: ['ROS 2', 'Gazebo', 'Jetson NX', 'OpenCV'],
    status: 'devam',
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
    status: 'devam',
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
];

export const EXPERIENCES: ExperienceItem[] = [
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

export const SKILL_CATEGORIES: SkillCategory[] = [
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
