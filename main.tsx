/**
 * Web Audio API based sound synthesizer for the QR Risk Scanner.
 * Provides distinct audio feedback for different security states.
 */

class AudioService {
  private context: AudioContext | null = null;

  private init() {
    if (!this.context) {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.context.state === 'suspended') {
      this.context.resume();
    }
  }

  private playTone(freq: number, type: OscillatorType, duration: number, volume: number = 0.1) {
    this.init();
    if (!this.context) return;

    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.context.currentTime);
    
    gain.gain.setValueAtTime(volume, this.context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.context.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.context.destination);

    osc.start();
    osc.stop(this.context.currentTime + duration);
  }

  playScan() {
    // Short high-pitched chirp
    this.playTone(880, 'sine', 0.1, 0.05);
  }

  playSafe() {
    // Pleasant ascending ding
    setTimeout(() => this.playTone(523.25, 'sine', 0.5, 0.1), 0);
    setTimeout(() => this.playTone(659.25, 'sine', 0.5, 0.1), 100);
  }

  playSuspicious() {
    // Neutral double warning
    setTimeout(() => this.playTone(440, 'triangle', 0.3, 0.1), 0);
    setTimeout(() => this.playTone(440, 'triangle', 0.3, 0.1), 200);
  }

  playDangerous() {
    // Low urgent alert
    setTimeout(() => this.playTone(220, 'sawtooth', 0.4, 0.1), 0);
    setTimeout(() => this.playTone(110, 'sawtooth', 0.6, 0.1), 150);
  }
}

export const audioService = new AudioService();
