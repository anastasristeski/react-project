import bannerPhoto from "../../../assets/adobe-photo-shop.png";
export default function AdobePhoto() {
  return (
    <div className="adobe-photoshop-banner">
      <div className="adobe-photo-shop">
        <h1 className="learn-adobe-title">Adobe Photoshop</h1>
        <h3 className="learn-adobe-description">
          Platform for editing raster graphics
        </h3>
        <button className="learn-adobe-button">Learn Photoshop</button>
      </div>

      <div className="adobe-photo-image">
        <img src={bannerPhoto} alt="AdobePhotoshop logo"/>
      </div>
    </div>
  );
}
