import { bar_menus } from '../utils/bar_menus'

import BarMenuStyles from '../styles/BarMenu.module.css'

function BarMenu({ barId }: { barId: string }) {
  const menu = bar_menus[barId] || []
  return (
    <div className={BarMenuStyles.barmenu_wrapper}>
      {menu.map((item: { drink: string; price: number }, index: number) => (
        <div key={index}>
          {item.drink} - ${item.price}
        </div>
      ))}
    </div>
  )
}
export default BarMenu
