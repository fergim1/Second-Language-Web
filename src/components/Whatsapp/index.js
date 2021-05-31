import React from "react";
import { Whatsapp , IconWhatsapp} from './WhatsappElements';

export const WhatsappButton = () => {
  return (
    <>
      <Whatsapp
        href='https://wa.me/5491164838366'
        target="_blank"
      >
        <IconWhatsapp/>
      </Whatsapp>
    </>
  );
};
