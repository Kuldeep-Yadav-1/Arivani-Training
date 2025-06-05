import React, { useEffect } from "react";
import Swal from "sweetalert2";

const ShowAlert = ({ success, error, setError, setSuccess }) => {
  useEffect(() => {
    // if (success) {
    //   Swal.fire({
    //     icon: "success",
    //     title: "Congratulations!",
    //     text: success,
    //     showConfirmButton: true,
    //     timer: 3000,
    //   });
    // }
    // if (error) {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Caution!",
    //     text: error,
    //     showConfirmButton: true,
    //     timer: 3000,
    //   });
    // }
    if (success || error) {
      Swal.fire({
        icon: success ? "success" : "error",
        title: success ? "Congratulations!" : "Caution",
        text: success ? success : error,
        showConfirmButton: true,
        timer: 3000,
      });
    }
    setError("");
    setSuccess("");
  }, [success, error]);

  return <></>;
};

export default ShowAlert;
