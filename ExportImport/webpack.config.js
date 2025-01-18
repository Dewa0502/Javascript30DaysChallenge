import path from 'path';

export default {
  entry: './index.js', // Entry point
  output: {
    filename: 'bundle.js', // Output file
    path: path.resolve(process.cwd(), 'dist'), // Output directory
  },
  mode: 'development', // Development mode
};
