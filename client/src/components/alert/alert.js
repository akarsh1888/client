import React, { useEffect } from "react";
import { connect } from "react-redux";

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Alert = ({ error }) => {
  //   useEffect(() => {
  //     toast.info(`${error}`, {
  //       position: "top-right",
  //       autoClose: 2000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   }, [error]);

  return (
    <div>
      <ToastContainer
        position="top-left"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.user.error,
});

export default connect(mapStateToProps, null)(Alert);
