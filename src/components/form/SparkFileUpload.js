"use client";
import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { registerPlugin, FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default function SparkFileUpload({
  name,
  label,
  required,
  placeholder,
  validation,
}) {
  const { control, formState } = useFormContext();
  const { errors } = formState;
  const [files, setFiles] = useState([]);

  return (
    <>
      {required ? (
        <span style={{ color: "red" }}>*</span>
      ) : null}
      {label ? (
        <p style={{ fontSize: "16px", color: "gray" }} className="mb-0">
          <small>{label}</small>
        </p>
      ) : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FilePond
            files={files}
            onupdatefiles={(fileItems) => {
              setFiles(fileItems.map((fileItem) => fileItem.file));
              field.onChange(fileItems.map((fileItem) => fileItem.file));
            }}
            allowMultiple={true}
            maxFiles={1}
            server="/api/file"
            name={name}
            imagePreviewHeight={100}
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
        )}
      />
      {errors[name] && (
        <p style={{ color: "red" }}>{errors[name].message}</p>
      )}
    </>
  );
}
