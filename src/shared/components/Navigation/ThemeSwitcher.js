import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/theme-context';

export function ThemeSwitcher({ className = '' }) {
  const { theme, isDark, setTheme } = useContext(ThemeContext);

  const Btn = ({ active, onClick, label, children }) => (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      style={{
        padding: '6px 10px',
        borderRadius: 8,
        border: active ? '2px solid currentColor' : '1px solid rgba(127,127,127,.4)',
        background: active ? 'rgba(127,127,127,.15)' : 'transparent',
        cursor: 'pointer',
        fontSize: 18,
        lineHeight: 1.2
      }}
    >
      {children}
    </button>
  );

  return (
    <div className={className}>
      <span
        className="switcher-label"
        style={{
          fontSize: 12,
          opacity: isDark ? 1 : 0.7,
          color: isDark ? 'var(--home-dark-text)' : 'var(--muted)'
        }}
      >
        effective: {isDark ? 'dark' : 'light'}
      </span>
      <Btn active={theme === 'system'} onClick={() => setTheme('system')} label="Follow system (auto)">🖥️</Btn>
      <Btn active={theme === 'light'} onClick={() => setTheme('light')} label="Light mode">☀️</Btn>
      <Btn active={theme === 'dark'} onClick={() => setTheme('dark')} label="Dark mode">🌙</Btn>
    </div>
  );
}

export default ThemeSwitcher;
