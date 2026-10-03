```jsx
import React, { useState } from "react";

const RAZORPAY_PAYMENT_LINK =
  "https://pages.razorpay.com/pl_TjWq2k2OQAFbVY/view";

export default function RazorpayPaymentTest() {
  const [status, setStatus] = useState("not_started");

  const openPayment = () => {
    setStatus("payment_started");

    window.open(
      RAZORPAY_PAYMENT_LINK,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const paymentSuccessful = () => {
    setStatus("success");
  };

  const paymentFailed = () => {
    setStatus("failed");
  };

  const repay = () => {
    setStatus("payment_started");

    window.open(
      RAZORPAY_PAYMENT_LINK,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* HEADER */}
        <div style={styles.logo}>
          ₹
        </div>

        <h1 style={styles.title}>
          Razorpay Payment Test
        </h1>

        <p style={styles.subtitle}>
          Test your Razorpay Payment Link
        </p>

        {/* NOT STARTED */}
        {status === "not_started" && (
          <>
            <div style={styles.infoBox}>
              <div style={styles.infoTitle}>
                Payment Required
              </div>

              <div style={styles.infoText}>
                Click the button below to open the Razorpay
                payment page.
              </div>
            </div>

            <button
              onClick={openPayment}
              style={styles.primaryButton}
            >
              Pay Now
            </button>
          </>
        )}

        {/* PAYMENT STARTED */}
        {status === "payment_started" && (
          <>
            <div style={styles.pendingIcon}>
              ?
            </div>

            <h2 style={styles.heading}>
              Complete Your Payment
            </h2>

            <p style={styles.text}>
              Razorpay has been opened in a new tab.
              Complete the payment there.
            </p>

            <div style={styles.testBox}>
              <strong>Testing Mode</strong>

              <p>
                After completing the payment, use the
                buttons below to test the result page.
              </p>
            </div>

            <button
              onClick={paymentSuccessful}
              style={styles.successButton}
            >
              ✓ Payment Successful
            </button>

            <button
              onClick={paymentFailed}
              style={styles.failedButton}
            >
              ✕ Payment Failed
            </button>

            <button
              onClick={openPayment}
              style={styles.secondaryButton}
            >
              Open Payment Again
            </button>
          </>
        )}

        {/* SUCCESS */}
        {status === "success" && (
          <>
            <div style={styles.successIcon}>
              ✓
            </div>

            <h2 style={styles.successTitle}>
              Payment Successful
            </h2>

            <p style={styles.text}>
              Your payment has been completed successfully.
            </p>

            <div style={styles.successBox}>
              <span>Payment Status</span>
              <strong>SUCCESS</strong>
            </div>

            <button
              onClick={() => setStatus("not_started")}
              style={styles.secondaryButton}
            >
              Make Another Payment
            </button>
          </>
        )}

        {/* FAILED */}
        {status === "failed" && (
          <>
            <div style={styles.failedIcon}>
              ✕
            </div>

            <h2 style={styles.failedTitle}>
              Payment Failed
            </h2>

            <p style={styles.text}>
              The payment was not completed.
            </p>

            <div style={styles.failedBox}>
              <span>Payment Status</span>
              <strong>FAILED</strong>
            </div>

            <button
              onClick={repay}
              style={styles.primaryButton}
            >
              Repay Now
            </button>

            <button
              onClick={() => setStatus("not_started")}
              style={styles.secondaryButton}
            >
              Cancel
            </button>
          </>
        )}

        {/* PAYMENT LINK */}
        <div style={styles.footer}>
          <span>Razorpay Payment Link</span>

          <button
            onClick={openPayment}
            style={styles.linkButton}
          >
            Open Payment Page
          </button>
        </div>

      </div>
    </div>
  );
}


// ==========================================================
// STYLES
// ==========================================================

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f4f6f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily:
      "Inter, Arial, Helvetica, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "460px",
    background: "#ffffff",
    borderRadius: "18px",
    padding: "40px",
    boxShadow:
      "0 10px 35px rgba(0,0,0,0.10)",
    textAlign: "center",
  },

  logo: {
    width: "64px",
    height: "64px",
    margin: "0 auto 20px",
    borderRadius: "50%",
    background: "#2563eb",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    fontWeight: "700",
  },

  title: {
    margin: 0,
    fontSize: "26px",
    fontWeight: "700",
    color: "#111827",
  },

  subtitle: {
    marginTop: "8px",
    marginBottom: "28px",
    color: "#6b7280",
    fontSize: "15px",
  },

  infoBox: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
  },

  infoTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: "8px",
  },

  infoText: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: "1.5",
  },

  heading: {
    fontSize: "22px",
    color: "#111827",
    marginTop: "20px",
  },

  text: {
    color: "#6b7280",
    fontSize: "15px",
    lineHeight: "1.6",
  },

  primaryButton: {
    width: "100%",
    border: "none",
    borderRadius: "10px",
    padding: "15px",
    background: "#2563eb",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "15px",
  },

  successButton: {
    width: "100%",
    border: "none",
    borderRadius: "10px",
    padding: "14px",
    background: "#16a34a",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "15px",
  },

  failedButton: {
    width: "100%",
    border: "none",
    borderRadius: "10px",
    padding: "14px",
    background: "#dc2626",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
  },

  secondaryButton: {
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    padding: "13px",
    background: "#ffffff",
    color: "#374151",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "10px",
  },

  pendingIcon: {
    width: "70px",
    height: "70px",
    margin: "20px auto",
    borderRadius: "50%",
    background: "#f59e0b",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    fontWeight: "700",
  },

  successIcon: {
    width: "75px",
    height: "75px",
    margin: "10px auto 20px",
    borderRadius: "50%",
    background: "#16a34a",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "42px",
    fontWeight: "700",
  },

  failedIcon: {
    width: "75px",
    height: "75px",
    margin: "10px auto 20px",
    borderRadius: "50%",
    background: "#dc2626",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "38px",
    fontWeight: "700",
  },

  successTitle: {
    color: "#15803d",
    fontSize: "24px",
  },

  failedTitle: {
    color: "#dc2626",
    fontSize: "24px",
  },

  successBox: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    marginTop: "20px",
    borderRadius: "10px",
    background: "#f0fdf4",
    color: "#15803d",
  },

  failedBox: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    marginTop: "20px",
    borderRadius: "10px",
    background: "#fef2f2",
    color: "#dc2626",
  },

  testBox: {
    marginTop: "20px",
    padding: "15px",
    borderRadius: "10px",
    background: "#fffbeb",
    border: "1px solid #fde68a",
    color: "#92400e",
    fontSize: "14px",
    lineHeight: "1.5",
  },

  footer: {
    marginTop: "30px",
    paddingTop: "20px",
    borderTop: "1px solid #e5e7eb",
    fontSize: "12px",
    color: "#9ca3af",
  },

  linkButton: {
    display: "block",
    margin: "8px auto 0",
    border: "none",
    background: "transparent",
    color: "#2563eb",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
  },
};
```
