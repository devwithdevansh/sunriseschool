import React, { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Minimize, RotateCcw, Loader2, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const trusteeVideo = "https://www.dropbox.com/scl/fi/jpoj7oq504w4dgcdi3h06/IMG_6354.MOV?rlkey=oxb7f9l4qyxijjrz9huqd01d5&st=8g1o57v7&raw=1";

const BEAMS = [
  { rotate: -70, delay: 0,    duration: 6   },
  { rotate: -45, delay: 0.5,  duration: 7   },
  { rotate: -20, delay: 1,    duration: 5.5 },
  { rotate:   5, delay: 0.3,  duration: 8   },
  { rotate:  25, delay: 0.8,  duration: 6.5 },
  { rotate:  50, delay: 0.2,  duration: 7.5 },
  { rotate:  70, delay: 0.6,  duration: 5   },
];

const fmt = (t) => {
  if (!t || isNaN(t)) return '0:00';
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
};

const TrusteeMessage = () => {
  const navigate = useNavigate();
  const videoRef  = useRef(null);
  const wrapRef   = useRef(null);   // fullscreen target
  const progRef   = useRef(null);   // progress bar element
  const hideTimer = useRef(null);

  // ── Video state (driven by actual video events, not guessed) ──
  const [isPlaying,    setIsPlaying]    = React.useState(false);
  const [isBuffering,  setIsBuffering]  = React.useState(true);
  const [hasError,     setHasError]     = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [progress,     setProgress]     = React.useState(0);
  const [currentTime,  setCurrentTime]  = React.useState('0:00');
  const [duration,     setDuration]     = React.useState('0:00');
  const [volume,       setVolume]       = React.useState(1);
  const [isMuted,      setIsMuted]      = React.useState(false);
  const [showControls, setShowControls] = React.useState(true);
  const [hoverTime,    setHoverTime]    = React.useState(null);   // { x, label }
  const [seekFlash,    setSeekFlash]    = React.useState(null);   // '+5s' | '-5s'

  // ── Show / hide controls ─────────────────────────────────────
  const revealControls = useCallback(() => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  }, []);

  const keepControlsVisible = useCallback(() => {
    setShowControls(true);
    clearTimeout(hideTimer.current);
  }, []);

  // ── Play / Pause ──────────────────────────────────────────────
  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, []);

  // ── Seek ±seconds ─────────────────────────────────────────────
  const seekBy = useCallback((delta) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(v.duration || 0, v.currentTime + delta));
    setSeekFlash(delta > 0 ? `+${delta}s` : `${delta}s`);
    setTimeout(() => setSeekFlash(null), 700);
    revealControls();
  }, [revealControls]);

  // ── Fullscreen ────────────────────────────────────────────────
  const toggleFullscreen = useCallback(() => {
    const el = wrapRef.current;
    const v  = videoRef.current;
    if (!document.fullscreenElement && !document.webkitFullscreenElement) {
      if (el?.requestFullscreen)        el.requestFullscreen();
      else if (el?.webkitRequestFullscreen) el.webkitRequestFullscreen();
      else if (v?.webkitEnterFullscreen)    v.webkitEnterFullscreen();
    } else {
      if (document.exitFullscreen)            document.exitFullscreen();
      else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    }
  }, []);

  // ── Volume ────────────────────────────────────────────────────
  const handleVolumeChange = (e) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    setIsMuted(val === 0);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted  = val === 0;
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    if (isMuted) {
      v.muted  = false;
      v.volume = volume || 1;
      setIsMuted(false);
      if (volume === 0) setVolume(1);
    } else {
      v.muted = true;
      setIsMuted(true);
    }
  };

  // ── Progress bar click / hover ────────────────────────────────
  const handleProgressClick = (e) => {
    const bar = progRef.current;
    const v   = videoRef.current;
    if (!bar || !v?.duration) return;
    const rect  = bar.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    v.currentTime = ratio * v.duration;
  };

  const handleProgressHover = (e) => {
    const bar = progRef.current;
    const v   = videoRef.current;
    if (!bar || !v?.duration) return;
    const rect  = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    setHoverTime({ x: ratio * 100, label: fmt(ratio * v.duration) });
  };

  // ── Keyboard shortcuts ────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      // Don't fire when focus is on an input
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
      switch (e.code) {
        case 'Space':       e.preventDefault(); togglePlay();        break;
        case 'ArrowRight':  e.preventDefault(); seekBy(5);           break;
        case 'ArrowLeft':   e.preventDefault(); seekBy(-5);          break;
        case 'KeyM':        e.preventDefault(); toggleMute();        break;
        case 'KeyF':        e.preventDefault(); toggleFullscreen();  break;
        case 'Escape':      navigate(-1);                             break;
        default: break;
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [togglePlay, seekBy, toggleFullscreen, navigate]);

  // ── Wire up video events (truth source for state) ─────────────
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay     = () => setIsPlaying(true);
    const onPause    = () => setIsPlaying(false);
    const onEnded    = () => { setIsPlaying(false); keepControlsVisible(); };
    const onWaiting  = () => setIsBuffering(true);
    const onCanPlay  = () => setIsBuffering(false);
    const onError    = () => { setHasError(true); setIsBuffering(false); };
    const onMeta     = () => setDuration(fmt(v.duration));
    const onTimeUpd  = () => {
      if (!v.duration) return;
      setProgress((v.currentTime / v.duration) * 100);
      setCurrentTime(fmt(v.currentTime));
    };
    const onVolumeChg = () => {
      setIsMuted(v.muted);
      if (!v.muted) setVolume(v.volume);
    };

    v.addEventListener('play',         onPlay);
    v.addEventListener('pause',        onPause);
    v.addEventListener('ended',        onEnded);
    v.addEventListener('waiting',      onWaiting);
    v.addEventListener('canplay',      onCanPlay);
    v.addEventListener('error',        onError);
    v.addEventListener('loadedmetadata', onMeta);
    v.addEventListener('timeupdate',   onTimeUpd);
    v.addEventListener('volumechange', onVolumeChg);

    return () => {
      v.removeEventListener('play',         onPlay);
      v.removeEventListener('pause',        onPause);
      v.removeEventListener('ended',        onEnded);
      v.removeEventListener('waiting',      onWaiting);
      v.removeEventListener('canplay',      onCanPlay);
      v.removeEventListener('error',        onError);
      v.removeEventListener('loadedmetadata', onMeta);
      v.removeEventListener('timeupdate',   onTimeUpd);
      v.removeEventListener('volumechange', onVolumeChg);
    };
  }, [keepControlsVisible]);

  // ── Fullscreen change ─────────────────────────────────────────
  useEffect(() => {
    const onChange = () =>
      setIsFullscreen(!!(document.fullscreenElement || document.webkitFullscreenElement));
    document.addEventListener('fullscreenchange',       onChange);
    document.addEventListener('webkitfullscreenchange', onChange);
    return () => {
      document.removeEventListener('fullscreenchange',       onChange);
      document.removeEventListener('webkitfullscreenchange', onChange);
    };
  }, []);

  // ── Lock body scroll on mount ─────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    // Auto-show controls for 3s on open
    revealControls();
    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(hideTimer.current);
    };
  }, [revealControls]);

  const onClose = () => navigate(-1);

  // Controls visible when: paused | buffering | user moved mouse | ended
  const controlsVisible = showControls || !isPlaying || isBuffering;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[2000] flex items-center justify-center p-0 md:p-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#00162B]" />

      {/* Sunrise beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        {BEAMS.map((b, i) => (
          <motion.div key={i} className="absolute"
            style={{
              top: '-10vh', left: '50%',
              transformOrigin: 'top center',
              rotate: `${b.rotate}deg`,
              width: '1px', height: '200vh',
              background: 'linear-gradient(to bottom, rgba(255,160,30,0.55) 0%, rgba(255,180,60,0.12) 40%, transparent 100%)',
              filter: 'blur(18px)',
            }}
            initial={{ opacity: 0, scaleY: 0.4 }}
            animate={{ opacity: [0, 0.9, 0.5, 0.9, 0], scaleY: [0.4, 1, 1.05, 1, 0.4] }}
            transition={{ duration: b.duration, repeat: Infinity, delay: b.delay, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Warm halo */}
      <div className="absolute pointer-events-none" style={{
        top: '50%', left: '50%', transform: 'translate(-50%,-55%)',
        width: '70vw', height: '70vw', maxWidth: 800, maxHeight: 800,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse at center, rgba(234,130,20,0.18) 0%, rgba(234,130,20,0.06) 45%, transparent 70%)',
      }} />
      <div className="absolute inset-0 bg-[#00162B]/50 backdrop-blur-[2px]" />

      {/* Keyboard hint bar (fades after 4s) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3 pointer-events-none"
      >
        {[['Space','Play/Pause'],['←→','+/-5s'],['M','Mute'],['F','Fullscreen'],['Esc','Close']].map(([key, label]) => (
          <motion.span key={key}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 1 }}
            className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-gray-300"
          >
            <kbd className="font-black text-brand-orange">{key}</kbd>
            <span className="opacity-60">{label}</span>
          </motion.span>
        ))}
      </motion.div>

      {/* Modal */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 28, stiffness: 280 }}
        className="relative w-full max-w-5xl z-10 h-full md:h-auto flex flex-col"
      >
        <div className="absolute -inset-px md:-inset-[2px] rounded-2xl pointer-events-none"
          style={{ background: 'linear-gradient(135deg,rgba(234,130,20,0.6) 0%,rgba(255,200,80,0.2) 50%,rgba(234,130,20,0.6) 100%)', filter: 'blur(8px)', opacity: 0.7 }}
        />

        <div className="relative bg-[#001f38]/90 backdrop-blur-2xl md:rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.7)] flex flex-col h-full md:h-auto">

          {/* Header */}
          <div className="relative px-5 py-4 md:px-8 md:py-5 border-b border-white/10 flex items-center justify-between shrink-0"
            style={{ background: 'linear-gradient(90deg,rgba(0,22,43,0.95) 0%,rgba(0,40,80,0.8) 100%)' }}
          >
            <div>
              <p className="text-[9px] font-black tracking-[0.4em] uppercase text-brand-orange mb-1 opacity-80">
                Sunrise School · Rajkot
              </p>
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic text-white leading-none">
                Trustee's{' '}
                <span style={{ background: 'linear-gradient(90deg,#EA8214,#FFC850)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Message
                </span>
              </h2>
              <p className="text-xs text-gray-400 mt-1 font-light">A personal message from the leadership of Sunrise School</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="p-2 rounded-full bg-white/8 hover:bg-white/15 text-gray-300 hover:text-white border border-white/15 transition-colors"
            >
              <X size={22} />
            </motion.button>

            <motion.div
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-0 left-0 right-0 h-px origin-left"
              style={{ background: 'linear-gradient(90deg,transparent,#EA8214,#FFC850,#EA8214,transparent)' }}
            />
          </div>

          {/* Video */}
          <div
            ref={wrapRef}
            className="relative bg-black flex-1 overflow-hidden cursor-pointer select-none"
            onMouseMove={revealControls}
            onTouchStart={revealControls}
            onMouseLeave={() => isPlaying && !isBuffering && setShowControls(false)}
            // Single click = play/pause; double click = fullscreen
            onClick={togglePlay}
            onDoubleClick={toggleFullscreen}
          >
            {/* Video element */}
            <div className="w-full h-full md:aspect-video flex items-center justify-center bg-black">
              <video
                ref={videoRef}
                className="w-full h-full object-contain"
                autoPlay
                playsInline
              >
                <source src={trusteeVideo} type="video/quicktime" />
                <source src={trusteeVideo} type="video/mp4" />
              </video>
            </div>

            {/* Buffering spinner */}
            <AnimatePresence>
              {isBuffering && !hasError && (
                <motion.div
                  key="buffering"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px] pointer-events-none"
                >
                  <Loader2 size={48} className="text-brand-orange animate-spin" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error state */}
            <AnimatePresence>
              {hasError && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 gap-4 pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <AlertTriangle size={48} className="text-brand-orange" />
                  <p className="text-white font-bold text-lg">Unable to load video</p>
                  <p className="text-gray-400 text-sm">Please check your connection and try again.</p>
                  <button
                    onClick={() => { setHasError(false); setIsBuffering(true); videoRef.current?.load(); }}
                    className="mt-2 flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-orange/50 text-brand-orange font-bold text-sm hover:bg-brand-orange/10 transition-colors"
                  >
                    <RotateCcw size={16} /> Retry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Center big play button when paused */}
            <AnimatePresence>
              {!isPlaying && !isBuffering && !hasError && (
                <motion.div
                  key="play-overlay"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/25 backdrop-blur-[1px] pointer-events-none"
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-2xl pl-1"
                    style={{ background: 'linear-gradient(135deg,#EA8214,#FFC850)' }}>
                    <Play size={36} fill="currentColor" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Seek flash (±5s) */}
            <AnimatePresence>
              {seekFlash && (
                <motion.div
                  key={seekFlash + Date.now()}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.2 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-black/60 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl text-white font-black text-2xl"
                >
                  {seekFlash}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Controls overlay */}
            <motion.div
              animate={{ opacity: controlsVisible ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent pt-16 pb-4 px-5 md:px-6 pointer-events-none"
              style={{ pointerEvents: controlsVisible ? 'auto' : 'none' }}
              onClick={(e) => e.stopPropagation()} // don't trigger play/pause on controls click
            >
              {/* Progress bar */}
              <div
                ref={progRef}
                className="relative w-full h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer group/prog"
                onClick={handleProgressClick}
                onMouseMove={handleProgressHover}
                onMouseLeave={() => setHoverTime(null)}
              >
                {/* Filled */}
                <div className="absolute top-0 left-0 h-full rounded-full pointer-events-none"
                  style={{ width: `${progress}%`, background: 'linear-gradient(90deg,#EA8214,#FFC850)' }}
                />
                {/* Hover tooltip */}
                {hoverTime && (
                  <div
                    className="absolute -top-8 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md pointer-events-none"
                    style={{ left: `${hoverTime.x}%` }}
                  >
                    {hoverTime.label}
                  </div>
                )}
                {/* Thumb */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-lg scale-0 group-hover/prog:scale-100 transition-transform pointer-events-none"
                  style={{ left: `${progress}%` }}
                />
                {/* Invisible wider hit target */}
                <div className="absolute -inset-y-2 inset-x-0 cursor-pointer" />
              </div>

              {/* Bottom row */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  {/* Play/Pause */}
                  <button onClick={togglePlay} className="hover:text-brand-orange transition-colors">
                    {isPlaying
                      ? <Pause size={22} fill="currentColor" />
                      : <Play  size={22} fill="currentColor" />}
                  </button>

                  {/* Volume */}
                  <div className="flex items-center gap-2 group/vol">
                    <button onClick={(e) => { e.stopPropagation(); toggleMute(); }} className="hover:text-brand-orange transition-colors">
                      {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                    </button>
                    <input
                      type="range" min="0" max="1" step="0.05"
                      value={isMuted ? 0 : volume}
                      onClick={(e) => e.stopPropagation()}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                    />
                  </div>

                  {/* Time */}
                  <span className="text-xs font-medium tabular-nums text-gray-300">
                    {currentTime} / {duration}
                  </span>
                </div>

                {/* Fullscreen */}
                <button onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }} className="hover:text-brand-orange transition-colors">
                  {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="px-5 py-3 md:px-8 md:py-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0"
            style={{ background: 'linear-gradient(90deg,rgba(0,22,43,0.95) 0%,rgba(0,40,80,0.8) 100%)' }}
          >
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full animate-pulse shrink-0"
                style={{ background: 'linear-gradient(135deg,#EA8214,#FFC850)' }} />
              <p className="text-sm text-gray-300 font-light">
                <span className="font-black text-white uppercase tracking-wider text-[11px]">Sunrise School</span>
                {' '}— Excellence in Education
              </p>
            </div>
            <span className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border"
              style={{ color: '#FFC850', borderColor: 'rgba(234,130,20,0.4)', background: 'rgba(234,130,20,0.1)' }}
            >
              Admissions 2026-27 Open
            </span>
          </div>

        </div>
      </motion.div>
    </motion.div>
  );
};

export default TrusteeMessage;
