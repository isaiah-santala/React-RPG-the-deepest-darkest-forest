import { Item } from '../generators/items'

const allItems = {
  potion: new Item(
    'potion', 
    'A glass bottle full of fizzing red liquid',
    '(will heal some health)',
    'medicine',
    1
  ),
  wand: new Item(
    'wand',
    '...Did this stick just say something?, you feel a powerful energy emanating from the twig',
    '(use in combat to cast a spell)',
    'weapon',
    1
  ),
  book: new Item(
    'book',
    'What unknown knowledge lies within the pages of these leather bindings?, only one way to find out',
    '(will grant additional action points)',
    'education',
    1
  ),
  lint: new Item(
    'lint',
    'Hard to tell if came from a pocket or a belly button',
    '(will not do anything)',
    'useless',
    1
  ),
  boots: new Item(
    'boots',
    'Nothing better than a pair of new boots, You could run fast in these',
    '(use to instantly escape combat)',
    'clothing',
    1
  ),
  fairy: new Item(
    'fairy',
    'A curios little thing. Some say they are good luck, other swear never to trust them. One thing for sure, this little guy is adorable',
    '(fairies are mysterious creatures which may help or harm you according to their whims, use in combat at your own risk)',
    'creature',
    1
  )
}

export { allItems }