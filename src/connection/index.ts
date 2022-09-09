import mongoose from 'mongoose';

export const connectionDatabase = (): void => {
  try {
    const uri: string = process.env.DB_URI_CONNECTION ?? '';

    mongoose.connect(uri);
  } catch (error) {
    console.error('Falha ao conectar com o banco de dados');
  }
};
