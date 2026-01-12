import { Category, Product, Catalog, Testimonial, SiteSettings, GalleryImage } from './types';

export const INITIAL_SETTINGS: SiteSettings = {
  whatsapp: '916382488657',
  email: 'hitechupvc@gmail.com',
  facebook: 'https://www.facebook.com/share/1GeNASNguA/',
  instagram: 'https://www.instagram.com/hitechhardwares?igsh=YXVpNHpyeHp2cHdm',
  headOfficePhone: '+91 81224 76567',
  coimbatorePhone: '+91 63817 78251',
  maduraiPhone: '+91 86674 59835',
  adminPhone: '+91 63824 88657',
  heroBanners: [
    'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Banner%201.png',
    'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Banner%202.png',
    'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Banner%203.png'
  ],
  aboutText: 'We, Hi-Tech UPVC Hardwares, are a leading ISO 9001:2015 certified uPVC Hardware provider, with a complete range of uPVC Hardware, Tools, & Accessories, that offers integrated innovative solutions in the area of uPVC Hardware products.',
  aboutImage: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/About%20us%20primary.png',
  aboutTextSecondary: "Over the past few years, we have shown tremendous growth towards of range of uPVC products and based on our prestigious client's request, we have started our own manufacturing towards the usage of uPVC and Aluminum Windows & Doors. We are also an authorized distributor for SIEGENIA hardware and WACKER Silicone products.",
  aboutImageSecondary: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/About%20us%20Second.png',
  strengthImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  contactImage: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Contact%20us.png',
  headerLogo: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/057f20e57dc2cc9f1ecf03e02b74b039c9eb9008/Assets/Hitech%20logo.svg', 
  footerLogo: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/057f20e57dc2cc9f1ecf03e02b74b039c9eb9008/Assets/Hitech%20logo.svg',
  poweredByLogo: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/e6fff671b179d6750fc0bb7b49b4041165679de4/Assets/Group%20107081%201%20(3).svg',
  strengths: [
    { id: '1', iconName: 'Heart', text: 'Generosity in the market.' },
    { id: '2', iconName: 'ShieldCheck', text: 'Ethical business dealings.' },
    { id: '3', iconName: 'Users', text: 'A competent team for delivery.' },
    { id: '4', iconName: 'Globe', text: 'Wide range of network distribution.' },
    { id: '5', iconName: 'BadgePercent', text: 'Most competitive pricing.' },
  ]
};

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'cat-color-handles', name: 'Colour Door Handles', image: 'https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/Sliding%20Door%20Set%20-%20D%20Handle.png' },
  { id: 'cat-cylinders', name: 'Cylinders', image: 'https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/Cylinder.png' },
  { id: 'cat-touch-locks', name: 'Touch locks', image: 'https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/Touch%20locks.png' },
  { id: 'cat-friction-stays', name: 'FrictionStays', image: 'https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/FrictionStays.png' },
  { id: 'cat-hinges', name: 'Hinges', image: 'https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/Hinges.png' },
  { id: 'cat-machines', name: 'Machines', image: 'https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/Machines.png' },
  { id: 'cat-axis', name: 'Axis', image: 'https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/Axis.png' },
  { id: 'cat-sliding-espags', name: 'Sliding espags', image: 'https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/Sliding%20espags.png' },
  { id: 'cat-screws', name: 'Drilling Screws MS & SS', image: 'https://github.com/liffto/hitechupvc-ok/blob/main/assets/Frame%20Fixing%20Fasteners.png?raw=true' },
  { id: 'cat-ss-mesh', name: 'SS Mesh', image: 'https://github.com/liffto/hitechupvc-ok/blob/main/assets/SS%20Mesh.png?raw=true' },
  { id: 'cat-casement-esparg', name: 'Casement esparg 22mm Back set (PR)', image: 'https://github.com/liffto/hitechupvc-ok/blob/main/assets/Casement%20esparg%2022mm%20Back%20set.png?raw=true' },
  { id: 'cat-casement-handle', name: 'CASEMENT HANDLE', image: 'https://github.com/liffto/hitechupvc-ok/blob/main/assets/Casement%20Handle%20Spindle.png?raw=true' },
  { id: 'cat-plastic', name: 'Plastic Items', image: 'https://github.com/liffto/hitechupvc-ok/blob/main/assets/Fastner%20Cap.png?raw=true' },
  { id: 'cat-sliding-handles', name: 'Sliding Handles', image: 'https://github.com/liffto/hitechupvc-ok/blob/main/assets/Popup%20Handle%20Slim.png?raw=true' },
  { id: 'cat-tools', name: 'Tools', image: 'https://github.com/liffto/hitechupvc-ok/blob/main/assets/Gasket%20Mesh%20Tool.png?raw=true' },
  { id: 'cat-bathroom-lock', name: 'Bathroom Door Lock set', image: 'https://github.com/liffto/hitechupvc-ok/blob/main/assets/Bathroom%20Door%20Lock.png?raw=true' },
];

