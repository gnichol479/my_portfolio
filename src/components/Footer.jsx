export default function Footer(){
  return (
    <footer className="footer">
      <div className="site-container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'20px 0'}}>
        <div className="text-sm">© {new Date().getFullYear()} Gibson Nichol</div>
        <div className="footer-links">
          <a href="mailto:gibson.nichol@gmail.com">Email</a>
          <a href="https://github.com/gnichol479">GitHub</a>
          <a href="https://linkedin.com/in/gibson-nichol-a9a490295/">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
 