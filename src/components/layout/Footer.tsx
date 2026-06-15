export default function Footer() {
  return (
    <footer
      style={{
        padding: '32px 80px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono), monospace',
          fontSize: '10px',
          color: 'var(--text-muted)',
          letterSpacing: '2px',
        }}
      >
        © 2025 Arda Tuncay
      </p>
    </footer>
  );
}
