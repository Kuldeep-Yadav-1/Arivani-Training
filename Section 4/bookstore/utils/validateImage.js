const validateImage = (filename) => {
    console.log(filename, "file name in validate");
    const allowedExt = ["png", "jpeg", "jpg", "gif", "webp"];

    // Get the extension of the uploaded file
    const ext = filename.split('.');
    const extension = ext[1];

    //Check if the uploaded file is allowed
    return allowedExt.includes(extension);
};

const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

const uploadFile = async (e) => {
    if (!e.target.files) return;

    let file = e.target.files[0];
    console.log(file?.name, "file.name ?");
    if (!file?.name) {
        setSelFile(null);
        return;
    }

    console.log(file.name, " user file");
    const isFileValid = validateImage(file.name);
    console.log(isFileValid, "validation result");

    if (isFileValid) {
        let converted = await convertToBase64(file);
        if (typeof converted === 'string') {
            console.log(converted, "base 64 string");
            setSelFile(converted); // Set the base64 string
        }
    } else {
        setSelFile("none");
    }

    setValidFile(isFileValid);
    console.log(isFileValid, "final validation result");
};
