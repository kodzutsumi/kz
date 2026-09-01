export type TestIterationMetadata = {
  index: number;
  length: number;
  progress: number;
  first: boolean;
  middle: boolean;
  last: boolean;
  evenOdd: 'even' | 'odd';
  even: boolean;
  odd: boolean;
};
