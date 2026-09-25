/**
 * ЕДИНСТВЕННЫЙ файл с контентом сайта.
 * Тексты, ссылки, фото, карточки постов — всё правится здесь,
 * структура страницы при этом не меняется.
 *
 * Тексты — строго из ТЗ (выбран вариант A, вариант B оставлен комментарием рядом).
 * Правила ТЗ п.4: не добавлять даты, статистику команд, названия программ/шоу,
 * должности, показатели просмотров, семейные фото и email без подтверждения клиентом.
 * Все внешние ссылки открываются в новой вкладке.
 */

export const site = {
  name: 'Brad Barton',
  siteName: 'Brad Barton',
  title: 'Brad Barton — Builder of people. Ol’ Ball Coach. Truth Teller.',
  description:
    'Brad Barton — husband, dad of three, former teacher and head boys basketball coach. Videos, posts and conversations on Rumble, YouTube, Telegram and Facebook.',
  ogImage: '/img/og-default.jpg',
};

/** Подтверждённые каналы (ТЗ Блок 5). Проверены 25.09.2026. */
export const socials = {
  facebook: { label: 'Facebook', handle: 'brad.barton.71', url: 'https://www.facebook.com/brad.barton.71' },
  rumble: { label: 'Rumble', handle: 'rumble.com/c/bradbarton', url: 'https://rumble.com/c/bradbarton' },
  telegram: { label: 'Telegram', handle: 't.me/liltalkshow', url: 'https://t.me/liltalkshow' },
  youtube: { label: 'YouTube', handle: 'YouTube channel', url: 'https://www.youtube.com/channel/UCYyIRofRRWKVAdl1wuRIFuQ' },
};
export type SocialKey = keyof typeof socials;
/** Порядок кнопок (ТЗ Блок 9: Facebook / Rumble / Telegram / YouTube) */
export const socialOrder: SocialKey[] = ['facebook', 'rumble', 'telegram', 'youtube'];

