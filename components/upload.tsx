import axios from "axios";
import React, { useRef } from "react";

/* export interface IProps {
    acceptedFileTypes?: string;
    allowMultipleFiles?: boolean;
    label: string;
    onChange: (formData: FormData) => void;
    uploadFileName: string;
}

export const UiFileInputButton: React.FC<IProps> = (props) => {



    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files?.length) {
            return;
        }

        const formData = new FormData();

        Array.from(event.target.files).forEach((file) => {
            formData.append(event.target.name, file);
        });

        props.onChange(formData);

        formRef.current?.reset();
    };

    return (
        <form ref={formRef}>
            <button type="button" onClick={onClickHandler}>
                {props.label}
            </button>
            <input
                accept={props.acceptedFileTypes}
                multiple={props.allowMultipleFiles}
                name={props.uploadFileName}
                onChange={onChangeHandler}
                ref={fileInputRef}
                style={{ display: 'none' }}
                type="file"
            />
        </form>
    );
};

UiFileInputButton.defaultProps = {
    acceptedFileTypes: '',
    allowMultipleFiles: false,
}; */

import { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Point, Area } from "react-easy-crop/types";

export interface UProps {
    onChange: (formData: FormData) => void;
}

const Upload = (props: UProps) => {
    const formRef = React.useRef<HTMLFormElement | null>(null);
    const [img, setImg] = useState<string | null>(null)
    const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const onCropComplete = useCallback(
        (croppedArea: Area, croppedAreaPixels: Area) => {
            console.log(croppedArea, croppedAreaPixels);
        },
        []
    );



    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files?.length) {
            return;
        }

        const formData = new FormData();

        setImg(URL.createObjectURL(event.target.files[0]))

        Array.from(event.target.files).forEach((file) => {
            formData.append(event.target.name, file);
        });

        //props.onChange(formData);
        //formRef.current?.reset();
    };

    return (
        <div className="w-[200px]" >
            <form ref={formRef}>
                <input
                    accept=''
                    multiple={false}
                    name="theFiles"
                    onChange={onChangeHandler}
                    type="file"
                />
            </form>
            {img == null ? <div></div> : <Cropper
                image={img}
                crop={crop}
                zoom={zoom}
                aspect={4 / 3}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                style={{ containerStyle: { width: 200, height: 200, position: "relative" } }}
            />}
            Ecrivez le texte
            <input></input>
            <button>Envoyer</button>
        </div>
    );
};

export default Upload;
