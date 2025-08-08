"use client"

import React, { useEffect } from "react";
import Swal from "sweetalert2";

const ShowAlert = ({ success, error, setError, setSuccess }) => {
  useEffect(() => {
    if (success || error) {
      Swal.fire({
        icon: success ? "success" : "error",
        title: success ? "Congratulations!" : "Caution!",
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