export const nav = [
  { label: 'Profile', href: '#profile' },
  { label: 'Background', href: '#background' },
  { label: 'Principles', href: '#principles' },
  { label: 'Media', href: '#media' },
  { label: 'Latest Posts', href: '#posts' },
  { label: 'Follow', href: '#follow' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  name: 'Brad Barton',
  // B: 'Faith, family, coaching and straight talk.'
  tagline: ['Builder of people.', 'Ol’ Ball Coach.', 'Truth Teller.'],
  // B: 'Sharing ideas and conversations from Chattanooga, Tennessee.'
  lead: 'A husband, dad of three and former teacher and head boys basketball coach.',
  primaryCta: { label: 'Watch the latest', href: '#media' },
  secondaryCta: { label: 'Explore the archive', href: '#archive' },
  /** Официальное фото с atomgroup.io. Заменить на портрет от клиента, когда будет. */
  portrait: '/img/brad-portrait.webp',
  portraitAlt: 'Portrait of Brad Barton',
};

export const profile = {
  label: 'Profile',
  heading: 'In his own words',
  // B: 'Brad Barton brings together faith, family, coaching and direct conversation. His public work is shaped by years in education and high-school basketball, alongside ongoing video and social-media commentary.'
  text:
    'Brad Barton describes himself as a Christian Conservative, husband, father of three, builder of people, former teacher and head boys basketball coach, and a truth teller.',
};

/** Роль с официального сайта atomgroup.io — дословно, без цифр. show: false — скрыть строку. */
export const atom = {
  show: true,
  role: 'Co-Founder of Atom Ventures',
  url: 'https://atomgroup.io/',
  urlLabel: 'atomgroup.io',
};

export const background = {
  label: 'Background',
  // B: 'A coach’s perspective' / 'Before becoming a public voice, Brad Barton worked in education and high-school basketball. The experience continues to shape the way he speaks about people, character, discipline and responsibility.'
  heading: 'From the classroom to the court',
  text:
    'Brad Barton was a teacher and head boys basketball coach at Seneca High School in Missouri and Willard High School. His background combines education, leadership and the daily work of building a team.',
  /** Фото над «ростером». Файл в public/, alt — описание кадра */
  photo: '/img/archive/coach-court.webp',
  photoAlt: 'Brad Barton on a basketball court, holding a ball',
  /** Факты из текста выше — без лет, предмета и статистики (ТЗ Блок 3) */
  roster: [
    { k: 'Role', v: 'Teacher' },
    { k: 'Role', v: 'Head boys basketball coach' },
    { k: 'School', v: 'Seneca High School, Missouri' },
    { k: 'School', v: 'Willard High School' },
  ],
};

export const principles = {
  label: 'Principles',
  // B: 'Build people. Tell the truth. Keep showing up.' — редакционная интерпретация, только после согласования с Brad
  words: ['Faith.', 'Family.', 'People.', 'Truth.'],
  text: 'A public profile grounded in Christian faith, family life, personal responsibility and a commitment to speak directly.',
};

export type Featured = { platform: 'youtube' | 'rumble'; /** id видео / embed-id Rumble */ id: string; title: string } | null;

export const media = {
  label: 'Media',
  // B: 'The conversation continues online' / 'New perspectives, direct opinions and updates from Brad Barton — available through video and social platforms.'
  heading: 'Watch, listen and stay in the conversation',
  text: 'Follow Brad Barton’s latest videos, commentary and public conversations across his media channels.',
  /** Какие каналы показать карточками и подпись-тип под каждым */
  channels: [
    { key: 'rumble', kind: 'Video' },
    { key: 'youtube', kind: 'Video' },
    { key: 'telegram', kind: 'Channel' },
    { key: 'facebook', kind: 'Posts' },
  ] satisfies { key: SocialKey; kind: string }[],
  /**
   * Встроенное видео — только официальный embed и только после разрешения (ТЗ п.3).
   * Пример: { platform: 'youtube', id: 'dQw4w9WgXcQ', title: '...' }. null — блок не показывается.
   */
  featured: null as Featured,
};

export type Post = {
  /** Дата публикации как на Facebook, напр. 'March 4, 2026' — обязательна */
  date: string;
  /** Тип материала: 'Post' | 'Video' | 'Live' | 'Photo' */
  type: string;
  /** Короткий анонс 1–2 предложения, НЕ полный текст поста */
  excerpt: string;
  /** Ссылка на оригинал поста */
  url: string;
};

export const posts = {
  label: 'Latest Posts',
  // B: 'Latest from Brad' / 'Follow the ideas, reactions and stories shaping the next conversation.'
  heading: 'From the public record',
  text: 'Recent posts, videos and conversations from Brad Barton’s Facebook archive.',
  /**
   * 6–9 карточек, ручная подборка (ТЗ Блок 6). Только посты с датой и ссылкой на оригинал.
   * Пока пусто — показывается одна карточка со ссылкой на профиль Facebook.
   */
  // Ручная подборка по ТЗ (Блок 6), 25.09.2026: только посты с датой, без политических тем.
  // Даты — по восточному времени США. Пост June 24 (семья) — ждёт согласования клиента.
  items: [
    {
      date: 'September 7, 2026',
      type: 'Video',
      excerpt: '“What an awesome birthday weekend for my Dad spent in Death Valley w/his son & grandson! Trip of a Lifetime… LOUISIANA is back baby!”',
      url: 'https://www.facebook.com/brad.barton.71/posts/pfbid0thfF1gZEdVF54WH5bFApmCfKrVFSusMD4WfuVMbhp8tbySiqLqocRsQZE7zTSphQl',
    },
    {
      date: 'July 16, 2026',
      type: 'Post',
      excerpt: '“Over the years I have found that the surest way to lose in life is to play it safe and never ever enter the game!”',
      url: 'https://www.facebook.com/brad.barton.71/posts/pfbid02Npvyxw2qgs3HoJoxh7hp7zpmyuk9sntSEVxoANF87hwjf6jFCjUhf9EjzNAe5F2xl',
    },
    {
      date: 'July 3, 2026',
      type: 'Post',
      excerpt: '“For things to change in your life, friend, you have to change! … Discipline weighs ounces. Regret weighs tons!”',
      url: 'https://www.facebook.com/brad.barton.71/posts/pfbid02wr9deMTaLsRAMvspD2oqY29tdv7vpuwof7EJ5LS2cByhGbChk1GPoutv9UyH2wA9l',
    },
    {
      date: 'June 24, 2026',
      type: 'Photo',
      excerpt: '“This lady has stuck w/me through the crazy hours of coaching… Happy Anniversary Kris!”',
      url: 'https://www.facebook.com/brad.barton.71/posts/pfbid02VyGtKrVmvTqynkBZKhqnZDkhuYR2v2PLK4ty3SnNNBxAmTixrzGSYcLk92urJrrFl',
    },
    {
      date: 'May 10, 2026',
      type: 'Post',
      excerpt: '“ALL the blessings of heaven come to us as believers through the Lord Jesus Christ!”',
      url: 'https://www.facebook.com/brad.barton.71/posts/pfbid02WBPypMGkyL639hE6zQSWTL5Jn4BpjNx3rej9We72g9kPzURoWp9aATTzGp63cXcdl',
    },
    {
      date: 'February 6, 2026',
      type: 'Post',
      excerpt: '“You cannot offend someone. Someone can only get offended!”',
      url: 'https://www.facebook.com/brad.barton.71/posts/pfbid0uz9A5uHXnEwBnHgsYTWtziiEbfSQAEacNH7AUfUeoQwwhjDwQ9jJiGrybfnZ85P9l',
    },
  ] as Post[],
};

export type ArchivePhoto = {
  src: string;
  alt: string;
  /** Подпись под снимком — только то, что видно на кадре, без фактов */
  caption: string;
  /** Размер в сетке: wide — две колонки, tall — две строки */
  size?: 'wide' | 'tall';
  /** object-position, если лицо не по центру */
  pos?: string;
};

export const archive = {
  label: 'Archive',
  heading: 'Photo archive',
  /**
   * Фото от клиента (25.09.2026). Файлы в public/img/archive/.
   * Если массив пуст — блок не показывается.
   */
  items: [
    { src: '/img/archive/outdoors.webp', alt: 'Brad Barton sitting on a sandy slope among pine trees, smiling', caption: 'Outdoors', size: 'wide', pos: '60% 40%' },
    { src: '/img/archive/studio.webp', alt: 'Brad Barton seated on a sofa in a studio, wearing a cap', caption: 'In the studio', size: 'tall' },
    { src: '/img/archive/track.webp', alt: 'Brad Barton smiling in a racing helmet inside a car', caption: 'At the track', pos: '45% 40%' },
    { src: '/img/archive/smile.webp', alt: 'Brad Barton laughing', caption: 'Candid', pos: '40% 35%' },
    { src: '/img/archive/garage.webp', alt: 'Brad Barton talking on camera in a garage with race cars', caption: 'On set' },
    { src: '/img/archive/night-talk.webp', alt: 'Brad Barton laughing during an outdoor conversation at night', caption: 'Conversation' },
    { src: '/img/archive/arrival.webp', alt: 'Brad Barton stepping out of a car', caption: 'On the road', pos: '55% 50%' },
    { src: '/img/archive/wave.webp', alt: 'Brad Barton waving', caption: 'On the move', pos: '55% 40%' },
    { src: '/img/archive/laugh.webp', alt: 'Brad Barton smiling at a table, wearing a cap', caption: 'Between takes', size: 'wide', pos: '70% 40%' },
  ] satisfies ArchivePhoto[],
};

export const personal = {
  label: 'Personal',
  // B: 'Rooted in family' / 'Brad Barton is married to Kristin Mayberry Barton and is a father of three.'
  heading: 'Husband. Dad of three.',
  text: 'Family is part of the foundation behind Brad Barton’s public life and personal perspective.',
};

export const place = {
  label: 'Place',
  // B: 'Louisiana roots. Tennessee present.' / 'Brad Barton is from Gilbert, Louisiana, and lives in Chattanooga, Tennessee.'
  heading: 'From Gilbert, Louisiana. Based in Chattanooga, Tennessee.',
  text: 'Two places that frame Brad Barton’s personal story and public perspective.',
  from: { city: 'Gilbert', state: 'Louisiana', abbr: 'LA' },
  now: { city: 'Chattanooga', state: 'Tennessee', abbr: 'TN' },
};

export const follow = {
  label: 'Follow',
  // B: 'Stay connected' / 'Follow new videos, updates and public conversations across Brad Barton’s channels.'
  heading: 'Follow the conversation',
  text: 'Find Brad Barton on Facebook, Rumble, Telegram and YouTube.',
};

export const contact = {
  label: 'Contact',
  // B: 'Keep the conversation going' / 'For media requests, interviews or partnership ideas, connect with Brad Barton through his public channels.'
  heading: 'Have a question or an invitation?',
  text: 'Reach out through the official social channels for media, speaking and collaboration inquiries.',
  /**
   * Адрес обработчика формы (Formspree / Web3Forms / свой). Пока пусто — формы нет,
   * только кнопки на каналы. Email на сайте не публикуем (ТЗ Блок 10).
   */
  formEndpoint: '',
};

export const footer = {
  note: 'Official channels: Facebook, Rumble, Telegram and YouTube.',
};
