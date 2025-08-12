import AdobePhoto from "../../components/Banners/AdobePhotoShopBanner/AdobePhotoShop";
import AdobeIllustrator from "../../components/Banners/AdobeIllustratorBanner/AdobeIllustrator";
import LearnToDesignBanner from "../../components/Banners/LearnToDesignBanner/LearnToDesignBanner";

export default function HomePage() {
  return (
    <div className="home-page-main-div">
      <LearnToDesignBanner />
      <AdobePhoto />
      <AdobeIllustrator />
    </div>
  );
}
