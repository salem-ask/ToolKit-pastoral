/**
 * Central product configuration — The Complete Pastor's Toolkit.
 * Editing this file alone updates the entire sales funnel.
 */

/**
 * Single Chariow checkout URL.
 * Every purchase button on the site must use this variable exclusively.
 * Never hardcode another Chariow URL anywhere else in the project.
 */
export const CHARIOW_CHECKOUT_URL =
  'https://livresenligne.mychariow.shop/prd_igwhv4nc/checkout';

export const SITE_URL = 'https://libraryonline.online';

export const product = {
  name: 'THE COMPLETE PASTOR’S TOOLKIT',
  tagline:
    'Practical training & essential resources to lead, organize, and grow your church.',
  heroDescription:
    'A strategic library designed to support pastors through every dimension of their ministry, from planting a church to structuring, training, and growing it.',
  heroDomainsLabel: '10 essential areas of pastoral ministry',
  primaryCtaLabel: 'ACCESS THE COMPLETE TOOLKIT',
  offerCtaLabel: 'I WANT THE COMPLETE PASTOR’S TOOLKIT',
  finalCtaLabel: 'ACCESS THE COMPLETE TOOLKIT',
  stickyCtaLabel: 'ACCESS THE PACK',
  accessNote: 'Digital access after payment',
};

export type Category = {
  number: string;
  title: string;
  description: string;
};

export const categories: Category[] = [
  {
    number: '01',
    title: 'BEING A PASTOR',
    description:
      'Resources to better understand the responsibilities, demands, and dimensions of pastoral ministry.',
  },
  {
    number: '02',
    title: 'CHURCH PLANTING',
    description:
      'Resources to understand the steps and principles involved in planting and growing a new assembly.',
  },
  {
    number: '03',
    title: 'EVANGELISM & FOLLOW-UP OF NEW CONVERTS',
    description:
      'Resources to evangelize, welcome, accompany, and follow up with newly converted people.',
  },
  {
    number: '04',
    title: 'CHURCH ADMINISTRATION',
    description:
      'Resources to organize and effectively administer the life of the church.',
  },
  {
    number: '05',
    title: 'TRAINING CHURCH WORKERS',
    description:
      'Resources to train elders, deacons, teachers, ushers, youth leaders, and other church workers.',
  },
  {
    number: '06',
    title: 'SUNDAY SCHOOL',
    description:
      'Resources to organize, teach, and effectively develop Sunday school.',
  },
  {
    number: '07',
    title: 'YOUTH MINISTRY',
    description:
      'Resources to support, train, and develop ministry to young people.',
  },
  {
    number: '08',
    title: 'WOMEN’S MINISTRY',
    description:
      'Resources to support and develop women’s ministry within the church.',
  },
  {
    number: '09',
    title: 'PREACHING & TEACHING',
    description:
      'Resources to deepen message preparation, preaching, and biblical teaching.',
  },
  {
    number: '10',
    title: 'ESSENTIAL RESOURCES',
    description:
      'A selection of doctrinal and thematic resources to meet the church’s various teaching needs.',
  },
];

export const journeySteps: string[] = [
  'BE A PASTOR',
  'PLANT',
  'EVANGELIZE',
  'ORGANIZE',
  'TRAIN',
  'TEACH',
  'LEAD',
  'GROW',
];

export const audience: string[] = [
  'Pastors',
  'Church planters',
  'Church leaders',
  'Ministers and preachers',
  'Department leaders',
  'Elders and deacons',
  'Youth leaders',
  'Women’s ministry leaders',
  'Sunday school teachers',
];

export const benefits: string[] = [
  'Better prepare for ministry',
  'Structure your church',
  'Train your workers',
  'Support new converts',
  'Develop your various departments',
  'Improve your teaching',
  'Deepen your biblical knowledge',
  'Have practical resources to consult as you need them',
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faq: FaqItem[] = [
  {
    question: 'What does The Complete Pastor’s Toolkit include?',
    answer:
      'The pack brings together practical training and reference books/documents across 10 major areas of pastoral ministry.',
  },
  {
    question: 'Is it only for pastors?',
    answer:
      'The pack is designed primarily for pastors, but many resources are also useful for church leaders and collaborators.',
  },
  {
    question: 'Does the pack only contain books?',
    answer:
      'No. It combines practical training with reference books and documents.',
  },
  {
    question: 'What areas are covered?',
    answer:
      'Being a pastor, Church planting, Evangelism & follow-up of new converts, Church administration, Training church workers, Sunday school, Youth ministry, Women’s ministry, Preaching & teaching, Essential resources.',
  },
  {
    question: 'How do I pay?',
    answer:
      'Simply click the "Access the pack" button, then follow the steps on the secure payment page to complete your order.',
  },
  {
    question: 'How do I receive the documents after purchase?',
    answer:
      'Document downloads are available immediately after your purchase.',
  },
];

export const contact = {
  email: 'libraryonline@gmail.com',
  whatsappNumber: '+243823226790',
  get whatsappLink() {
    const digitsOnly = this.whatsappNumber.replace(/[^\d]/g, '');
    return `https://wa.me/${digitsOnly}`;
  },
  website: 'libraryonline.online',
};

export const whatsappCommunity = {
  groupLink:
    'https://chat.whatsapp.com/DRFUqxZkOjX3fzXEaGObV3?s=cl&p=a&mlu=4&ilr=4',
  title: 'JOIN OUR WHATSAPP CHRISTIAN LIBRARY GROUP',
  description:
    'Get free Christian books by joining our WhatsApp community.',
  ctaLabel: 'JOIN THE WHATSAPP GROUP',
};

export const seo = {
  title: 'The Complete Pastor’s Toolkit | Training & Pastoral Resources',
  description:
    'Discover The Complete Pastor’s Toolkit: practical training and essential resources to plant, organize, train, teach, and grow your church.',
};

export const images = {
  /** Main product poster / pack mockup */
  productMockup: '/images/product/pack-mockup.jpg',
  /**
   * WhatsApp social-proof screenshots (personal data and the 3rd line of
   * the download link are blurred). Add or remove a path here to update
   * the gallery.
   */
  socialProof: [
    '/images/social-proof/testimonial-1.jpg',
    '/images/social-proof/testimonial-2.jpg',
    '/images/social-proof/testimonial-3.jpg',
    '/images/social-proof/testimonial-4.jpg',
  ],
};