export const INITIAL_PRODUCTS: Product[] = [
  // Existing Products
  {
    id: 'prod-color-d-handle',
    categoryId: 'cat-color-handles',
    name: 'Sliding Door Set - D Handle',
    description: 'Premium coloured door handles for sliding systems. Durable and aesthetically pleasing finishes with high-quality coating.',
    images: [
      'https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/Sliding%20Door%20Set%20-%20D%20Handle.png',
      'https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/Dis%201.png'
    ]
  },
  {
    id: 'prod-cyl-1',
    categoryId: 'cat-cylinders',
    name: 'High Security Cylinder',
    description: 'Double sided cylinder with computer keys for enhanced security. Available in multiple lengths and finishes.',
    images: ['https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/Cylinder.png']
  },
  {
    id: 'prod-tl-1',
    categoryId: 'cat-touch-locks',
    name: 'Window Touch Lock',
    description: 'Easy-to-use touch locks for sliding windows. Smooth operation and modern design for standard uPVC profiles.',
    images: ['https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/Touch%20locks.png']
  },
  {
    id: 'prod-fs-1',
    categoryId: 'cat-friction-stays',
    name: 'Casement Friction Stay',
    description: 'Heavy duty stainless steel friction stays for casement windows. Supports high weights and ensures smooth operation.',
    images: ['https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/FrictionStays.png']
  },
  {
    id: 'prod-h-1',
    categoryId: 'cat-hinges',
    name: 'Premium 3D Hinge',
    description: 'Adjustable door hinges for uPVC systems. High durability and weight bearing capacity with multiple adjustment axes.',
    images: ['https://raw.githubusercontent.com/kavutham99raj-art/hitechupvcimg/main/Hinges.png']
  },

  // Drilling Screws MS & SS
  {
    id: 'prod-fasteners',
    categoryId: 'cat-screws',
    name: 'Frame Fixing Fasteners',
    description: 'Frame Fixing Fasteners : 8x60, 8x80, 8x100, 10x100, 10x120, 10x140, 10x160',
    images: ['https://github.com/liffto/hitechupvc-ok/blob/main/assets/Frame%20Fixing%20Fasteners.png?raw=true']
  },
  {
    id: 'prod-csk-drilling',
    categoryId: 'cat-screws',
    name: 'CSK Self Drilling Screws',
    description: 'CSK Self Drilling Screws 3.9x16, 3.9x19, 3.9x25, 3.9x32, 3.9x38, 4.2x50, 4.2x60, 4.2x75',
    images: ['https://github.com/liffto/hitechupvc-ok/blob/main/assets/CSK%20Self%20Drilling%20Screws.png?raw=true']
  },
  {
    id: 'prod-pan-drilling',
    categoryId: 'cat-screws',
    name: 'PAN Head Self Drilling Screws',
    description: 'PAN Head Self Drilling Screws 4x16, 4x19, 4x25, 4x32, 4x38, 4x50, 4x60, 4x75',
    images: ['https://github.com/liffto/hitechupvc-ok/blob/main/assets/PAN%20Head%20Self%20Drilling%20Screws.png?raw=true']
  },
  {
    id: 'prod-pan-tapping',
    categoryId: 'cat-screws',
    name: 'PAN Head Self Tapping Screws',
    description: 'PAN Head Self Tapping Screws 4x13, 4x16, 4x19, 4x25, 4x32, 4x38, 4x50, 4x60, 4x75',
    images: ['https://github.com/liffto/hitechupvc-ok/blob/main/assets/PAN%20Head%20Self%20Drilling%20Screws%20(1).png?raw=true']
  },

  // SS Mesh
  {
    id: 'prod-alum-mesh',
    categoryId: 'cat-ss-mesh',
    name: 'Aluminium Mesh',
    description: 'Aluminium Mesh 2.5x100 (250 Feet)\nAluminium Mesh 3.0x 100 (300 Feet)\nAluminium Mesh 3.5x100 (350 Feet)\nAluminium Mesh 4.0x100 (400 Feet)\nAluminium Mesh 5.0x100 (500 Feet)\nAluminium Mesh 14x14 - 3.0x100 (300 Feet)\nAluminium Mesh 14x14 - 4.0x100 (400 Feet)\nAluminium Mesh 14x14 - 5.0x100 (500 Feet)\nAluminium Mesh Black 18x16 - 3.0x100 (300 Feet)\nAluminium Mesh Black 18x16 - 4.0x100 (400 Feet)\nAluminium Mesh Black 18x16 - 5.0x100 (500 Feet)',
    images: ['https://github.com/kavutham99raj-art/hitechupvcimg/blob/main/image%20124.png?raw=true']
  },
  {
    id: 'prod-nylon-mesh',
    categoryId: 'cat-ss-mesh',
    name: 'Nylon Mesh',
    description: 'Nylon Mesh 3.0x100 (300 Feet)\nNylon Mesh 4.0x100 (400 Feet)\nNylon Mesh 5.0x100 (500 Feet)',
    images: ['https://github.com/kavutham99raj-art/hitechupvcimg/blob/main/Nylon%20Mesh%20(1).png?raw=true']
  },

  // New Category Products
  {
    id: 'prod-casement-esp-1',
    categoryId: 'cat-casement-esparg',
    name: 'Casement esparg 22mm Back set (PR)',
    description: 'High quality casement espag with 22mm backset. Suitable for various casement window profiles.',
    images: ['https://github.com/liffto/hitechupvc-ok/blob/main/assets/Casement%20esparg%2022mm%20Back%20set.png?raw=true']
  },
  {
    id: 'prod-casement-hand-1',
    categoryId: 'cat-casement-handle',
    name: 'CASEMENT HANDLE Spindle',
    description: 'Standard casement handle with durable spindle for secure window operation.',
    images: ['https://github.com/liffto/hitechupvc-ok/blob/main/assets/Casement%20Handle%20Spindle.png?raw=true']
  },
  {
    id: 'prod-plastic-items',
    categoryId: 'cat-plastic',
    name: 'uPVC Plastic Accessories',
    description: 'Complete range of plastic components including Fastener Caps, Drainage Caps, and more.',
    images: ['https://github.com/liffto/hitechupvc-ok/blob/main/assets/Fastner%20Cap.png?raw=true']
  },
  {
    id: 'prod-sliding-hand-slim',
    categoryId: 'cat-sliding-handles',
    name: 'Popup Handle Slim',
    description: 'Modern slim design popup handles for sliding doors and windows.',
    images: ['https://github.com/liffto/hitechupvc-ok/blob/main/assets/Popup%20Handle%20Slim.png?raw=true']
  },
  {
    id: 'prod-tool-mesh',
    categoryId: 'cat-tools',
    name: 'Gasket Mesh Tool',
    description: 'Professional grade installation tools for gaskets and mesh systems.',
    images: ['https://github.com/liffto/hitechupvc-ok/blob/main/assets/Gasket%20Mesh%20Tool.png?raw=true']
  },
  {
    id: 'prod-bath-lock',
    categoryId: 'cat-bathroom-lock',
    name: 'Bathroom Door Lock',
    description: 'Privacy lock set specially designed for uPVC bathroom doors. Water resistant and durable.',
    images: ['https://github.com/liffto/hitechupvc-ok/blob/main/assets/Bathroom%20Door%20Lock.png?raw=true']
  }
];

