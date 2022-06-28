import React from 'react';
const Placeholder = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-center">
                <figure>
                    <figcaption className="StickerCaption d-flex justify-content-center">---</figcaption>
                    <img className="d-block w-75 p-3 mx-auto"
                        src="https://www.technoloxy.com/wp-content/uploads/2020/08/Valorant-Dead.png" />
                    <figcaption className="StickerCaption d-flex justify-content-center">empty portion, will add an info section later</figcaption></figure>
            </div>
        </>
    );
}

export default Placeholder;