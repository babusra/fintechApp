import React, { useState } from 'react';
import { Menu } from 'react-native-paper';
import RoundBtn from './RoundBtn';

const Dropdown = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <RoundBtn
          icon={'ellipsis-horizontal'}
          text={'More'}
          onPress={openMenu}
        />
      }>
      <Menu.Item onPress={() => console.log('Statement')} title="Statement" />
    </Menu>
  );
};

export default Dropdown;
