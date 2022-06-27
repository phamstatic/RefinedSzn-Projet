import React from 'react';
const StickerSection = () => {
    return (
        <>
            <div className="container-fluid bg-black">
                <div className="StickerRow row">
                    <div className="StickerHeader">Stickers</div>
                </div>
                <div className="row align-items-center">
                    <div className="StickerBox col-4">
                        <figure className="">
                            <img className="d-block w-75 p-3 mx-auto"
                            src="https://cdn.discordapp.com/attachments/989767720801304606/990852269895454810/unknown.png"/>
                            <figcaption className="StickerCaption d-flex justify-content-center">Refined Windshield Banner 12"</figcaption>
                            <figcaption className="StickerCaption d-flex justify-content-center">$10.00</figcaption>
                        </figure>
                    </div>
                    <div className="StickerBox col-4">
                        <figure className="">
                            <img className="d-block w-75 p-3 mx-auto"
                            src="https://cdn.discordapp.com/attachments/989767720801304606/990852464456634379/unknown.png"/>
                            <figcaption className="StickerCaption d-flex justify-content-center">Refined Mini Sticker 5"</figcaption>
                            <figcaption className="StickerCaption d-flex justify-content-center">$5.00</figcaption>
                        </figure>
                    </div>
                    <div className="StickerBox col-4">
                        <figure className="">
                            <img className="d-block w-75 p-3 mx-auto"
                            src="https://cdn.discordapp.com/attachments/989767720801304606/990851925425651732/unknown.png"/>
                            <figcaption className="StickerCaption d-flex justify-content-center">Refined Off-White Style Sticker 5"</figcaption>
                            <figcaption className="StickerCaption d-flex justify-content-center">$5.00</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StickerSection;