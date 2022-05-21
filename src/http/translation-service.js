import http from "./index";

const token = "b3fc671ee4231fe75ea9d2a3cfd6aa197b86d264cb4c5a39a545d208db2d4bf3";
export const uploadDocuments = (formData, source, target) => http.post(
  `/addfiles?token=${token}&source=${source}&target=${target}`,
  formData
);

export const postWizardTranslation = (source, target, formData) => http.post(
  `/translate?token=${token}&source=${source}&target=${target}`,
  formData
);
export const MultiSegmentTranslation = (source, target, formData) => http.post(
  `/translatemulti?token=${token}&source=${source}&target=${target}`,
  formData
);

export const detectLanguage = (formData) => http.post(
  `/detect?token=${token}`,
  formData
);

export const translateFile = (id, source, target) => http.get(
  `/translatefile?token=${token}&id=${id}&source=${source}&target=${target}`
);

export const fetchFileSegmantation = (id) => http.get(
  `/filesegmentation?token=${token}&id=${id}`
);

export const submitSegment = (data) => http.post(
  `/submitsegment?token=${token}&source=en-US&target=fr-FR`,
  JSON.stringify(data)
);
