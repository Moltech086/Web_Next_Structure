import React from "react";
import TSHeroSection from "./tsHeroSection/TSHeroSection";
import BranchFooter from "@/components/shared/branchFooter/BranchFooter";
import "./TechnologyDetails.scss";
import TSWhatIsSection from "./tsWhatIsSection/TSWhatIsSection";
import TSWhatCanSection from "./tsWhatCanSection/TSWhatCanSection";
import TSWhyChooseSection from "./tsWhyChooseSection/TSWhyChooseSection";
import TSHowMoltechCan from "./tsHowMoltechCan/TSHowMoltechCan";
import TSWhereSection from "./tsWhereSection/TSWhereSection";
import TSBenefitsSection from "./tsBenefitsSection/TSBenefitsSection";
import TSProblemSolutionSection from "./tsProblemSolutionSection/TSProblemSolutionSection";
import TSprocessSection from "./tsProcessSection/TSProcessSection";
import ServiceFAQ from "@/components/serviceFAQ/ServiceFAQ";

const TechnologyDetails = ({ data }) => {
  return (
    <div className="technology-sec technology-detail-page">
      <TSHeroSection heroSection={data?.heroSection} />
      <TSWhatIsSection whatIsSection={data?.whatIsSection} />
      <TSWhatCanSection
        whatCanSection={data?.whatCanSection}
        majorFeatures={data?.majorFeatures}
      />
      {data.whyChooseCardListData ? (
        <TSWhyChooseSection
          whyChooseTitleDesc={data?.whyChooseTitleDesc}
          whyChooseSection={data?.whyChooseCardListData}
        />
      ) : null}

      <TSHowMoltechCan
        howMoltechCanSection={data?.howMoltechCanSection}
        sliderCardData={data?.sliderCardData}
      />
      <TSWhereSection
        whereIsSection={data?.whereIsSection}
        whereIsSectionItem={data?.whereIsSectionItem}
      />
      <TSBenefitsSection
        benefitsSection={data?.benefitsSection}
        benefitCards={data?.benefitCards}
      />
      <TSProblemSolutionSection
        problemSolutionSection={data?.problemSolutionSection}
        problemList={data?.problemList}
        solutionList={data?.solutionList}
        heroSection={data?.heroSection}
      />
      <TSprocessSection
        processSection={data?.processSection}
        stepsList={data?.stepsList}
      />
      
       <div className="technology-faq">
         <ServiceFAQ items={data?.faqItems} title={data?.faqTitle} customDesc={data?.customDesc}/>
       </div>
      <BranchFooter />
    </div>
  );
};

export default TechnologyDetails;
