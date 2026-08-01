import { roomDetailsData } from './rooms.data'

export const stayPageData = {
  eyebrow: 'Rooms',
  title: 'Rooms',
  description:
    'Restful sharing rooms and villa stays for couples, families, friends, and larger groups visiting Sakleshpur.',
  detailsLabel: 'Room Details',
  infoLabels: {
    size: 'Guests',
    bed: 'Beds',
    bathroom: 'Bath',
  },
  facilities: {
    titleLines: ['Tamohra Resort', 'facilities & services'],
    items: [
      { label: 'Swimming Pool', icon: 'pool' },
      { label: 'Buffet Meals', icon: 'restaurant' },
      { label: 'Estate Treks', icon: 'trek' },
      { label: 'Rope Activities', icon: 'rope' },
      { label: 'Campfire Music', icon: 'events' },
      { label: 'Banquet Hall', icon: 'banquet' },
      { label: 'Fresh Linens', icon: 'linens' },
    ],
  },
  rooms: roomDetailsData.rooms,
}
