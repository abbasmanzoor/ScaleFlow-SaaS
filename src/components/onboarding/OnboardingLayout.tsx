'use client';

import { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import Step1_PersonalInfo from './Step1_PersonalInfo';
import Step2_CompanyDetails from './Step2_CompanyDetails';
import Step3_TeamSetup from './Step3_TeamSetup';
import Step4_SelectPlan from './Step4_SelectPlan';
import Step5_ReviewSubmit from './Step5_ReviewSubmit';
import SuccessPage from './SuccessPage';

const TOTAL_STEPS = 5;
const STORAGE_KEY = 'onboardingData';

export default function OnboardingLayout() {
  const loadSavedData = () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed;
      }
    } catch (error) {
      console.error('Failed to load onboarding data:', error);
    }
    return null;
  };

  const savedData = loadSavedData();

  const [currentStep, setCurrentStep] = useState(savedData?.currentStep || 1);
  const [formData, setFormData] = useState<any>(savedData?.formData || {});
  const [isComplete, setIsComplete] = useState(savedData?.isComplete || false);

  useEffect(() => {
    const dataToSave = {
      currentStep,
      formData,
      isComplete,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }, [currentStep, formData, isComplete]);

  const handleNext = (stepData: any) => {
    const stepKey = `step${currentStep}`;
    const updatedData = { ...formData, [stepKey]: stepData };
    setFormData(updatedData);
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    setIsComplete(true);
  };

  // Success page - کارڈ کے اندر ڈارک موڈ کے ساتھ
  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto bg-white dark:bg-dark-light rounded-xl shadow-sm border border-border dark:border-border-dark p-8 md:p-12">
        <SuccessPage data={formData} />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-dark-light rounded-xl shadow-sm border border-border dark:border-border-dark p-8 md:p-12">
      <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />

      <div className="mt-8">
        {currentStep === 1 && (
          <Step1_PersonalInfo onNext={handleNext} defaultValues={formData.step1} />
        )}
        {currentStep === 2 && (
          <Step2_CompanyDetails onNext={handleNext} onBack={handleBack} defaultValues={formData.step2} />
        )}
        {currentStep === 3 && (
          <Step3_TeamSetup onNext={handleNext} onBack={handleBack} defaultValues={formData.step3} />
        )}
        {currentStep === 4 && (
          <Step4_SelectPlan onNext={handleNext} onBack={handleBack} defaultValues={formData.step4} />
        )}
        {currentStep === 5 && (
          <Step5_ReviewSubmit data={formData} onSubmit={handleSubmit} onBack={handleBack} />
        )}
      </div>
    </div>
  );
}