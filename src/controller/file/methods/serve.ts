import { RequestHandler } from "@ooic/core";

const serve: RequestHandler = async (request, response, next) => {
  try {
    if (!request.files || Object.keys(request.files).length === 0) {
      response.status(400).send("No files were uploaded.");
      return;
    }
    
    const uploadPath = __dirname + "/uploads/" + request.files.uploadFile.name;

    request.files.uploadFile.mv(uploadPath, (err) => {
      if (err) {
        throw { statusCode: 500, message: "Dosya yüklenirken bir hata oluştu." };
      }

      response.status(200).send(uploadPath);
    });
  } catch (error) {
    next(error);
  }
};

export default serve;
