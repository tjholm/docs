import { BoxGrid } from './BoxGrid'

const resources = [
  {
    href: '/resources/examples',
    name: 'Examples',
    description: 'Featured video, Official GitHub examples and more.',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/resources/faq',
    name: 'Frequency Asked Questions',
    description:
      'Find answers to commonly asked questions about Nitric. Discover valuable insights, practical tips, and solutions to common challenges.',
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
]

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <BoxGrid boxes={resources} />
    </div>
  )
}
