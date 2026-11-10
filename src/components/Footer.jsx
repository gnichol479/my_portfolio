export default function Footer({ data, reduceMotion, onToggleMotion }) {
  return (
    <footer className="site-footer"><div className="site-container"><span>{data.siteTitle}<span className="brand-period">.</span></span><span className="mono">© {new Date().getFullYear()} {data.name} / Personal portfolio</span><button className="motion-toggle mono" onClick={onToggleMotion} aria-pressed={reduceMotion}>Reduce motion {reduceMotion ? 'on' : 'off'}</button><a className="mono" href="#top">Back to top ↑</a></div></footer>
  )
}
