import React from 'react';
import { string } from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
} from 'react-share';
import { DESCRIPTION, HASHTAG, BUTTON_CLASS_NAME, SEPARATOR } from './constants';

const shareButtons = ({ currentUrl }) => {
  return (
    <div className='shareButtonsContainer'>
      <FacebookShareButton
        url={currentUrl}
        quote={DESCRIPTION}
        hashtag={HASHTAG}
        className={BUTTON_CLASS_NAME}
      >
        <FacebookIcon size={36} />
      </FacebookShareButton>

      <TwitterShareButton
        url={currentUrl}
        title={DESCRIPTION}
        hashtag={HASHTAG}
        className={BUTTON_CLASS_NAME}
      >
        <TwitterIcon size={36} />
      </TwitterShareButton>

      <WhatsappShareButton
        url={currentUrl}
        title={DESCRIPTION}
        separator={SEPARATOR}
        className={BUTTON_CLASS_NAME}
      >
        <WhatsappIcon size={36} />
      </WhatsappShareButton>

      <TelegramShareButton
        url={currentUrl}
        title={DESCRIPTION}
        separator={SEPARATOR}
        className={BUTTON_CLASS_NAME}
      >
        <TelegramIcon size={36} />
      </TelegramShareButton>
    </div>
  );
};

shareButtons.propTypes = {
  currentUrl: string,
};

export default shareButtons;
