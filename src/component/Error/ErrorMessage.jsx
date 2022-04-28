import React from "react";
import "./styleError.css";

export default function ErrorMessage({ handlerRefresh, message }) {
  function tryFetchAgain() {
    if (window.navigator.onLine) {
      handlerRefresh();
    }
  }
  return (
    <div className="error-msg">
      {window.navigator.onLine ? (
        <>
          <h4>Error: {message} :(</h4>
          <button className="btn-try" onClick={tryFetchAgain}>
            Coba Lagi
          </button>
        </>
      ) : (
        <div className="offline-error">
          <h6>Sambungkan Ke Internet</h6>
          <p>Anda sedang offline, tidak ada koneksi internet</p>
          <button className="btn-try" onClick={tryFetchAgain}>
            Coba Lagi
          </button>
        </div>
      )}
    </div>
  );
}
