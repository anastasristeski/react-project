import illustratorPhoto from "../../../assets/adobe-illustrator.png";
export default function AdobeIllustrator() {
  return (
    <div className="adobe-illustrator-banner">
      <div className="adobe-illustrator-shop">
        <h1 className="learn-illustrator-title">Adobe Photoshop</h1>
        <h3 className="learn-illustrator-description">
          Platform for editing raster graphics
        </h3>
        <button className="learn-illustrator-button">Learn Photoshop</button>
      </div>

      <div className="adobe-illustrator-image">
        <img src={illustratorPhoto} alt="AdobePhotoshop logo"/>
      </div>
    </div>
  );
}
