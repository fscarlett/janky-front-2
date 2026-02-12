import gearList from '../utils/gear_list.json'

import GearMenuStyles from '../styles/GearMenu.module.css'

function GearMenu({ storeId }: { storeId: string }) {
  // TODO: different sets of gear per storeId
  console.log('store:', storeId)

  const menu = gearList || []
  const menuQty = menu.length

  // Generate 3 random unique indexes
  const randomIndexes: number[] = []
  while (randomIndexes.length < 3 && randomIndexes.length < menuQty) {
    const randomIndex = Math.floor(Math.random() * menuQty)
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex)
    }
  }

  return (
    <>
      <h3>today's selection</h3>
      <div className={GearMenuStyles.gearmenu_wrapper}>
        {randomIndexes.map((index: number) => {
          const item = menu[index]
          return (
            <div key={item.id}>
              {item.name} - ${item.price}
            </div>
          )
        })}
      </div>

      {/* <div className={GearMenuStyles.gearmenu_wrapper}>
        {menu.map((item: { id: string; name: string; price: number }) => (
          <div key={item.id}>
            {item.name} - ${item.price}
          </div>
        ))}
      </div> */}
    </>
  )
}
export default GearMenu