export const INITIAL_CATALOGS: Catalog[] = [
  { 
    id: 'c1', 
    name: 'Hi-Tech UPVC Hardwares Main Catalog', 
    image: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Catalog%201.png', 
    fileUrl: 'https://drive.google.com/file/d/1HZBuGxOFmFEtDgxxCftNR-UGaHEP_4CH/view?usp=sharing' 
  },
  { 
    id: 'c2', 
    name: 'Lesso UPVC Window & Doors Technical Manual', 
    image: 'https://raw.githubusercontent.com/liffto/hitechupvchardwares-web/main/Assets/Catalog%202.png', 
    fileUrl: 'https://drive.google.com/file/d/1NSeKBA34SGDmVCW6b0g039Az-DVwJ2PH/view?usp=sharing' 
  },
  { 
    id: 'c3', 
    name: 'Gemplast Technical Manual', 
    image: 'https://github.com/liffto/hitechupvchardwares-web/blob/main/Assets/Catalog%203.png?raw=true', 
    fileUrl: 'https://drive.google.com/file/d/1ulfzQF5JbhSFnHebL8nL8YhXQkQowp04/view?usp=sharing' 
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { 
    id: 't1', 
    name: 'John Doe', 
    company: 'BuildSmart Solutions', 
    content: 'Hi-Tech UPVC Hardware is our primary supplier. Their items are most reliable and delivery is always on time.', 
    avatar: 'https://i.pravatar.cc/150?u=john' 
  }
];

export const INITIAL_GALLERY: GalleryImage[] = [
  { 
    id: 'g1', 
    url: 'https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-6/611704561_122278958324191340_2815873346386359179_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KCSNBlL_WJAQ7kNvwETaU4o&_nc_oc=Admcy32yhFKdrd7Nde4FXthjyttUEVBKkOo84HVlomDWvXdFVcfnGkiCz5gmcWaft3dfs8GsGdC6Gbebb4alxf7G&_nc_zt=23&_nc_ht=scontent.fmaa2-2.fna&_nc_gid=ioEkdld_JcLqMvaqY9gVcA&oh=00_Afq0C9zJaUqLHqOlevjj6Sy573q_Vby8RrLFab7ixRyxlw&oe=696A0D66', 
    caption: 'Project Installation 1' 
  },
  { 
    id: 'g2', 
    url: 'https://scontent.fmaa2-4.fna.fbcdn.net/v/t39.30808-6/581819970_122270654840191340_3012637521215122912_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TkdzqZUDhhEQ7kNvwHghVkN&_nc_oc=Adm1RLhW5LC44MYoUKpoVshgzTll5AdjZ0uYf2BPzMTLGscuhUH9Mf4oVswlTs6npT3yM4_7hixia7gCYwN5makz&_nc_zt=23&_nc_ht=scontent.fmaa2-4.fna&_nc_gid=d-i6VEWQkc04xs7fPXvZ-Q&oh=00_Afr3q18sx4fKb1_tPU_eQqTui0Um9DVpgknoKf45eA45DQ&oe=6969FBC1', 
    caption: 'Project Installation 2' 
  },
  { 
    id: 'g3', 
    url: 'https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/561351170_122269443122191340_2499734761882287735_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NDJFM9kXuQIQ7kNvwEjodbf&_nc_oc=Adlg-QflMLlAyhGGsVxq_eI5taa6m-IjiYLsaJGEo_FYhmmbchNzVFwNd1re29WGi4L1E8OT7hzO7B8MS2Wt3rPq&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=3VI1odAvMoQM14m9WsAoUw&oh=00_AfqJIImUBbtDp5_WMtEU-YZp4m_LIfwgSfrtSjCOB5qtXA&oe=696A2B07', 
    caption: 'Project Installation 3' 
  },
  { 
    id: 'g4', 
    url: 'https://scontent.fmaa2-4.fna.fbcdn.net/v/t39.30808-6/571018410_122268195416191340_4537817598249533408_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wF4ckQO_f-YQ7kNvwE-SUK-&_nc_oc=AdkEt-28AG8n1y0Xdq6IxOnKVVzdjtb0QfEaS0nO9IxMp1md8uJeEzaJyhW8wkpUt6pok_a3g9mE1FrlAJM7A9GF&_nc_zt=23&_nc_ht=scontent.fmaa2-4.fna&_nc_gid=sHNHVhWKBHUZposaW0A8OA&oh=00_Afqpix3BI4It8fLpM-zzoJ-6BdnG5JBCdo5Vf14PA3zuQg&oe=696A0717', 
    caption: 'Project Installation 4' 
  },
  { 
    id: 'g5', 
    url: 'https://scontent.fmaa2-4.fna.fbcdn.net/v/t39.30808-6/561060053_122266300520191340_5041139289223459133_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GgxNe-Z7fY0Q7kNvwEa5FsA&_nc_oc=AdloDSFxHMnEW8_Aj2oZWOPvNa5TFM-UHduM3mhnj1rfsOpTuf-Uhwx6ye07xzF415N27qoqfbAOrWmTiJwwWC0F&_nc_zt=23&_nc_ht=scontent.fmaa2-4.fna&oh=00_Afqpix3BI4It8fLpM-zzoJ-6BdnG5JBCdo5Vf14PA3zuQg&oe=696A0717', 
    caption: 'Project Installation 5' 
  },
  { 
    id: 'g6', 
    url: 'https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-6/557628752_122265130232191340_8596009179665529991_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8KVP_onSWJoQ7kNvwHqTq03&_nc_oc=AdkpdOieGfoUFb3vYqITKuyoFYo7vjynhRZrVPHwE5EJcOr9bPPFKIgN1hGoJlZNdDLzfmqd_N07IhkpI6mwDR0W&_nc_zt=23&_nc_ht=scontent.fmaa2-2.fna&_nc_gid=8amNKzjtZBTmyl-LgF03Tw&oh=00_AfqjigJdZnsN4O8toJxWLvkIS0-WFKfOhEjGe2BFq-4KjQ&oe=696A1AB8', 
    caption: 'Project Installation 6' 
  },
  { 
    id: 'g7', 
    url: 'https://scontent.fmaa2-2.fna.fbcdn.net/v/t39.30808-6/554865625_122263579808191340_1124405873340469803_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sBtHXPCTlAsQ7kNvwEhIDUB&_nc_oc=Adl3gZnK-TWsCiIxUphivyCZzwJmskZdrJjKdl38pPt7zH5squofKhyM3gTk8P0wsaFJLP71_HE70lgWXyVwzqc4&_nc_zt=23&_nc_ht=scontent.fmaa2-2.fna&_nc_gid=XIHGJsqdZSk0Z6sFP36p2w&oh=00_Afr8cXIrl_a3h1U5XyyEwC-hXgNBPn4A92__ImIaO6BynA&oe=696A21C0', 
    caption: 'Project Installation 7' 
  },
  { 
    id: 'g8', 
    url: 'https://scontent.fmaa2-3.fna.fbcdn.net/v/t39.30808-6/555528699_122263406222191340_2215596538435406941_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LGXP47xhuFYQ7kNvwF2KjBy&_nc_oc=AdmrKR32VQ8Iv6nvHtQzljgfqhwJIMtuiB_ZNqOct0P58vRe5cED74V5jHsbg59iALTXOjVQjzoG2ZeWYqZk6qsk&_nc_zt=23&_nc_ht=scontent.fmaa2-3.fna&_nc_gid=pLJdUBlFFdmmcgIn9gj5og&oh=00_AfrMl3EL95MYY2oFe0ffO9K51LamiN0Us6E_dggpyznOtQ&oe=696A17D4', 
    caption: 'Project Installation 8' 
  },
  { 
    id: 'g9', 
    url: 'https://scontent.fmaa2-4.fna.fbcdn.net/v/t39.30808-6/551644681_122262963080191340_4140544896624088709_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=G8ytQXboVtkQ7kNvwFL_xMC&_nc_oc=Adm-73gW4GVz73jdAYodDeRqCeKiVdOqHSa0xwdsMrgkhIUEALonWiUUNSwkCXBXRwnni4iFCHXI8eIR6gmmJX0R&_nc_zt=23&_nc_ht=scontent.fmaa2-4.fna&_nc_gid=qLTYJ-_UdSeoZSYU6-mDJg&oh=00_AfrqMsqxUgzoAJV7819t23N8xLbH4Ezo3VoEQmkbvxBNRQ&oe=696A0D4F', 
    caption: 'Project Installation 9' 
  },
  { 
    id: 'g10', 
    url: 'https://scontent.fmaa2-1.fna.fbcdn.net/v/t39.30808-6/540967064_122259391016191340_9080606243427512067_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3d7mWfDrm9wQ7kNvwFmEPCs&_nc_oc=AdnarDCV9QAAEyKzHLodbFmqWNyPcs_cPtT0Va5UCi6DOgo7pyJ0my9gc5KhIXr4ugMPYAB1kLpWR4tMi6pM1jiB&_nc_zt=23&_nc_ht=scontent.fmaa2-1.fna&_nc_gid=nWFhALmmw4r0wQFbbfOiaQ&oh=00_Afr_xqFoo2uBAtEN1aA5knRPxhh7XB0oV4dZHk53ZFu7Sw&oe=696A0C1E', 
    caption: 'Project Installation 10' 
  }
];