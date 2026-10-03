import React, { useState } from "react";

const PAYMENT_LINK =
  "https://pages.razorpay.com/pl_TjWq2k2OQAFbVY/view";

export default function RazorpayPaymentTest() {
  const [status, setStatus] = useState("not_started");

  const openPayment = () => {
    setStatus("payment_started");

    window.open(
      PAYMENT_LINK,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          background: "#fff",
          borderRadius: "16px",
          padding: "35px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
        }}
      >
        <h1>Razorpay Payment Test</h1>

        {status === "not_started" && (
          <>
            <p>
              Click below to open the Razorpay payment page.
            </p>

            <button
              onClick={openPayment}
              style={buttonStyle}
            >
              Pay Now
            </button>
          </>
        )}

        {status === "payment_started" && (
          <>
            <div style={{ fontSize: "50px" }}>
              💳
            </div>

            <h2>Complete Payment</h2>

            <p>
              Razorpay has been opened in a new tab.
              Complete your payment there.
            </p>

            <button
              onClick={() => setStatus("success")}
              style={{
                ...buttonStyle,
                background: "#16a34a",
              }}
            >
              ✓ Payment Successful
            </button>

            <button
              onClick={() => setStatus("failed")}
              style={{
                ...buttonStyle,
                background: "#dc2626",
              }}
            >
              ✕ Payment Failed
            </button>

            <button
              onClick={openPayment}
              style={{
                ...buttonStyle,
                background: "#6b7280",
              }}
            >
              Open Payment Again
            </button>
          </>
        )}

        {status === "success" && (
          <>
            <div
              style={{
                fontSize: "70px",
                color: "#16a34a",
              }}
            >
              ✓
            </div>

            <h2 style={{ color: "#15803d" }}>
              Payment Successful
            </h2>

            <p>
              Your payment was completed successfully.
            </p>

            <button
              onClick={() => setStatus("not_started")}
              style={buttonStyle}
            >
              Make Another Payment
            </button>
          </>
        )}

        {status === "failed" && (
          <>
            <div
              style={{
                fontSize: "70px",
                color: "#dc2626",
              }}
            >
              ✕
            </div>

            <h2 style={{ color: "#dc2626" }}>
              Payment Failed
            </h2>

            <p>
              Your payment was not completed.
            </p>

            <button
              onClick={openPayment}
              style={buttonStyle}
            >
              Repay Now
            </button>

            <button
              onClick={() => setStatus("not_started")}
              style={{
                ...buttonStyle,
                background: "#6b7280",
              }}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "14px",
  marginTop: "12px",
  border: "none",
  borderRadius: "8px",
  background: "#2563eb",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  cursor: "pointer",
};