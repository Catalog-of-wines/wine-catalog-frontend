import './SideMenu.scss';

export const SideMenu = () => {
  return (
    <div className='side-menu'>
      <div className="side-menu__title">
        <div className="side-menu__title-icon"></div>
        <h3 className='side-menu__title-text'>Фільтри</h3>
      </div>

      <div className='side-menu__filter'>
        <span className='side-menu__filter-text'>Колір</span>
        <div className='side-menu__filter-icon'></div>
      </div>

      <div className='side-menu__filter'>
        <span className='side-menu__filter-text'>Солодкість</span>
        <div className='side-menu__filter-icon'></div>
      </div>

      <div className='side-menu__filter'>
        <span className='side-menu__filter-text'>Країна</span>
        <div className='side-menu__filter-icon'></div>
      </div>
    </div>
  )
}