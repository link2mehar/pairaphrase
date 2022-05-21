import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  postWizardTranslation,
  detectLanguage,
  uploadDocuments,
  MultiSegmentTranslation,
  fetchFileSegmantation,
  translateFile,
  submitSegment
} from "../http/translation-service";

export const translationWizardThunk = createAsyncThunk(
  "translation/wizard",
  async (data) => {
    const formData = new FormData();
    formData.append("text", data.text);

    if (data.text.match(/(.+)((\r?\n.+)*)/gm).length > 1) {
      const multi = await MultiSegmentTranslation(data.from, data.to, formData);
      return multi.data.translation;
    }
    const response = await postWizardTranslation(data.from, data.to, formData);
    return response.data.translation;
  }
);

export const detectLanguageThunk = createAsyncThunk(
  "translation/detect",
  async (data) => {
    const formData = new FormData();
    formData.append("text", data.text);
    const response = await detectLanguage(formData);
    return response.data.detected;
  }
);

export const fileThunk = createAsyncThunk(
  "translation/file",
  async (data) => {
    const { files, fileUploadOptions } = data;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`document${i + 1}`, files[i]);
    }
    const response = await uploadDocuments(formData, fileUploadOptions.source, fileUploadOptions.target);
    return response.data.result[0].id;
  }
);
export const translateFileThunk = createAsyncThunk(
  "translation/translate",
  async (data) => {
    const { translatedFileId, fileUploadOptions } = data;
    const response = await translateFile(translatedFileId, fileUploadOptions.source, fileUploadOptions.target);
    return response;
  }
);
export const fetchFileSegmantationThunk = createAsyncThunk(
  "translation/seg",
  async (id) => {
    const response = await fetchFileSegmantation(id);
    return response.data.translation;
  }
);

export const submitSegmentThunk = createAsyncThunk(
  "translation/subSeg",
  async (data) => {
    const response = await submitSegment(data);
    return response;
  }
);

const initialState = {
  translated: null,
  loading: false,
  detectedLanguage: "",
  detectLanguageLoading: false,
  translateLoading: false,
  translatedFileId: null,
  translateStatus: null,
  fileSegmentation: []
};

const translationSlice = createSlice({
  name: "translation",
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: {
    [translationWizardThunk.pending.type]: (state) => {
      state.loading = true;
    },
    [translationWizardThunk.fulfilled]: (state, action) => {
      state.translated = action.payload;
      state.loading = false;
    },
    [detectLanguageThunk.pending.type]: (state) => {
      state.detectLanguageLoading = true;
    },
    [detectLanguageThunk.fulfilled]: (state, action) => {
      state.detectedLanguage = action.payload;
      state.detectLanguageLoading = false;
    },
    [fileThunk.pending.type]: (state) => {
      state.uploadLoading = true;
    },
    [fileThunk.fulfilled]: (state, action) => {
      state.translatedFileId = action.payload;
      state.uploadLoading = false;
    },
    [translateFileThunk.pending.type]: (state) => {
      state.translateLoading = true;
    },
    [translateFileThunk.fulfilled]: (state, action) => {
      state.translateStatus = action.payload;
      state.translateLoading = false;
    },
    [fetchFileSegmantationThunk.fulfilled]: (state, action) => {
      state.fileSegmentation = action.payload;
    }
  }
});

export const { reset } = translationSlice.actions;
export default translationSlice;
