import {
  CldUploadWidget,
  type CldUploadWidgetProps,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { env } from "~/env";

export enum ResourceType {
  IMAGE = "image",
  PDF = "pdf",
}

export type OnSuccessUpload = (
  result: CloudinaryUploadWidgetResults & {
    info?: { secure_url: string; public_id: string; original_filename: string };
  },
) => void;

type Props = {
  className?: string;
  children: React.ReactNode;
  folder: string;
  resourceType: ResourceType;
  onSuccess:
    | CldUploadWidgetProps["onSuccess"]
    | OnSuccessUpload
    | (CldUploadWidgetProps["onSuccess"] & OnSuccessUpload);
  disabled?: boolean;
};

export function UploadButton({
  folder,
  resourceType,
  onSuccess,
  className,
  children,
  disabled,
}: Props) {
  return (
    <CldUploadWidget
      uploadPreset={env.NEXT_PUBLIC_UPLOAD_PRESET}
      options={{
        sources: ["local"],
        multiple: false,
        folder,
        resourceType:
          resourceType === ResourceType.IMAGE ? resourceType : undefined,
        clientAllowedFormats:
          resourceType === ResourceType.PDF ? [resourceType] : undefined,
      }}
      onSuccess={onSuccess as CldUploadWidgetProps["onSuccess"]}
    >
      {({ open }) => (
        <button
          type="button"
          className={className}
          onClick={() => open()}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </CldUploadWidget>
  );
}
