import gearList from '../utils/gear_list.json'

import GearMenuStyles from '../styles/GearMenu.module.css'

function GearMenu({ storeId }: { storeId: string }) {
  // TODO: randomize gear and filter by storeId
  console.log('store:', storeId)

  const menu = gearList || []
  return (
    <div className={GearMenuStyles.gearmenu_wrapper}>
      {menu.map((item: { id: string; name: string; price: number }) => (
        <div key={item.id}>
          {item.name} - ${item.price}
        </div>
      ))}
    </div>
  )
}
export default GearMenu
