import React, { useRef, useState } from "react";
import CropperJS from "react-cropper";
import PropTypes from 'prop-types';

import "cropperjs/dist/cropper.css";

import './Cropper.scss'

const Cropper = ({ src, name }) => {
    const cropperRef = useRef(null);
    const [croppedSrc, setCroppedSrc] = useState(src);
    let timer = null;
    const onCrop = () => {
      const imageElement = cropperRef?.current;
      const cropper = imageElement?.cropper;
  
      if (timer) {
          clearTimeout(timer);
      }
      timer = setTimeout(() => setCroppedSrc(cropper.getCroppedCanvas().toDataURL('image/jpeg', 1.0)), 500);
    };
    const cropperRef2 = useRef(null);
    const [croppedSrc2, setCroppedSrc2] = useState(src);
    let timer2 = null;
    const onCrop2 = () => {
      const imageElement2 = cropperRef2?.current;
      const cropper = imageElement2?.cropper;
  
      if (timer2) {
          clearTimeout(timer2);
      }
      timer2 = setTimeout(() => setCroppedSrc2(cropper.getCroppedCanvas().toDataURL('image/jpeg', 1.0)), 500);
    };

    return (
        <div className="Cropper">
            <CropperJS
                src={src}
                // Cropper.js options
                aspectRatio={17 / 13}
                guides={false}
                crop={onCrop}
                ref={cropperRef}
                style={{ width: '50%' }}
                dragMode="none"
                viewMode={2}
            />
            <CropperJS
                src={src}
                // Cropper.js options
                aspectRatio={11 / 13}
                guides={false}
                crop={onCrop2}
                ref={cropperRef2}
                style={{ width: '50%' }}
                dragMode="none"
                viewMode={2}
            />
            <div className="Cropper__output">
                <a href={croppedSrc} download={name}>
                    <img src={croppedSrc} download={name} />
                </a>
            </div>
            <div className="Cropper__output">
                <a href={croppedSrc2} download={`thumb_${name}`}>
                    <img src={croppedSrc2} download={`thumb_${name}`} />
                </a>
            </div>
        </div>
    );
};

Cropper.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Cropper;
