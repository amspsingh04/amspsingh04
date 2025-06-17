const blogs = [{
  id: 1,
  slug:"moral",
  title: "Moral Policing is the Key",
  date: "2020-05-19",
  author: "Shourya",
  content: `The Instagram group that was busted recently had chats that plucked a string which has so often been plucked by news coming out of New Delhi, 
  and which plays to the tune of fear and insecurity. It is not normal and is not humane. 
  The rot is in the house.  
  We need to realize that we are breeding these twisted new ideas and that, if nothing is done now, there will never be a stop.
  
  Where has gone the courtesy and respect for women?  
  Where has gone the extreme high regard for women, which we once had? Was it all 20th century? Do we not need it in the 21st century?
  
  No, we need it more than ever before.
  Our culture, over the course of history, has always, and unfailingly, propagated respect for women. 
  We do not need to look back at our history to understand that this is wrong. It must be conscientious. 
  The unfortunate incident could have been avoided only if they had the knowledge of societal conduct, which can only arise from a proper upbringing, 
  and it is solely up to the parents. Now start moral policing.
  
  The orthodox society will downplay it with “Boys will be boys”, and it will soon be out of our minds. We need to revolt against this archaic thought process 
  if we want to be a nation where peace is eternal and safety omnipresent. Now, it is time that we start doing what is correct and discard what is wrong. 
  
  We, the youth of India, must now come together to make the world a better place. Otherwise, we are collectively lost as a society.`
},
{
  id: 2,
  slug:"AMKR",
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
},
{
  id: 3,
  slug:"BIS-review",
  title: "Biomedical Image Segmentation",
  date: "2025-06-04",
  author: "Shourya Pratap Singh",
  content: 
    <iframe 
              src='/Review_Biomedical_Image_Segmentation.pdf' 
              width="100%" 
              height="400px" 
              title="CV" 
            />
},
{
    id: 4,
    slug: "HIS-expts",
    title: "Histopathological Image Segmentation on Breast Cancer Whole Slide Images - Different Approaches",
    date: "2025-06-17",
    author: "Shourya Pratap Singh",
    content:<iframe 
              src='/HIS_Expt.pdf' 
              width="100%" 
              height="400px" 
              title="CV" 
            />
}
];



export default blogs;
