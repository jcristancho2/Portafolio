
import React, {useEffect, useState, useRef} from 'react';

export default function TypingEffect({
  texts = ["hola"],
  speed = 80,
  deleteSpeed = 40,
  pause = 1200,
  loop = true,
  className = "",
  cursor = "|",
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const mounted = useRef(true);
  

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    const blinkId = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkId);
  }, []);

  useEffect(() => {
    if (!mounted.current) return;
    if (!texts || texts.length === 0) return;

    const currentText = texts[index];

    if (!deleting && subIndex === currentText.length) {
      const timeout = setTimeout(() => {
        if (!mounted.current) return;
        setDeleting(true);
      }, pause);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => {
        const next = i + 1;
        if (next >= texts.length) return loop ? 0 : i;
        return next;
      });
      return;
    }

    const timeout = setTimeout(() => {
      if (!mounted.current) return;
      setSubIndex((s) => s + (deleting ? -1 : 1));
    }, deleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, texts, speed, deleteSpeed, pause, loop]);

  const display = texts && texts.length ? texts[index].slice(0, subIndex) : "";

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span aria-live="polite">{display}</span>
      <span
        aria-hidden="true"
        className={`ml-1 select-none transition-opacity duration-200 ${blink ? "opacity-100" : "opacity-30"}`}
      >
        {cursor}
      </span>
    </span>
  );
}