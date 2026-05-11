import { useEffect, useRef } from 'react';

export function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const isSuspendedRef = useRef(false);
  const isSelectingRef = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const setVisibility = () => {
      const visible = !isSuspendedRef.current && !isSelectingRef.current;
      dot.style.opacity = visible ? '1' : '0';
      ring.style.opacity = visible ? '1' : '0';
    };

    const syncSelectionState = () => {
      const selection = window.getSelection();
      const anchorNode = selection?.anchorNode;
      const focusNode = selection?.focusNode;

      if (!selection || selection.isCollapsed || !anchorNode || !focusNode) {
        isSelectingRef.current = false;
        setVisibility();
        return;
      }

      const anchorElement =
        anchorNode.nodeType === Node.ELEMENT_NODE ? (anchorNode as Element) : anchorNode.parentElement;
      const focusElement =
        focusNode.nodeType === Node.ELEMENT_NODE ? (focusNode as Element) : focusNode.parentElement;

      isSelectingRef.current = Boolean(
        anchorElement?.closest('[data-cursor-suspend]') || focusElement?.closest('[data-cursor-suspend]'),
      );
      setVisibility();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const handlePointerOver = (e: PointerEvent) => {
      const target = e.target instanceof Element ? e.target : null;
      isSuspendedRef.current = Boolean(target?.closest('[data-cursor-suspend]'));
      setVisibility();
    };

    const handleWindowBlur = () => {
      isSuspendedRef.current = false;
      isSelectingRef.current = false;
      setVisibility();
    };

    let rafId: number;
    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;
      ring.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('pointerover', handlePointerOver, { passive: true });
    document.addEventListener('selectionchange', syncSelectionState);
    window.addEventListener('mouseup', syncSelectionState);
    window.addEventListener('blur', handleWindowBlur);

    setVisibility();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('selectionchange', syncSelectionState);
      window.removeEventListener('mouseup', syncSelectionState);
      window.removeEventListener('blur', handleWindowBlur);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-[#ff2b2b] pointer-events-none will-change-transform transition-opacity duration-150"
        style={{ opacity: 0, transform: 'translate(-100px, -100px)' }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] h-10 w-10 rounded-full border border-[#ff2b2b]/50 pointer-events-none will-change-transform transition-opacity duration-150"
        style={{ opacity: 0, transform: 'translate(-100px, -100px)' }}
      />
    </>
  );
}
