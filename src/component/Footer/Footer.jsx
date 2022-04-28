import React from "react";
import "./footerStyles.css";

export default function Footer({ posisi }) {
  return (
    <div className={`footer ${posisi}`}>
      <p>Copyright &copy; 2022 - mbah darmo</p>
    </div>
  );
}
