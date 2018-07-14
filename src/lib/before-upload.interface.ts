export interface UploadMetadata {
  file: File;
  abort: boolean;
  url?: string;
  formData?: { [name: string]: any };
}
