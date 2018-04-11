import React from 'react';
import logo from './img/logo.png';

const colors = [
  '#EBFAFF', // blue
  '#FFF9E5', // yellow
  '#EDFFFB', // green
  '#FFF0F0', // pink
  '#F2EDFF', // purple
  '#FFF1E5' // orange
];

export const getEntityData = async entityId => {
  try {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://opensea-api.herokuapp.com/asset/0xa6d954d08877f8ce1224f6bfb83484c7d3abf8e9/${entityId}/?format=json`
    );
    const data = await res.json();
    return {
      id: data.token_id,
      name: data.name,
      image_url: data.image_url,
      url: data.external_link,
      color: colors[data.token_id % colors.length]
    };
  } catch (e) {
    return undefined;
  }
};

export const EntityIcon = entityId => {
  return <img src={logo} alt="logo" />
};

export const entityTranslations = {
  commentPlaceholder: 'Moji your story',
  replyPlaceholder: 'Moji your reply',
  noEntitiesError: 'No emojis found',
  entityName: 'Emoji'
};

export const avatarSizes = {
  verySmall: { containerSize: '32px', imgSize: '45px', imgTopOffset: '50%', imgLeftOffset: '50%' },
  small: { containerSize: '44px', imgSize: '60px', imgTopOffset: '55%', imgLeftOffset: '50%' },
  medium: { containerSize: '54px', imgSize: '75px', imgTopOffset: '55%', imgLeftOffset: '50%' },
  large: { containerSize: '64px', imgSize: '90px', imgTopOffset: '55%', imgLeftOffset: '50%' }
};
