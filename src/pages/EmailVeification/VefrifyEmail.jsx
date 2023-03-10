import { useEffect } from "react";
import EmailVerifiaction from "./EmailVerification";

function VerifyEmail() {
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const onKeyDown = (e) => {
    const input = e.target;
    const key = e.key;

    if (!isConnectedInput(input)) return;

    switch (key) {
      case "ArrowLeft": {
        if (input.selectionStart === 0 && input.selectionEnd === 0) {
          const prev = input.previousElementSibling;
          if (prev) {
            prev.focus();
            prev.selectionStart = input.value.length;
            prev.selectionEnd = input.value.length;
            e.preventDefault();
          }
        }
        break;
      }
      case "ArrowRight": {
        if (
          input.selectionStart === input.value.length &&
          input.selectionEnd === input.value.length
        ) {
          const next = input.nextElementSibling;
          if (next) {
            next.focus();
            next.selectionStart = 1;
            next.selectionEnd = 1;
            e.preventDefault();
          }
        }
        break;
      }
      case "Backspace": {
        if (input.selectionStart === 0 && input.selectionEnd === 0) {
          const prev = input.previousElementSibling;
          if (prev) {
            prev.focus();
            prev.value = prev.value.substring(0, prev.value.length - 1);
            prev.selectionStart = prev.value.length;
            prev.selectionEnd = prev.value.length;
            e.preventDefault();
          }
        }
        break;
      }
      case "Delete": {
        const next = input.nextElementSibling;
        if (next == null) return;
        if (
          input.selectionStart === input.value.length &&
          input.selectionEnd === input.value.length &&
          next.value != 0
        ) {
          next.focus();
          next.value = next.value.substring(1);
          next.selectionStart = 0;
          next.selectionEnd = 0;
          e.preventDefault();
        }
        break;
      }
      default: {
        if (key.length > 1) return;
        if (key.match(/^[^0-9]$/)) return e.preventDefault();
        onInputChange(input, key, e);
      }
    }
  };

  function onInputChange(input, value, e) {
    const start = input.selectionStart;
    const end = input.selectionEnd;

    if (input.value >= 1) {
      const next = input.nextElementSibling;
      if (next == null) return;
      const newValue = `${next.value.substring(
        0,
        start
      )}${value}${input.value.substring(end, 4)}`;
      next.value = newValue;
      next.focus();
    }
  }

  const isConnectedInput = (input) => {
    return input.matches("input") && input.closest(".cc-inputs");
  };

  return <EmailVerifiaction />;
}

export default VerifyEmail;
