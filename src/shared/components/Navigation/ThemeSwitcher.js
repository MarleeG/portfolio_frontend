import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/theme-context';

export function ThemeSwitcher({ className = '' }) {
  const { theme, isDark, setTheme } = useContext(ThemeContext);

  const isSystem = theme === 'system';
  const disableSystem = false; // System option should always remain enabled
  // In system mode, also disable the toggle that matches the effective mode
  const disableDark = isSystem && isDark;
  const disableLight = isSystem && !isDark;

  const Btn = ({ active, onClick, label, children, disabled = false }) => (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      onClick={onClick}
      style={{
        padding: '6px 10px',
        borderRadius: 8,
        border: active ? '2px solid currentColor' : '1px solid rgba(127,127,127,.4)',
        background: active ? 'rgba(127,127,127,.15)' : 'transparent',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: 18,
        lineHeight: 1.2,
        opacity: disabled ? 0.5 : 1
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
      <Btn
        active={theme === 'system'}
        disabled={disableSystem}
        onClick={() => setTheme('system')}
        label="Follow system (auto)"
      >
        🖥️
      </Btn>
      <Btn
        active={theme === 'light'}
        disabled={disableLight}
        onClick={() => setTheme('light')}
        label="Light mode"
      >
        ☀️
      </Btn>
      <Btn
        active={theme === 'dark'}
        disabled={disableDark}
        onClick={() => setTheme('dark')}
        label="Dark mode"
      >
        🌙
      </Btn>
    </div>
  );
}

export default ThemeSwitcher;
