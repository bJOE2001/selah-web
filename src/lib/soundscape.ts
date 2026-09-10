// Sanctuary Soundscape Engine using Web Audio API
// Generates gentle, warm, organic acoustic ambiance (ambient chime & soft drone)

class SoundscapeEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private chimeInterval: NodeJS.Timeout | null = null;

  public init() {
    if (typeof window === "undefined") return;
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    this.isPlaying = true;
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.masterGain.gain.linearRampToValueAtTime(0.12, this.ctx.currentTime + 3);
    this.masterGain.connect(this.ctx.destination);

    // Warm, soothing chord frequencies (C major 9 / sanctuary resonance: C3, G3, D4, E4)
    const freqs = [130.81, 196.0, 293.66, 329.63];

    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq + (idx * 0.2), this.ctx.currentTime);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(450, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.08 / (idx + 1), this.ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      this.oscillators.push(osc);
    });

    // Occasional gentle prayer chime every 14 seconds
    this.playChime();
    this.chimeInterval = setInterval(() => {
      if (this.isPlaying) this.playChime();
    }, 14000);
  }

  private playChime() {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;
    const chimeFreqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    const note = chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(note, this.ctx.currentTime);

    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.05, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 4.6);
  }

  public stop() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.chimeInterval) {
      clearInterval(this.chimeInterval);
      this.chimeInterval = null;
    }

    if (this.masterGain && this.ctx) {
      this.masterGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1);
      setTimeout(() => {
        this.oscillators.forEach(o => {
          try { o.stop(); o.disconnect(); } catch { /* ignore */ }
        });
        this.oscillators = [];
      }, 1000);
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const soundscape = new SoundscapeEngine();
