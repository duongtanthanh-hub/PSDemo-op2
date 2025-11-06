export enum AppState {
  UPLOAD = 'UPLOAD',
  GENERATING = 'GENERATING',
  RESULTS = 'RESULTS',
  ERROR = 'ERROR',
}

export interface GeneratedImage {
  decade: string;
  imageUrl: string;
}
