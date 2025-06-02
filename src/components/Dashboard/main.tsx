/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Header from "@/components/Header/Header";

import Completion from "@/components/CompletionSection/Completion";
import ProfileSection from "@/components/ProfileSection/ProfileSection";
import AisectionSection from "@/components/AIassistantSection/AisectionSection";
import Achevement from "@/components/AchevementSection/Achevement";

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-6 ">
     <Header/>
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       <Completion/>

        {/* Column 2 */}
        <div className="space-y-6">
          <ProfileSection/>
          <AisectionSection/>
          <Achevement/>

         
        </div>
      </div>
      
    </div>  )
}

export default Dashboard


