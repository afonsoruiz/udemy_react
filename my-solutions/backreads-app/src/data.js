import img1Tour from './images/tour-1.jpeg'
import img2Tour from './images/tour-2.jpeg'
import img3Tour from './images/tour-3.jpeg'
import img4Tour from './images/tour-4.jpeg'

export const pageLinks = [
    { id: 1, href: '#home', name: 'home' },
    { id: 2, href: '#about', name: 'about' },
    { id: 3, href: '#services', name: 'services' },
    { id: 4, href: '#tours', name: 'tours' },
]

export const socialLinks = [
    { id: 1, href: 'https://www.facebook.com', name: 'fab fa-facebook' },
    { id: 2, href: 'https://www.twitter.com', name: 'fab fa-twitter' },
    { id: 3, href: 'https://www.squarespace.com', name: 'fab fa-squarespace' },
]

export const services = [
    { id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
    { id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
    { id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.' },
]

export const tours = [
    {
        id: 1, title: 'Tibet Adventure', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        date: 'august 26th, 2020', image: img1Tour, country: 'china', duration: 6, price: 2100
    },
    {
        id: 2, title: 'best of java', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        date: 'october 1th, 2020', image: img2Tour, country: 'indonesia', duration: 1, price: 1400
    },
    {
        id: 3, title: 'explore hong kong', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        date: 'september 15th, 2020', image: img3Tour, country: 'hong kong', duration: 8, price: 5000
    },
    {
        id: 4, title: 'kenya highlights', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
        date: 'december 5th, 2019', image: img4Tour, country: 'kenya', duration: 0, price: 3300
    },
]
