import LearnToDesignBanner from "../../components/Banners/LearnToDesignBanner.jsx/LearnToDesign";
import AdobePhoto from "../../components/Banners/AdobePhotoShop/AdobePhotoShop";
import AdobeIllustrator from "../../components/Banners/AdobeIllustratorBanner/AdobeIllustrator";
export default function HomePageWrapper(){
    return (
    
        <div className="home-page-main-div">
         <LearnToDesignBanner />
                <AdobePhoto />
                <AdobeIllustrator />
        </div>
     
    );
}