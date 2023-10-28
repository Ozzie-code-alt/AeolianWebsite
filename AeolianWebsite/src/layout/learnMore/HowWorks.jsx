import Card from "react-bootstrap/Card";
import '../../layout/layout-styles/howWorks.css'

const HowWorks = () => {
  return (
    <div>
      <div className="howWorks-Container">
        <div className="title-container">
          <h1>How it Works</h1>
        </div>


        <div className="card-container">
        <Card className="bg-dark card-element">
          <Card.Img
            src="\src\assets\card3_bg.svg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title className="card-title">Warp Perspective <br/>Transformation</Card.Title>
            <Card.Text>
            Obtains the co-ordinates of the corners of the screen and warps the perspective <br/>of the recieving frames
            </Card.Text>
           
          </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark card-element">
          <Card.Img
            src="\src\assets\card4_bg.svg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>Mask Generation</Card.Title>
            <Card.Text>
            Generates a mask to detect only the color of the stylus LED. Can be manually <br/>configured to work with any color stylus
            </Card.Text>

          </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark card-element">
          <Card.Img
            src="\src\assets\card5_bg.svg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>Track Stylus</Card.Title>
            <Card.Text>
            Tracks the placement of the stylus using a combination of contour and brightest <br/> pixel detection. Camera exposure must be reduced for effective detection
            </Card.Text>
            
          </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark card-element">
          <Card.Img
            src="\src\assets\card7_bg.svg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>Control Cursor</Card.Title>
            <Card.Text>
            Uses the co-ordinates obtained control the position of the cursor. Two modes for <br/>either dragging or drawing on the screen
            </Card.Text>
           
          </Card.ImgOverlay>
        </Card>

        <Card className="bg-dark card-element">
          <Card.Img
            src="\src\assets\card6_bg.svg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>Use Gestures</Card.Title>
            <Card.Text>
            Uses the co-ordinates obtained control the position of the cursor. Two modes for <br/> either dragging or drawing on the screen
            </Card.Text>
         
          </Card.ImgOverlay>
        </Card>

        
        <Card className="bg-dark card-element">
          <Card.Img
            src="\src\assets\card2_bg.svg"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>Use Voice</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional <br/>content. This content is a little bit
              longer.
            </Card.Text>
           
          </Card.ImgOverlay>
        </Card>
        </div>

      </div>
    </div>
  );
};

export default HowWorks;
