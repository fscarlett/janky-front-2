export const destinations: {
  [key: string]: {
    name: string
    category: string
    description: string
    longDescription?: string
  }
} = {
  'store-sunset': {
    name: "Alvin's Guitars",
    category: 'store',
    description: 'famous vintage gear store on Sunrise Blvd',
    longDescription:
      "Founded by a real chipmunk in 1965, it just doesn't get any realer than Alvin's. That rather short and decrepit guy sizing up the Les Paul Jr on the back wall is famous, bro. Do not embarrass yourself.",
  },
  'store-figueroa': {
    name: 'Retro Music',
    category: 'store',
    description: 'indie-famous used gear store on Figueroa St',
  },
  'store-alley': {
    name: 'Gunther the Shady Gear Dude',
    category: 'store',
    description:
      'A super shady Aussie guy who wanders around in a messed up Range Rover',
  },
  'store-corporate': {
    name: 'Pro Gear Center',
    category: 'store',
    description:
      'huge corporate music store in Hollywood that you say you never go to',
  },
  'bar-slbvd': {
    name: 'Cloudland',
    category: 'club',
    description: '300 capacity club on Golden Lake Ave',
  },
  'bar-sunset-north': {
    name: 'Sunrise Lounge',
    category: 'club',
    description: '120 capacity bar on Sunrise Blvd',
  },
  'bar-sunset-south': {
    name: 'Whos On First',
    category: 'club',
    description: 'dive bar next to the stadium entrance by downtown',
  },
  'bar-dtla': {
    name: 'The Site',
    category: 'club',
    description: 'disgusting punk club in the heart of skid row DTLA',
  },
  'janky-coffee': {
    name: 'Janky, Coffee of Champions',
    category: 'coffee',
    description: 'coffee shop on Golden Lake Ave',
  },
}
