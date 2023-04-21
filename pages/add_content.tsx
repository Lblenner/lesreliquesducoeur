import { UiFileInputButton } from "@/components/upload";
import axios from "axios";

export default function AddContent() {

  const onChange = async (formData: FormData) => {
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event: any) => {
        console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
      },
    };

    const response = await axios.post('/api/uploads', formData, config);

    console.log('response', response.data);
  };


  return (
    <main>
      <UiFileInputButton
        label="Upload Single File"
        uploadFileName="theFiles"
        onChange={onChange}
      />
    </main>
  )
}
