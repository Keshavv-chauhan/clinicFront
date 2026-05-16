import { BRAND } from "./theme/brand";

import { ConditionPage } from "./pages/ConditionPage";
import { ContactPage } from "./pages/ContactPage";
import { FunctionalTrainingPage } from "./pages/FunctionalTrainingPage";
import { HomePage } from "./pages/HomePage";
import { HomeopathyPage } from "./pages/HomeopathyPage";
import { HydraTherapyPage } from "./pages/HydraTherapyPage";
import { PhysiotherapyPage } from "./pages/PhysiotherapyPage";
import { TotalTransformationProgramPage } from "./pages/TotalTransformationProgramPage";
import { TeamPage } from "./pages/TeamPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { AdminLoginPage } from "./pages/AdminLoginPage";
import { LimbLengtheningPage } from "./pages/LimbLengtheningPage";

export const routes = {
  "/": <HomePage />,
  "/admin": <AdminLoginPage />,
  "/admin/dashboard": <AdminDashboardPage />,
  "/homeopathy": <HomeopathyPage />,
  "/physiotherapy": <PhysiotherapyPage />,
  "/physiotherapy/herniated-disc": (
    <ConditionPage
      title="Herniated Disc"
      category="Physiotherapy"
      desc="Neural decompression and disc rehabilitation for lasting relief."
      accentColor={BRAND.blue}
      bullets={[
        "MRI-guided assessment & McKenzie evaluation",
        "Spinal decompression traction therapy",
        "Neural mobilisation & nerve flossing",
        "Core stabilisation programme",
        "Ergonomic & postural education",
        "Return-to-activity graded programme",
      ]}
    />
  ),
  "/physiotherapy/back-pain": (
    <ConditionPage
      title="Back Pain"
      category="Physiotherapy"
      desc="Evidence-based treatment for acute and chronic lumbar pain."
      accentColor={BRAND.blue}
    />
  ),
  "/physiotherapy/cervical-pain": (
    <ConditionPage
      title="Cervical Pain"
      category="Physiotherapy"
      desc="Manual therapy and postural correction for neck pain and radiculopathy."
      accentColor={BRAND.blue}
    />
  ),
  "/physiotherapy/disc-bulge": (
    <ConditionPage
      title="Disc Bulge"
      category="Physiotherapy"
      desc="Conservative management to centralise symptoms and restore disc health."
      accentColor={BRAND.blue}
    />
  ),
  "/physiotherapy/frozen-shoulder": (
    <ConditionPage
      title="Frozen Shoulder"
      category="Physiotherapy"
      desc="Progressive mobilisation and stretching for full shoulder range restoration."
      accentColor={BRAND.blue}
    />
  ),
  "/physiotherapy/chronic-pain": (
    <ConditionPage
      title="Chronic Pain"
      category="Physiotherapy"
      desc="Multidisciplinary pain science education and active rehabilitation."
      accentColor={BRAND.blue}
    />
  ),
  "/hydra-therapy": <HydraTherapyPage />,
  "/functional-training": <FunctionalTrainingPage />,
  "/total-transformation-program": <TotalTransformationProgramPage />,
  "/limb-lengthening": <LimbLengtheningPage />,
  "/about": <TeamPage />,
  "/testimonials": <TestimonialsPage />,
  "/contact": <ContactPage />,
};
