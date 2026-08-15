import { useState } from 'react'
import { resumeConfig } from '../config/resumeConfig'

const links = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#" className="nav-brand">
          <div style={{width:36,height:36,display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:8,background:'#eef2ff',color:'#1e3a8a',fontWeight:700,marginRight:10}}>GN</div>
          Gibson Nichol
        </a>

        <nav className="nav-links">
          <ul style={{display:'flex',gap:20,alignItems:'center',margin:0,padding:0,listStyle:'none'}}>
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`}>{l.label}</a>
              </li>
            ))}
          </ul>
          <div style={{display:'flex',gap:12,alignItems:'center',marginLeft:12}}>
            <a aria-label="GitHub" href="https://github.com/gnichol479">GitHub</a>
            <a aria-label="LinkedIn" href="https://linkedin.com/in/gibson-nichol-a9a490295/">LinkedIn</a>
            {resumeConfig.available && (
              <a href={resumeConfig.path} className="btn-resume">Resume</a>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-neutral-900 p-6">
            <button onClick={() => setOpen(false)} className="mb-4">Close</button>
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block py-2 text-white">{l.label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com/gnichol479" className="text-neutral-300 hover:text-white">GitHub</a>
              <a href="https://linkedin.com/in/gibson-nichol-a9a490295/" className="text-neutral-300 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
 