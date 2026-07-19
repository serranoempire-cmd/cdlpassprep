import type { Article } from "./types";
import cdlGeneralKnowledgePracticeTest from "./cdl-general-knowledge-practice-test";
import airBrakeTestPsiNumbers from "./air-brake-test-psi-numbers";
import cdlPreTripInspectionScript from "./cdl-pre-trip-inspection-script";
import howHardIsTheCdlTest from "./how-hard-is-the-cdl-test";
import cdlTestQuestionsAndAnswers from "./cdl-test-questions-and-answers";
import whyPeopleFailTheCdlTest from "./why-people-fail-the-cdl-test";
import cdlStudyGuideFree from "./cdl-study-guide-free";
import cdlEndorsementsExplained from "./cdl-endorsements-explained";
import cdlJobsNoExperience from "./cdl-jobs-no-experience";
import englishProficiencyCdl from "./english-proficiency-cdl";

export const ARTICLES: Article[] = [
  cdlGeneralKnowledgePracticeTest,
  airBrakeTestPsiNumbers,
  cdlPreTripInspectionScript,
  howHardIsTheCdlTest,
  cdlTestQuestionsAndAnswers,
  whyPeopleFailTheCdlTest,
  cdlStudyGuideFree,
  cdlEndorsementsExplained,
  cdlJobsNoExperience,
  englishProficiencyCdl,
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
