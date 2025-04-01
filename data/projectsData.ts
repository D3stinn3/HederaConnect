interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Social Media Content Aggregator',
    description: `Our platform aggregates valuable content from various social media platforms into one place. 
    It helps users find well-organized educational content, news, and discussions related to Hedera in one seamless hub.`,
    imgSrc: '/static/images/socials.jpeg',
    href: '#',
  },
  {
    title: 'Hedera AI Agent',
    description: `An AI-powered assistant integrated with Hedera Connect, this agent helps guide users through the platform, 
    answer queries, and assist with various tasks on the site, improving user experience and engagement.`,
    imgSrc: '/static/images/hedera_logo.jpg',
    href: '#',
  },
]

export default projectsData
