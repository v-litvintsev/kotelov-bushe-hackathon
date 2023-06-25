import '../Homepage.scss'
import React, { useState } from 'react'
import { Avatar, Button, Menu, Drawer} from 'antd'
import { MenuOutlined } from '@ant-design/icons';


const MenuMobile = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const closeDrawer = () => {
    setVisible(false);
  };
  return (
    <div className="menu">
      <Button
        type="primary"
        onClick={showDrawer}
        icon={<MenuOutlined style={{ color: 'gray', fontSize:49 }} />}
        style={{ backgroundColor: 'transparent', borderColor: 'transparent', width: '49px' }}
      />
      <Drawer
        title="Меню курьера"
        placement="left"
        closable={false}
        onClose={closeDrawer}
        open={visible}
      >
        <Menu mode="vertical">
          <Menu.Item key="1">Все заказы</Menu.Item>
          <Menu.Item key="2">Кошелек</Menu.Item>
          <Menu.Item key="3">Менеджер</Menu.Item>
          <Menu.Item key="4">Настройки</Menu.Item>
        </Menu>
      </Drawer>
    </div>
  )
}

export default MenuMobile
