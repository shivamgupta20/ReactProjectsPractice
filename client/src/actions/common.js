export default function getErrorMessage(error, callback) {
  console.error(error);
  if (error.bodyUsed) {
    callback(error.message || error.statusText);
  } else if(error.json) {
    error
      .json()
      .then(data => {
        let errorMessage = data.error.statusText;
        if(typeof data.error === 'string'){
          errorMessage = data.error;
        }else if (data.error.errors && data.error.errors.length) {
          errorMessage = data.error.errors[0].messages.join(".   ");
        }
        callback(errorMessage);
      })
      .catch(error2 => {
        callback(error.message || error.statusText);
      });
  } else {
    callback(error.message || error.statusText)
  }
}
