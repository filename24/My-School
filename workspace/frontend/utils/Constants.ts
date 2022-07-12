export const exampleUser = {
  name: '__filename',
  email: 'madegod@kakao.com',
  imageUrl: '/images/filename.png',
};

export const navigation = [
  { name: 'Хуваарь', href: '/huvaari', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Бидний тухай', href: '#', current: false },
  { name: 'Dashboard', href: '#', current: true },
];

export const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

export const metaData = {
  url: process.env.NODE_ENV === 'production' ? 'https://anhgerel.com' : 'http://localhost:3000',
  title: 'My School',
  description: 'My School coming soon...',
  socials: {
    mail: "madegod@kakao.com",
    facebook: "https://www.facebook.com/dev.filename",
    github: "https://github.com/ankhgerel",
    twitter: "https://twitter.com/",
    banner: '/images/filename.png',
  }
}