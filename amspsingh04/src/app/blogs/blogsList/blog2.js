const blog1 = {
  id: 2,
  title: "AMKR - Assistive Mechanism of Knowledge Representation",
  date: "2024-01-30",
  author: "Shourya, Amritansh",
  content: `AMKR are a pair of eyeglasses that can be used by those who experience vision issues, to be able to read text, recognize familiar faces, and perceive the world around them.

We use Raspberry Pi Zero and PiCam V3 as the basis of our product. The main aim for choosing this hardware stack was to keep the costs down to a minimum, at approximately $50. However, the greatest limitations that arose with this were the restricted RAM capacity at 512MB and the presence of a single-core CPU clocked at 1GHz. To overcome this, we had to use the power of the cloud as effectively as possible and create pipelines that would interface the RPi Zero module with the cloud-based models.

Lets delve a bit into how we accomplished the three tasks we had set out to complete:

OCR:
The PiCam V3 captures an image on command, which is then processed to reduce the image size while maintaining quality. This image is passed to the Azure OCR API. The extracted text is then sent to the Azure Text-to-Speech (TTS) API. The resulting voice, which reads the text from the image, is spoken into the headset of the user, connected to the RPi Zero via Bluetooth.

Scene Perception:
Similarly, when the corresponding command is used, the PiCam V3 captures an image, which is processed and sent to the GPT-4V API for scene recognition. The description is passed to the Azure TTS API, and the resulting voice is played into the user’s Bluetooth headset.

Face Recognition:
We implemented face recognition using TensorFlow Lite for Raspberry Pi. The PiCam V3 captures images on command, processes them, and sends them to a cloud-hosted model for face recognition. As we did with a previous project (hostelHub), we checked for facial features and implemented matching logic to determine if the face matches a familiar person. If it does, the recognized individual's identity is conveyed to the user via TTS in the Bluetooth headset. If not, it indicates that the person is unknown.`
};

export default blog1;
