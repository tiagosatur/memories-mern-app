export const createBase64Image = (file) => {
  return new Promise((resolve, reject) => {
    if (!file) return reject({ message: "File is required" });
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      return resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      return reject(error);
    };
  });
};
