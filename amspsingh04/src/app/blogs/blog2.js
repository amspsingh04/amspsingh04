// blog2.js

const blogs = [
    {
        id: 1,
      title: "Moral Policing is the Key",
      date: "2020-05-19",
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
  
  We, the youth of India, must now come together to make the world a better place. Otherwise, we are collectively lost as a society.`,
      author: "Shourya Pratap Singh",
    },
    {
        id:2,
      title: "AMKR - Assistive Mechanism of Knowledge Representation",
      date: "2024-01-30",
      content: `AMKR are pair of eye glasses that can be used by those who experience vision issues, 
  to be able to read text, recognise familiar faces and perceiving the world around them.
  
  We use Raspberry Pi0 and PiCam V3 as the basis of our product. The main aim for choosing this hardware 
  stack was to keep the costs down to a minimum, at ~$50. However, the greatest limitations that arose with this 
  was the restricted RAM capacity at 512MB and the presence of a single core CPU clocked at 1GHz. To overcome this, 
  we had to use the power of cloud as well as we could, and create pipelines that would interface the RPi0 module 
  with the cloud-based models.
  
  **Let's delve a bit into how we accomplished the three tasks we had set out to complete:** 
  
  ### OCR:
  V3 captures an image on command, which is then processed to reduce the image size and maintain the quality. 
  This image is further passed to Azure OCR API. The text from the image is obtained and is passed onto the Azure 
  TTS API. The final voice obtained is of the text as seen in the image, and it is spoken into the headset of the 
  user which is connected to the RPi0 through Bluetooth.
  
  ### Scene Perception:
  In a similar vein, when the corresponding command is used, V3 captures an image, which is processed and passed 
  onto the GPT4V API and tasked with Scene recognition. The description is passed onto the Azure TTS API and the 
  final voice obtained is played into the Bluetooth headset of the user.
  
  ### Face Recognition:
  We accomplished face recognition using TFLite for RPi. The V3 captures images on command and will process it 
  before passing it on to the model for face recognition (hosted on cloud). In a way similar to what we did for 
  hostelHub, we checked for FaceFeatures and implemented checks to determine whether the face matched with a 
  familiar person’s face. Should it match, the recognised individual’s identity is provided to the user using TTS into the 
  Bluetooth headset of the user. Else, it shall indicate the person is unknown.`,
      author: "Shourya Pratap Singh",
    },
  ];
  
  export default blogs;
  